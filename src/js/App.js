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
      detailIsVisible: null,
      isFiltering: false
    }

    this.selectRestaurant = this.selectRestaurant.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
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
  }

  toggleDetail() {
    this.setState({
      detailIsVisible: !this.state.detailIsVisible
    })

  }

  selectRestaurant(restaurant, id, scroll, e) {
    this.toggleDetail(e);
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
    const {restaurants, selectedRestaurant, detailIsVisible, selectedRestaurantId} = this.state;

    return (
      <div className="row">
        <div className="listings col-md-6 col-xs-12">
            <Header 
                detailIsVisible={detailIsVisible}
                toggleDetail={this.toggleDetail} 
                handleDetailChange={this.handleDetailChange}
            />
            <div className={`cards container ${detailIsVisible ? 'cards-slide-out' : 'cards-slide-in'}`}>
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

        <div className="hidden-sm-down col-md-6 col-xs-12 hide">
          <GoogleMap
            restaurants={restaurants} 
            selectedRestaurant={selectedRestaurant}
            selectedRestaurantId={selectedRestaurantId} 
            selectRestaurant={this.selectRestaurant}
          />
        </div>
        <div className={`test hidden-md-up ${detailIsVisible ? 'slide-in': 'slide-out'}`}>
          <Detail 
            restaurants={restaurants} 
            selectedRestaurant={selectedRestaurant}
            selectedRestaurantId={selectedRestaurantId}
            selectRestaurant={this.selectRestaurant}
            detailIsVisible={detailIsVisible} 
            toggleDetail={this.toggleDetail} 
            handleDetailChange={this.handleDetailChange}
          />
        </div>
      </div>
    )
  }
}

export default App;