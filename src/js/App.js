import React from 'react';
import jump from 'jump.js';
import {easeInOutCubic} from './utils/Easing';
import data from './data/Data';
import Card from './Card';
import GoogleMap from './GoogleMap';
import Header from './Header';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      restaurants: data.restaurants,
      selectedRestaurant: data.restaurants[0],
      selectedRestaurantId: 0,
      filterIsVisible: false,
      filterBedrooms: 'any'
    }

    this.selectRestaurant = this.selectRestaurant.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);

  }

  handleFilterChange(e) {
    const target = e.target;
    const {value, name} = target;

    this.setState({
      [name]: value
    })
  }

  toggleFilter(e) {
    e.preventDefault();

    this.setState({
      filterIsVisible: !this.state.filterIsVisible
    })
  }

  selectRestaurant(restaurant, id, scroll) {
    console.log(this.state.selectedRestaurant, this.state.selectedRestaurantId);
    this.setState({
      selectedRestaurant: restaurant,
      selectedRestaurantId: id
    })
    console.log(this.state.selectedRestaurant, this.state.selectedRestaurantId);
    if(scroll) {
      const target = `#card-${id}`;
      console.log(id);
      
      jump(target, {
        duration: 800,
        easing: easeInOutCubic
      })
    }
  }

  render(){
    const {restaurants, selectedRestaurant, filterIsVisible, selectedRestaurantId} = this.state;

    return (
      <div className="row">
        <div className="listings">

            <Header 
                filterIsVisible={filterIsVisible} 
                toggleFilter={this.toggleFilter} 
                handleFilterChange={this.handleFilterChange}
            />

            <div className="cards container">
                <div className="cards-list row ">
                    
                    {
                        restaurants.map((restaurant, index) => {
                            return <Card 
                                key={index} 
                                index={index}
                                restaurant={restaurant} 
                                selectedRestaurant={selectedRestaurant}
                                selectRestaurant={this.selectRestaurant}
                            />
                        })
                    }
                    
                </div>
            </div>
        </div>
        <div className="col-md-6">
          <GoogleMap 
            restaurants={restaurants} 
            selectedRestaurant={selectedRestaurant}
            selectedRestaurantId={selectedRestaurantId} 
            selectRestaurant={this.selectRestaurant}
          />
        </div>
        <div className="col-md-6 listings">
          
        </div>
        
      </div>
    )
  }
}

export default App;