import React, { Component } from 'react'
// import Readcsv from './readcsv';
import Papa from 'papaparse';
import peoplecsv from '../../assets/people.csv';

class Importcsv extends Component {
    constructor(props){
        super(props);
        this.state={
            peoplelist:{},
            fileuploaded:false
        }
    }
    componentDidMount=()=>{
        this.props.settitle("Import CSV")
    }

    setpeoplelist=()=>
    {
        let x = document.getElementById("csvfile");
        Papa.parse(x.files[0], {
            complete: (result)=>{
                this.setState({
                    peoplelist:result.data,
                    fileuploaded:true,
                })
            }
        });
    }
    
    render() {
        
        return (
            <div className="csvmodal">
                <input type="file" id="csvfile" accept=".csv" onChange={this.setpeoplelist} />
                <br/>
                {this.state.fileuploaded?<button className="green"  onClick={this.props.markasdone.bind(this,3,this.state.peoplelist)}>Done</button>:<button className="green disabled" disabled onClick={this.props.markasdone.bind(this,3,this.state.peoplelist)}>Done</button>}
                <div className="downloadcsv"><a href={peoplecsv} download>Click here to download demo people.csv to try</a></div>
            </div>
        )
    }
}

export default Importcsv
