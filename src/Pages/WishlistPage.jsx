import React from 'react'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import './WishlistPage.css'

const WishlistPage = () => {

  let wishlist =
    [
      {
        "id": 1,
        "categories": "shirt",
        "size": "39, 40, 42, 44",
        "title": "Men Blue Regular Fit Casual Shirt",
        "price": 699,
        "gender": "men",
        "description": "Green and White printed casual shirt, has a spread collar, short sleeves, button placket, curved hem, and 1 patch pocket",
        "brand": "Roadster",
        "color": "navyBlue",
        "discount": 40,
        "off_price": 1049,
        "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737673-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-3.jpg",
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1364628/2016/8/31/11472636737673-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-3.jpg",
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1364628/2016/8/31/11472636737656-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-4.jpg"
        ],
        "rating": 3.9
      },
      {
        "id": 2,
        "categories": "shirt",
        "size": "39, 40, 42, 44",
        "title": "Men Blue Slim Fit Solid Casual Shirt",
        "price": 579,
        "gender": "men",
        "description": "Blue solid casual shirt, has a spread collar, button placket, 1 pocket, long sleeves, curved hem",
        "brand": "HERE&NOW",
        "color": "green",
        "discount": 42,
        "off_price": 999,
        "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290028/2018/2/7/11517989836087-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Casual-Shirt-4461517989835897-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290028/2018/2/7/11517989835985-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Casual-Shirt-4461517989835897-5.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290028/2018/2/7/11517989836063-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Casual-Shirt-4461517989835897-2.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2290028/2018/2/7/11517989836001-HIGHLANDER-Men-Blue-Slim-Fit-Solid-Casual-Shirt-4461517989835897-4.jpg"
        ],
        "rating": 4.1
      },
      {
        "id": 3,
        "categories": "kurta",
        "size": "39, 40, 42, 44",
        "title": "Men Grey & Blue Self Design Kurta",
        "price": 2199,
        "gender": "men",
        "description": "White solid casual Kurta, has a spread collar, button placket, 1 pocket, long sleeves, curved hem",
        "brand": "Clovia",
        "color": "white",
        "discount": 60,
        "off_price": 5499,
        "images": [
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/c18ee8eb-06f6-4d10-8f4a-680ac10fccf21527055151093-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-1.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/81b26584-a36d-414d-9653-195b978884141527055151039-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-3.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/f6d3d7cd-1acc-4e28-b8ee-29e5d9cec46c1527055151075-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-2.jpg",
          "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6518468/2018/5/23/83986b07-a78e-4999-b2bd-7bacbd5532411527055151001-Sojanya-Since-1958-Grey-Silk-Kurta-Pyjama--Blue-Printed-Nehru-Jacket-SET-4231527055150856-4.jpg"
        ],
        "rating": 5.9
      }
    ]

  return (
    <div>
      <div className='bar-top'>
        <div><ArrowBackIosNewTwoToneIcon></ArrowBackIosNewTwoToneIcon><p>My Account</p></div>
      </div>
      <div className='main-top'>
        <div>
          <h1>Favourites</h1>
          <p>View your most wanted products.</p>
        </div>
        <div>
          <FavoriteTwoToneIcon style={{ fontSize: '100px', color: 'white' }}></FavoriteTwoToneIcon>
        </div>
      </div>
      <div className='main-wishlist'>
        <p className='remove-btn' >Remove All</p>
        <div className='wishlist-in1'>
          {wishlist.map((item) => (
            <div key={item.id} className="inner-list">
              <div>
                <img src={item.images[0]} width="80px" /></div>
              <div className='div2'>
                <p style={{ padding: '0px 50px 0px 0px', textAlign: 'left', marginLeft: '50px', color: 'silver', fontSize: '16px', lineHeight: '5px' }}>{item.brand}</p>
                <p style={{ padding: '0px 50px 0px 0px', textAlign: 'left', marginLeft: '50px', fontSize: '16px' }}>{item.title}</p>
                <button>Remove</button>
              </div>
              <div>
                <p><strike>&#8377; {item.off_price}</strike> &#8377; {item.price}</p>
                <button>Add To Basket</button>
              </div>

            </div>
          ))}

        </div>
      </div>
      <div className='bottom-main'>
        <p>Manage your account across all participating brands from one place.</p>
        <div className='bottom'>
          <img src="https://i1.lmsin.net/website_images/in/logos/logo-lifestyle.svg" width={100}/>
          <img className='img2' src="https://i1.lmsin.net/website_images/in/logos/logo-max.svg" width={80}/>
          <img src="https://i1.lmsin.net/website_images/in/logos/logo-homecentre.svg" width={250}/>
        </div>
      </div>

    </div>
  )
}

export default WishlistPage