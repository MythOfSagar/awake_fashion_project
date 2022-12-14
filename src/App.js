import Navbar from "./Components/Navbar/Navbar";


import "../src/Assets/css/mensprod.css"
function App() {
  return (
    <>
      <Navbar />
      <div>
        {/* navabar folder */}
        <div id="navbar_placeholder" />
        <div style={{marginTop: '110px'}} />
        <p className="alignHeading routes"><span className="homeRoute">Home /</span>
          <span className="mensRoute">Mens /</span>
          <span className="curRoute" style={{fontSize: '14px', fontWeight: 500}}>Mens T-Shirts</span>
        </p>
        <h6 className="alignHeading" style={{marginTop: '10px'}}>Men T-shirts -<span style={{fontWeight: 400, color: '#8e929e', paddingLeft: '2px'}}>1055 items</span></h6>
        <h6 className="filterheading">FILTERS</h6>
        <div className="mensContainer">
          <div className="mensFilter">
            <div className="productsCategories">
              <h6>CATEGORIES</h6>
              <div className="filterDivs">
                <label className="checkboxContainer">
                  <p>Tshirts <span>(105)</span></p>
                  <input className="filterInputs" type="checkbox" name="T-shirt" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <p>Lounge Tshirts <span>(50)</span></p>
                  <input className="filterInputs" type="checkbox" name="Lounge Tshirt" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <div className="productsCategories">
              <h6>Brand</h6>
              <div className="filterDivs">
                <label className="checkboxContainer">
                  <p>Roadster <span>(205)</span></p>
                  <input className="filterInputs" type="checkbox" name="Roadster" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <p>Levis <span>(50)</span></p>
                  <input className="filterInputs" type="checkbox" name="Levis" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <p>WROGN <span>(50)</span></p>
                  <input className="filterInputs" type="checkbox" name="WROGN" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <p>HRX by Hrithik Roshan<span>(50)</span></p>
                  <input className="filterInputs" type="checkbox" name="HRX by Hrithik Roshan" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <p>Puma <span>(50)</span></p>
                  <input className="filterInputs" type="checkbox" name="Puma" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <p>Moda Rapido <span>(50)</span></p>
                  <input className="filterInputs" type="checkbox" name="Moda Rapido" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <p>Jack &amp; Jones <span>(50)</span></p>
                  <input className="filterInputs" type="checkbox" name="Jack & Jones" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <p>Rigo <span>(50)</span></p>
                  <input className="filterInputs" type="checkbox" name="Rigo" />
                  <span className="checkmark" />
                </label>
              </div>
              <button className="moreBrands" style={{paddingLeft: '45px'}}>+180 more</button>
            </div>
            <div className="productsCategories">
              <h6>PRICE</h6>
              <div className="filterDivs">
                <label className="checkboxContainer">
                  <p>Rs. 134 to Rs. 2348 <span>(305)</span></p>
                  <input className="filterInputs" type="checkbox" name="price1" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <p>Rs. 2348 to Rs. 4568 <span>(201)</span></p>
                  <input className="filterInputs" type="checkbox" name="price2" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <p>Rs. 4568 to Rs. 6776 <span>(187)</span></p>
                  <input className="filterInputs" type="checkbox" name="price3" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <p>Rs. 6776 to Rs. 8990 <span>(70)</span></p>
                  <input className="filterInputs" type="checkbox" name="price4" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <div className="productsCategories">
              <h6>COLOR</h6>
              <div className="filterDivs">
                <label className="checkboxContainer">
                  <div style={{display: 'flex'}}>
                    <div className="colorCircle" style={{backgroundColor: '#36454f'}} />
                    <p>Black <span>(140)</span> </p>
                  </div>
                  <input className="filterInputs" type="checkbox" name="black" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <div style={{display: 'flex'}}>
                    <div className="colorCircle" style={{backgroundColor: '#3c74d9'}} />
                    <p>Blue<span>(204)</span> </p>
                  </div>
                  <input className="filterInputs" type="checkbox" name="blue" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <div style={{display: 'flex'}}>
                    <div className="colorCircle" style={{backgroundColor: 'white', border: '1px solid grey'}} />
                    <p>White <span>(1040)</span> </p>
                  </div>
                  <input className="filterInputs" type="checkbox" name="White" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <div style={{display: 'flex'}}>
                    <div className="colorCircle" style={{backgroundColor: '#3c4477'}} />
                    <p>Navy Blue <span>(590)</span> </p>
                  </div>
                  <input className="filterInputs" type="checkbox" name="navy blue" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <div style={{display: 'flex'}}>
                    <div className="colorCircle" style={{backgroundColor: '#5eb160'}} />
                    <p>Green <span>(730)</span> </p>
                  </div>
                  <input className="filterInputs" type="checkbox" name="green" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <div style={{display: 'flex'}}>
                    <div className="colorCircle" style={{backgroundColor: '#d34b56'}} />
                    <p>Red <span>(340)</span> </p>
                  </div>
                  <input className="filterInputs" type="checkbox" name="red" />
                  <span className="checkmark" />
                </label>
                <label className="checkboxContainer">
                  <div style={{display: 'flex'}}>
                    <div className="colorCircle" style={{backgroundColor: '#9fa8ab'}} />
                    <p>Grey <span>(240)</span> </p>
                  </div>
                  <input className="filterInputs" type="checkbox" name="grey" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <div className="productsCategories" style={{borderBottom: '1px solid #e9e9ed'}}>
              <h6>DISCOUNT RANGE</h6>
              <div className="discountFilter">
                <div>
                  <input className="filterInputs" type="radio" name="discountrange10" /> <p>10% and above</p>
                </div>
                <div>
                  <input className="filterInputs" type="radio" name="discountrange20" /> <p>20% and above</p>
                </div>
                <div>
                  <input className="filterInputs" type="radio" name="discountrange30" /> <p>30% and above</p>
                </div>
                <div>
                  <input className="filterInputs" type="radio" name="discountrange40" /> <p>40% and above</p>
                </div>
                <div>
                  <input className="filterInputs" type="radio" name="discountrange50" /> <p>50% and above</p>
                </div>
                <div>
                  <input className="filterInputs" type="radio" name="discountrange60" /> <p>60% and above</p>
                </div>
                <div>
                  <input className="filterInputs" type="radio" name="discountrange70" /> <p>70% and above</p>
                </div>
                <div>
                  <input className="filterInputs" type="radio" name="discountrange80" /> <p>80% and above</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mensProductsCont">
  <div className="mensProducts">
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10565566/2020/2/4/98edd42d-583b-44ff-9d90-4e67e5a3522f1580809674758-HRX-by-Hrithik-Roshan-Men-Black-Solid-Running-T-shirt-163158-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>3.8</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>41</span>
      </div>
      <div className="mensDetailsDiv" style={{position: 'relative', top: '0px'}}>
        <p className="mensBrand">HRX by Hrithik Roshan</p>
        <p className="mensTitle">Men Black Solid Rapid Dry Runn...</p>
        <p className="mensPriceCont">
          <span>Rs. 449</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 899</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(50% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14021706/2021/5/11/d2dd57cf-8887-44fb-9e9a-b66b6e980d741620707861309-HERENOW-Men-Maroon-Printed-Round-Neck-T-shirt-94616207078606-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.8</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>53</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">HERE&amp;NOW</p>
        <p className="mensTitle">Men Maroon Printed Round Neck ...</p>
        <p className="mensPriceCont">
          <span>Rs. 359</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 599</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(40% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.7</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>260</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Moda Rapido</p>
        <p className="mensTitle">Men Maroon Printed Round Neck ...</p>
        <p className="mensPriceCont">
          <span>Rs. 389</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 649</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(40% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2232175/2018/3/27/11522134275641-Mast--Harbour-Men-Navy-Blue-Striped-Round-Neck-T-shirt-4401522134275464-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.2</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>199</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Mast &amp; Harbour</p>
        <p className="mensTitle">Men White &amp; Navy Striped Round...</p>
        <p className="mensPriceCont">
          <span>Rs. 629</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 899</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(30% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10016983/2019/6/20/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>3.9</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>989</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Campus Sutra</p>
        <p className="mensTitle">Men Blue Colourblocked Round N...</p>
        <p className="mensPriceCont">
          <span>Rs. 427</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 949</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(55% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4277987/2018/3/16/11521191832751-Nautica-Men-Teal-Colourblocked-Round-Neck-T-shirt-2481521191832564-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>4.8</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>6</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Nautica</p>
        <p className="mensTitle">Men Teal Colourblocked Round N...</p>
        <p className="mensPriceCont">
          <span>Rs. 1169</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 1799</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(35% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11748042/2020/7/7/71ec25ec-2513-46e7-a6bf-4c6c646834841594111521123ShangrilaCreationGold-TonedPinkSilkBlendWovenDesignPaithaniS1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>4.5</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>78</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">HERE&amp;NOW</p>
        <p className="mensTitle">Men Black &amp; Mustard Yellow Pri...</p>
        <p className="mensPriceCont">
          <span>Rs. 299</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 749</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(60% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/4/17/b32faffc-4a1d-4bc8-8f07-049210112eb71618652862384-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>4.8</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>7</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">NYAMBA By Decathlon</p>
        <p className="mensTitle">Men Green Solid Pure Cotton T-...</p>
        <p className="mensPriceCont">
          <span>Rs. 299</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 399</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(25% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802450/2021/5/28/8e85d392-f965-490b-af7f-1a15c8a7a0e61622191137026NikeSportswearWomensFull-ZipHoodieTshirtsNauticaMenTshirtsNa1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>3.1</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>20</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Nautica</p>
        <p className="mensTitle">Men White &amp; Navy Blue Brand Lo...</p>
        <p className="mensPriceCont">
          <span>Rs. 674</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 1499</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(55% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7215902/2019/7/12/d2f6d4ab-598d-432e-b2aa-97d68b52a3481562926906763-US-Polo-Assn-Men-Yellow-Solid-Polo-Collar-T-shirt-2821562926-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>64</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">U.S. Polo Assn.</p>
        <p className="mensTitle">Men Yellow Solid Polo Collar T...</p>
        <p className="mensPriceCont">
          <span>Rs. 899</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 1499</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(40% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14184888/2021/4/27/f61ab218-1a74-41d1-9ff0-daf5185a4b891619513940992OkaneMenGreySolidRoundNeckT-shirt1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.7</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>3</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Okane</p>
        <p className="mensTitle">Men Pack Of 2 Solid Round Neck...</p>
        <p className="mensPriceCont">
          <span>Rs. 594</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 660</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(10% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11925912/2020/7/15/5437851a-449c-4d76-a52b-fcc12fa7df571594809640266-VEIRDO-Men-Tshirts-4671594809638036-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.1</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>106</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">VEIRDO</p>
        <p className="mensTitle">Men Maroon Colourblocked Polo ...</p>
        <p className="mensPriceCont">
          <span>Rs. 659</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 1199</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(45% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11032160/2020/6/16/aab91615-14ee-4052-9e58-2aea1f580cac1592298051428-Nautica-Men-Tshirts-4631592298049426-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.2</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>9</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Nautica</p>
        <p className="mensTitle">Men Navy Blue Solid Polo Colla...</p>
        <p className="mensPriceCont">
          <span>Rs. 2144</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 3299</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(35% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14188566/2021/5/24/7172d0c0-ec2f-4971-b067-1b204a697a731621833355773TommyHilfigerMenJetBlackSolidTrackPantTshirtsTommyHilfigerMe1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.4</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>5</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Tommy Hilfiger</p>
        <p className="mensTitle">Men Teal Pure Cotton Logo Embr...</p>
        <p className="mensPriceCont">
          <span>Rs. 1399</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 1999</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(30% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2221318/2017/12/6/11512544982740-Moda-Rapido-Men-Maroon-Colourblocked-Round-Neck-T-shirt-4391512544982619-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>4.8</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>999</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Moda Rapido</p>
        <p className="mensTitle">Men Maroon Colourblocked Round...</p>
        <p className="mensPriceCont">
          <span>Rs. 419</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 699</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(40% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13298490/2021/4/21/d6166459-8156-4056-9c86-b32b3312a7821619004985932TshirtsLevisMenTshirtsLevisMenTshirtsLevisMenTshirtsLevisMen1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>3.1</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>2</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Levis</p>
        <p className="mensTitle">Men Green Printed Round Neck T...</p>
        <p className="mensPriceCont">
          <span>Rs. 974</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 1299</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(25% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11487342/2020/6/17/e3958d19-7c4b-49ce-8a5c-e82ed6e6ef321592396334332-Nautica-Men-Tshirts-721592396332125-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>4.5</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>12</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Nautica</p>
        <p className="mensTitle">Men Dark Blue Solid Polo Colla...</p>
        <p className="mensPriceCont">
          <span>Rs. 1689</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 2599</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(35% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12816472/2021/2/9/5f7203e9-93dd-47ba-8195-0a8cd1fff2b21612855560065-HERENOW-Men-Tshirts-1801612855558858-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>4.8</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>43</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">HERE&amp;NOW</p>
        <p className="mensTitle">Men Maroon &amp; Black Typography ...</p>
        <p className="mensPriceCont">
          <span>Rs. 359</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 599</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(40% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802542/2021/5/24/da580c47-bec2-415f-b6de-b562f9c7237d1621839374174ShirtsTommyHilfigerMenTshirtsTommyHilfigerMenTshirtsWROGNACT1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.1</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>20</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Nautica</p>
        <p className="mensTitle">Men Teal Blue Solid Cotton Pol...</p>
        <p className="mensPriceCont">
          <span>Rs. 1169</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 2599</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(55% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1729529/2018/5/9/0b962dc4-539e-4498-9a44-0556f4654e1f1525857255659-WROGN-Men-Navy-Printed-T-shirt-5591525857255461-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>3.0</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>181</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">WROGN</p>
        <p className="mensTitle">Men Navy Printed T-shirt</p>
        <p className="mensPriceCont">
          <span>Rs. 699</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 999</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(30% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12014494/2020/8/5/bdba17f3-522e-4110-b915-484fcab1313e1596617595021-Moda-Rapido-Men-Tshirts-4571596617593343-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.6</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>52</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Moda Rapido</p>
        <p className="mensTitle">Men Charcoal Printed Round Nec...</p>
        <p className="mensPriceCont">
          <span>Rs. 499</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 999</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(50% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8267997/2019/1/9/2aa11437-9107-4e02-86ca-d0d7ca2190e81547028324622-HERENOW-Men-White-Solid-Round-Neck-T-shirt-351547028323849-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>3.1</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>995</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">HERE&amp;NOW</p>
        <p className="mensTitle">Men White Solid Round Neck T-s...</p>
        <p className="mensPriceCont">
          <span>Rs. 499</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 999</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(50% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802550/2021/5/24/445fbfce-7917-4b10-a87c-9cd771e797e91621839396968ShirtsTommyHilfigerMenTshirtsTommyHilfigerMenTshirtsWROGNACT1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>3.9</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>25</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Nautica</p>
        <p className="mensTitle">Men Maroon Pure Cotton Polo Co...</p>
        <p className="mensPriceCont">
          <span>Rs. 1169</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 2599</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(55% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13251050/2021/3/8/bc2bff97-f3de-4fbf-8cfa-c0a8232e70081615184294631-Jack--Jones-Men-Tshirts-2741615184292992-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.4</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>2</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Jack &amp; Jones</p>
        <p className="mensTitle">Men Black Solid Boxy Fit Round...</p>
        <p className="mensPriceCont">
          <span>Rs. 1619</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 1799</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(10% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13707854/2021/5/10/40000546-0ca6-4754-a46f-c908048db5ff1620631267405-Levis-Men-Tshirts-2461620631266543-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>4.1</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>1</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Levis</p>
        <p className="mensTitle">Men Black Printed Round Neck T...</p>
        <p className="mensPriceCont">
          <span>Rs. 699</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 999</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(30% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1696471/2019/2/6/d70c0234-e76c-48b3-93b4-09a764c73c141549454943486-Ecko-Unltd-Men-Charcoal-Grey-Solid-Round-Neck-T-Shirt-832154-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>3.3</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>141</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Ecko Unltd</p>
        <p className="mensTitle">Men Charcoal Grey Solid Round ...</p>
        <p className="mensPriceCont">
          <span>Rs. 284</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 499</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(43% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802546/2021/5/28/b0b0422b-e1d4-4362-a206-b32b735a8c641622191144292NikeSportswearWomensFull-ZipHoodieTshirtsNauticaMenTshirtsNa1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.5</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>12</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Nautica</p>
        <p className="mensTitle">Men White &amp; Blue Printed T-shi...</p>
        <p className="mensPriceCont">
          <span>Rs. 584</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 1299</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(55% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1965553/2017/6/30/11498824284612-Justice-League-Men-Navy-Blue-Printed-Round-Neck-T-shirt-251498824284404-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.3</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>421</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Justice League</p>
        <p className="mensTitle">Men Navy Blue Printed Round Ne...</p>
        <p className="mensPriceCont">
          <span>Rs. 489</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 699</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(30% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11948298/2020/8/1/d92946bd-3831-4c24-938e-d2b83b819d661596262251203-Roadster-Men-Tshirts-1771596262249737-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>4.7</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>40</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Roadster</p>
        <p className="mensTitle">Men White Solid Round Neck T-s...</p>
        <p className="mensPriceCont">
          <span>Rs. 324</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 499</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(35% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7480573/2018/9/25/1c13b5f2-37db-4632-b206-99b40bbb8bf51537864626551-Rigo-Blue-With-Navy-Back-Yoke-Cuff-And-Bottom-Tshirt-Full-5651537864626357-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.8</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>689</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Rigo</p>
        <p className="mensTitle">Men Blue Solid Round Neck T-sh...</p>
        <p className="mensPriceCont">
          <span>Rs. 419</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 999</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(58% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13502790/2021/2/27/990943de-a250-47f4-bfa8-c099fcef83cc1614411033194ShortsPumaMenShortsPumaMenTrackPantsPumaMenTshirtsPumaMenTsh1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>3.7</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>6</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Puma</p>
        <p className="mensTitle">Men Black &amp; White Pure Cotton ...</p>
        <p className="mensPriceCont">
          <span>Rs. 584</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 1299</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(55% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13251104/2021/1/12/c6740b4f-62c5-46c4-bc45-f5a4ca6a048d1610452508899AURELIAWomenOff-WhiteRustOrangeSideFlapDetailPrintedEmpireDr1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>4.9</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>9</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Jack &amp; Jones</p>
        <p className="mensTitle">Men Navy Blue Solid Round Neck...</p>
        <p className="mensPriceCont">
          <span>Rs. 1599</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 1999</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(20% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13620658/2021/4/28/64334a71-4bae-4790-b9d8-8b63b0ee75bf1619586599402TshirtsMetronautMenTshirtsRoadsterMenTshirtsRoadsterMenTopsR1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2.6</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>1</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Roadster</p>
        <p className="mensTitle">Men Mustard Yellow Pure Cotton...</p>
        <p className="mensPriceCont">
          <span>Rs. 649</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 1299</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(50% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11487350/2020/6/17/e4f271bd-4776-45a4-82e9-3b4feda4f56c1592396681034-Nautica-Men-Tshirts-6561592396679583-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>3.0</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>16</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Nautica</p>
        <p className="mensTitle">Men Red Solid Polo Collar T-sh...</p>
        <p className="mensPriceCont">
          <span>Rs. 1689</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 2599</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(35% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11925890/2020/7/15/394486ca-de2f-4354-91f7-612dc5728c371594813807438-VEIRDO-Men-Tshirts-3501594813805924-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>2</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>99</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">VEIRDO</p>
        <p className="mensTitle">Men Navy Blue &amp; White Colourbl...</p>
        <p className="mensPriceCont">
          <span>Rs. 349</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 999</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(65% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13623986/2021/5/28/5647396b-b5c4-43bb-9d43-e51e919cd7281622191137646PumaMenRedPrintedAMPLIFIEDHoodieTRHoodedSweatshirtTshirtsMHE1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>4.1</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>14</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">U.S. Polo Assn.</p>
        <p className="mensTitle">U S Polo Assn Denim Co Men Gre...</p>
        <p className="mensPriceCont">
          <span>Rs. 714</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 1099</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(35% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13334658/2021/3/27/4ad47dd3-b405-44fc-8c71-61b512d4a1ce1616844782853-Roadster-Men-Tshirts-1881616844782082-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>3.6</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>2</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Roadster</p>
        <p className="mensTitle">Men White &amp; Navy Blue Striped ...</p>
        <p className="mensPriceCont">
          <span>Rs. 359</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 899</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(60% OFF)</span>
        </p>
      </div>
    </div>
    <div className="productMainDiv">
      <img className="mensProductImages" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10017085/2019/6/20/2be736d5-66cb-43a2-8208-5cea2ee1e0711561027340024-Campus-Sutra-Graphic-Print-Men-Round-Neck-Grey-T-Shirt-43715-1.jpg" />
      <div className="ratingDiv">
        <span style={{marginLeft: '5px', marginTop: '20px'}}>4.2</span>
        <span className="fa fa-star checked" aria-hidden="true" />
        <span style={{marginRight: '5px'}}> |</span>
        <span>606</span>
      </div>
      <div className="mensDetailsDiv">
        <p className="mensBrand">Campus Sutra</p>
        <p className="mensTitle">Men Grey Printed Round Neck T-...</p>
        <p className="mensPriceCont">
          <span>Rs. 449</span>
          <span style={{marginLeft: '5px'}}>
            <strike>Rs. 999</strike>
          </span>
          <span style={{marginLeft: '5px'}}>(55% OFF)</span>
        </p>
      </div>
    </div>
  </div>
      </div>
      </div>
        {/* pagination div */}
        <div className="paginationDiv">
          <button className="prevBtn paginateBtn" style={{marginRight: '50px'}}><i className="fa-solid fa-angle-left" style={{paddingRight: '8px'}} />Previous </button>
          <button className="numBtn">1</button>
          <button className="numBtn">2</button>
          <button className="numBtn">3</button>
          <button className="numBtn">4</button>
          <button className="numBtn">5</button>
          <button className="numBtn">6</button>
          <button className="numBtn">7</button>
          <button className="numBtn">8</button>
          <button className="numBtn">9</button>
          <button className="numBtn">10</button>
          <button className="nextBtn paginateBtn" style={{marginLeft: '50px'}}> Next <i className="fa-solid fa-angle-right" style={{paddingLeft: '8px'}} /></button>
        </div>
        {/* footer folder */}
        <div id="mainfooter_placeholder" />
        {/* Bootstrap script */}
      </div>
    </>
  );
}

export default App;
