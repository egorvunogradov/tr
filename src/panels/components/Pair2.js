import React from 'react';



class Pair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      price: 12,
      color: 'bggreen',
      pairceil: 0,
      coindef: 0
    };
  };


 componentDidMount() {

    this.getjoinbinc();
    //this.interval = setInterval(this.getjoinbinc, 5000);
    //this.interval = setInterval(this.adf, 30000);
    //console.log(this.state.coindef);
 }


  getjoinbinc = () => {
  	const pair = this.props.pairs;

    fetch(`https://api.coinmarketcap.com/v1/ticker/bitcoin/`)
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

    
console.log(this.state.price);
    }

   

    adf = () => {

    if (this.state.pairceil > this.state.coindef) {
      this.state.color = 'bggreen';
    this.state.coindef = this.state.pairceil;
     } else {
      this.state.color = 'bgred';
    this.state.coindef = this.state.pairceil;
     } };

 

  render() {
    const { error, isLoaded} = this.state;
    const pairceil = Math.ceil((this.state.price)*100)/100;
    this.state.pairceil = pairceil;

    let className = this.state.color;


    //if (error) {
    //  return <div>нет данных:(</div>;
    //} else if (!isLoaded) {
   //   return <div className="isNotLoaded__Coin"></div>;
   // } else {

      return (
        
        <div className={className} id="coinResult">{this.state.price}</div>
       
      );
    //}

  }

}
export default Pair;
