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
      detailIsVisible: false
    }

    this.selectRestaurant = this.selectRestaurant.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);

  }

  toggleDetail() {
    this.setState({
      detailIsVisible: !this.state.detailIsVisible
    })
  }

  selectRestaurant(restaurant, id, scroll, e) {
    if(document.body.clientWidth <= 767) {
      this.toggleDetail(e);
    }

    this.setState({
      selectedRestaurant: restaurant,
      selectedRestaurantId: id
    })
    if(scroll) {
      const target = `#card-${id}`;
      
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

        <div className={`hidden-sm-down col-md-6 col-xs-12 ${detailIsVisible ? 'hide' : ''}`}>
          <GoogleMap
            detailIsVisible={detailIsVisible}
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
          />
        </div>
      </div>
    )
  }
}

export default App;