import React, { Component } from "react";
import axios from "axios";
import UserTable from "../components/UserTable";
import Search from "../components/Search";
import Spinner from "../components/Spinner";

// import data from "../mockData";

class Home extends Component {
  state = {
    data: null,
    filterByInfo: null,
    filterByCity: null,
    uniqueCities: null,
    filteredData: null,
  };

  async componentDidMount() {
    const { data } = await axios(
      "https://api.mockaroo.com/api/1394a820?count=30&key=2d5db190",
    );

    this.setState({ data: data });

    this.setState({ filteredData: data });
    this.setState({
      uniqueCities: [...new Set(data.map((info) => info.city))],
    });
  }

  onChange(e) {
    if (this.state.filterByCity) {
      this.setState({
        filteredData: this.state.filterByCity.filter(
          (data) =>
            data.first_name.includes(e.target.value) ||
            data.last_name.includes(e.target.value) ||
            data.email.includes(e.target.value),
        ),
      });
    } else {
      this.setState({
        filteredData: this.state.data.filter(
          (data) =>
            data.first_name.includes(e.target.value) ||
            data.last_name.includes(e.target.value) ||
            data.email.includes(e.target.value),
        ),
      });
    }
  }

  onSelect(city) {
    this.setState({
      filterByCity: this.state.data.filter((info) => info.city === city),
    });

    this.setState({
      filteredData: this.state.data.filter((info) => info.city === city),
    });
  }

  render() {
    return (
      <div>
        {this.state.data ? (
          <div>
            <Search
              onChange={(e) => this.onChange(e)}
              onSelect={(e) => this.onSelect(e)}
              data={this.state.filteredData}
              uniqueCities={this.state.uniqueCities}
            />
            <UserTable data={this.state.filteredData} />
          </div>
        ) : (
          <Spinner />
        )}

        {/* <Search
            onChange={(e) => this.onChange(e)}
            onSelect={(e) => this.onSelect(e)}
            data={this.state.filteredData}
            uniqueCities={this.state.uniqueCities}
          />
          <UserTable onRowClick={this.onRowClick} data={this.state.filteredData} /> */}
      </div>
    );
  }
}

export default Home;
