import React from 'react';
import $ from 'jquery';
import btc from '../../../Assets/css/btc.css'
import logo from '../../../Assets/css/images/btc.png'

export default class Bitcoin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0.00,
      lastFetch: ""
    }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    var context = this;

    window.setTimeout(function() {
      $.ajax({
        url: "https://api.coindesk.com/v1/bpi/currentprice.json",
        dataType: "json",
        method: "GET",
        success: function(response) {
          context.setState({
            price: response.bpi.USD.rate,
            lastFetch: response.time.updated
          });
        }
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1 className='text'>
            <div>
          BTC Price: {this.state.price}
          </div>
          <div>
            {this.state.lastFetch}
            </div>
        </h1>
      </div>
    );
  }
}