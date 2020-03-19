import React, { Component } from 'react';
import Index1 from './index1'
import Trail from './Trail.js';

export default class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React',
        //   data: this.props.data,
        //   country:this.props.data,
          country1: "",
          country2: "",
          country3: "",
          country4: "",
        };
      }

    

    render() {
        console.log(this.props.data)
        return (
            <div>
                    <select class="custom-select"
                        style={{"margin-bottom":"15px", "height":"30px","font-size":"17px",
                                "background-color":"#ffff00"
                        }}
                        // options={options}
                        values={[]}
                        onChange={e => {
                        this.setState({
                            country1: e.target.value
                        });
                    }}
            >
        {this.props.data.map((country) => (
                <option
                      style={{"font-size":"30px"}}
                      selected={null}
                      key={country}
                      value={country}
                >
                      {country}
                </option>
        ))}
        </select>
            <Trail/>

        {/* <Index1 data={this.state}/> */}
                
            </div>
        )
    }
}
