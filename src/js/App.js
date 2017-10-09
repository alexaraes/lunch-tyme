import React from 'react';
import jump from 'jump.js';
import {easeInOutCubic} from './utils/Easing';
import data from './data/Data';
import Card from './Card';
import GoogleMap from './GoogleMap';
import Header from './Header';
import Detail from './Detail';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      restaurants: data.restaurants,
      selectedRestaurant: data.restaurants[0],
      selectedRestaurantId: 0,
      filterIsVisible: null,
      isFiltering: false
    }

    this.selectRestaurant = this.selectRestaurant.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);

  }

  handleFilterChange(e){
        const target = e.target;
        const {value, name} = target;
        //console.log(`${value} ${name}`);
        this.setState({
            [name]: value
        }, function(){
            this.filterProperties();
        })

    }

  filterProperties(){
      // const {properties, filterBedrooms, filterBathrooms, filterCars} = this.state;
      const isFiltering = false;  
      // //console.log(isFiltering + filterBedrooms);

      // const getFilteredProperties = (properties) => {

      //     const filteredProperties = [];
      //     properties.map(property => {
      //         const {bedrooms, bathrooms, carSpaces} = property;
      //         const match = 
      //             (bedrooms === parseInt(filterBedrooms) || filterBedrooms === 'any') &&
      //             (bathrooms === parseInt(filterBathrooms) || filterBathrooms === 'any') &&
      //             (carSpaces === parseInt(filterCars) || filterCars === 'any');

      //         // if the match is true push this property to filteredProperties
      //         match && filteredProperties.push(property);
      //     })

      //     return filteredProperties;

      // }

      this.setState({
          isFiltering: !isFiltering
      })
      console.log(isFiltering);
  }

  toggleFilter() {
    this.setState({
      filterIsVisible: !this.state.filterIsVisible
    })

  }

  selectRestaurant(restaurant, id, scroll, e) {
    this.toggleFilter(e);
    this.setState({
      selectedRestaurant: restaurant,
      selectedRestaurantId: id
    })

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
        <div className="listings col-md-6 col-xs-12">
            <Header 
                toggleFilter={this.toggleFilter} 
                handleFilterChange={this.handleFilterChange}
            />
            <div className={`cards container ${filterIsVisible ? 'hide' : ''} `}>
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

        <div className="col-md-6 col-xs-12">
          <GoogleMap 
            restaurants={restaurants} 
            selectedRestaurant={selectedRestaurant}
            selectedRestaurantId={selectedRestaurantId} 
            selectRestaurant={this.selectRestaurant}
          />
          
        </div>
        <div className={`test ${filterIsVisible ? 'slide-in': 'slide-out'}`}>
          <Detail 
            restaurants={restaurants} 
            selectedRestaurant={selectedRestaurant}
            selectedRestaurantId={selectedRestaurantId}
            selectRestaurant={this.selectRestaurant}
            filterIsVisible={filterIsVisible} 
            toggleFilter={this.toggleFilter} 
            handleFilterChange={this.handleFilterChange}
          />
        </div>
      </div>
    )
  }
}

export default App;