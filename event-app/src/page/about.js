import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class about extends Component{
  state = {
    evenement:[ 
      {Id :0,Nom:'Lionel Belmondo',Date:'2021-09-03',DateFin:'2021-09-03'},
     ],
    NewEventNom:'',
    NewEventDate:'2021-08-17',
    NewEventDateFin:'2021-09-01',
    show: false,
    };
  theme = {
    grey: {
      default: "#040a2484",
      hover: "#0c2e2184"
    },
  };
  toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  Button = styled.button`
    background-color: ${(props) => this.theme[props.theme].default};
    color: white;
    padding: 5px 15px;
    border-radius: 9px;
    outline: 0;
    text-transform: uppercase;
    margin: 17px 15px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
      background-color: ${(props) => this.theme[props.theme].hover};
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  `;
  handleSubit = (event) => { 
    event.preventDefault();
    const id = this.state.evenement.length;
    const eventNom = this.state.NewEventNom;
    const eventDate = this.state.NewEventDate;
    const eventDateFin = this.state.NewEventDateFin;
    const NewEvent = {Id:id,Nom:eventNom,Date:eventDate,DateFin:eventDateFin}
    const NewEvents = [...this.state.evenement];
    NewEvents.push(NewEvent);
    this.setState({evenement: NewEvents});
    this.setState({Nom:''});
  }
  handlechangeNom = (event)=> {
    this.setState({NewEventNom: event.currentTarget.value});
  }
  handlechangeDate = (event)=> {
    this.setState({NewEventDate: event.currentTarget.value});
  }
  handlechangeDateFin = (event)=> {
    this.setState({NewEventDateFin: event.currentTarget.value});
  }
  handleDelet = (id)=>{
    const NewEvents = this.state.evenement.slice();
    const index = NewEvents.findIndex(function (NewEvent){return NewEvent.Id === id});
    NewEvents.splice(index,1);
    console.log(NewEvents)
    this.setState({evenement: NewEvents});
  }
  handaltodos = ()=>{
    return(
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom de l'événement</TableCell>
            <TableCell >Date de debut</TableCell>
            <TableCell>Date de fin</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {this.state.evenement.map(NewEvent =>(
            <TableRow key={NewEvent.Id}>
              <TableCell>{NewEvent.Nom}</TableCell>
              <TableCell >{NewEvent.Date}</TableCell>
              <TableCell >{NewEvent.DateFin}</TableCell>
              <TableCell>
              <this.Button theme="grey" onClick ={this.handleDelet.bind(this,NewEvent.Id)}>Supprimer</this.Button>
              <this.Button theme="grey">Modifier</this.Button>    
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
  }
  render() {
    return (
      <div className="App-header">
      <form onSubmit={this.handleSubit}>
        <TextField
          id="nom"
          label="Nom de l'événement"
          type="text"
          defaultValue=''
          input = {this.state.NewEventNom} onChange={this.handlechangeNom}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField  
          id="datedebut"
          label="date de début"
          type="date"
          defaultValue="2021-09-01"
          input = {this.state.NewEventDate} onChange={this.handlechangeDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField  
          id="date"
          label="date de fin"
          type="date"
          defaultValue="2021-09-01"
          input = {this.state.NewEventDateFin} onChange={this.handlechangeDateFin}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <this.Button theme="grey">Valider</this.Button>
      </form>
      <this.Button theme="grey" onClick={this.toggle}>afficher/cacher liste des événements</this.Button>    
        {this.state.show && <div>{this.handaltodos()}</div>}
      </div>
    );
  }
}
export default about;