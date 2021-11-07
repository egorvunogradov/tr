import React from 'react';
import BTC from './img/BTC.png';
import BNB from './img/BNB.png';


class Pair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      price: 0,
      color: 'bggreen',
      coindef: 0,
      price2: 0
    };
  };


 componentDidMount() {

    //this.getjoinbinc();
    this.interval = setInterval(this.getjoinbinc, 60000);
    this.interval = setInterval(this.adf, 4000);
 }


  getjoinbinc = () => {
    const pair = this.props.pairs;

    fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${pair}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            price: result.price,
            
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

   

    adf = () => {
      let randam = Math.floor(Math.random() * 10);
      let randc = 0.01;
      let randb = 0.5

     if (this.state.price >= this.state.coindef) {
        this.state.coindef = this.state.price;
      this.setState({
        color: 'bggreen',

     });
   } else {
        this.state.coindef = this.state.price;
       
      this.setState({
        color: 'bgred',
     });

     }

     if (this.state.coindef < 100) {
      if (randam / 2) {
      this.setState({
         price: Number(this.state.coindef) + randc,
     });} else {
        this.setState({
         price: Number(this.state.coindef) - randc,
     });
      }
     
     } else {
      if (randam / 2) {
      this.setState({
         price: Number(this.state.coindef) + randb,
     });} else {
        this.setState({
         price: Number(this.state.coindef) - randb,
     });
      }
     }
     
     
    };

 

  render() {
    const fullname = this.props.fullname;
    const coinval = this.props.coinname;
    const coinroot = `img/${coinval}.png`;
    const pair = this.props.pairs;
    const { error, isLoaded} = this.state;
    const pairceil = Math.ceil((this.state.coindef)*100)/100;

    let className = this.state.color;


    if (error) {
      return <div>нет данных:(</div>;
    } else if (pairceil == 0) {
      this.getjoinbinc();
      return <div className="isNotLoaded__Coin"></div>;
    } else {

      return (
        <div className="box">
        <img className="coinImg" src={coinroot} />
        <div className="coinName">{coinval}</div> 
        <div className="coinNameTwo">{fullname}</div>
        <div className={className} id="coinResult">{pairceil}</div>
       </div>
      );
    }

  }

}
export default Pair;
