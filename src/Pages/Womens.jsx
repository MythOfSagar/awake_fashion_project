import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import './Womens.css'
import Wslider from './Wslider'

const Womens = () => {
  return (
    <div className='womens' >
        <div className='slider'>
            {/* <Womensslider/> */}
        <Wslider/></div>
        <div className='corner'>
          <h3>Deals Corner</h3>
          <div className='borderdivdeals' ></div>
            <div className='cornerchild'>
            <div className='cornercard'>
                  <div>
                    <div className='center'>
                        <h4>Buy 2 at</h4>
                        <h3>60% off</h3>
                    </div>
                  </div>
                </div>
                <div className='cornerc'>
                  <div>
                   <h4>Buy 2 at</h4>
                    <h3>60% off</h3>
                    <h4>Buy 4 at</h4>
                    <h3>40% off</h3>
                  </div>
                </div>
                <div className='cornercard'>
                  <div>
                    <div>
                    <h4>Flat</h4>
                    <h3>40% off</h3>
                    </div>
                  </div>
                </div>
                <div className='cornerc'>
                  <div>
                   <h4>Buy 1 at</h4>
                    <h3>60% off</h3>
                    <h4>Buy 2 at</h4>
                    <h3>40% off</h3>
                  </div>
                </div>
                <div className='cornercard'>
                  <div>
                   <div>
                   <h4>flat</h4>
                    <h3>60% off</h3>
                   </div>
                  </div>
                </div>
                <div className='cornerc'>
                  <div>
                    <h4>Buy 1 at</h4>
                    <h3>60% off</h3>
                    <h4>Buy 2 at</h4>
                    <h3>40% off</h3>
                  </div>
                </div>
            </div>
        </div>
        <div className='dealsimg'>
            <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Women-29Nov2022.gif" alt="" />
  
        </div>

        <div className='winterwear'>
            <h3>Winterwear Essentials</h3>
            <div className='borderdiv' ></div>
            <div>
                <div>
                <Link to='/womensproduct'><div>
                        <img src="https://sp.yimg.com/ib/th?id=OPA.1q6AG0YkGNQGbw474C474&o=5&pid=21.1&w=&h=" alt="" />
                    </div>
                    <p>from ₹699</p>
                    <p>Women brown Oversized Zip-Through jacket</p></Link>
                </div>

                <div>
                <Link to='/womensproduct'><div>
                        <img src="https://sp.yimg.com/ib/th?id=OPA.jWCKtektwZ7fyQ474C474&o=5&pid=21.1&w=&h=" alt="" />
                    </div>
                    <p>from ₹799</p>
                    <p>Women Blue Zip-Through Hoodie</p>
                    </Link>
                </div>
                <div>
                <Link to='/womensproduct'><div>
                        <img src="https://sp.yimg.com/ib/th?id=OPA.759z%2fpBOCR2IfQ474C474&o=5&pid=21.1&w=&h=" alt="" />
                    </div>
                    <p>from ₹999</p>
                    <p>Nylon Blend Quilted Stylish Regular Fit Puffer Winter Jacket for Women</p>
                    </Link>
                </div>
                <div>
                <Link to='/womensproduct'><div>
                        <img src="https://sp.yimg.com/ib/th?id=OPA.IMe0ungf4za01A474C474&o=5&pid=21.1&w=&h=" alt="" />
                    </div>
                    <p>from ₹1299</p>
                    <p>Women's/Girl's Sherpa Stylish Fleece Jacket</p>
                    </Link>
                </div>
                <div>
                <Link to='/womensproduct'><div>
                        <img src="https://sp.yimg.com/ib/th?id=OPA.JfatmIIsAy97lQ474C474&o=5&pid=21.1&w=&h=" alt="" />
                    </div>
                    <p>from ₹729</p>
                    <p>Women's Solid Regular Jacket</p>
                    </Link>
                </div>
                <div>
                <Link to='/womensproduct'><div>
                        <img src="https://sp.yimg.com/ib/th?id=OPA.iCXTyV%2fqyeN1Xw474C474&o=5&pid=21.1&w=&h=" alt="" />
                    </div>
                    <p>from ₹859</p>
                    <p>Full Sleeve Solid Women Long Jacket</p>
                    </Link>
                </div>
            </div>
        </div>
        <div className='shopnow'>
            <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-Women-06Dec2022.gif" alt="" />
        </div>
        <div className='firsttime'> 
            <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-9modblock-StripBanner2-D-06Dec2022.gif" alt="" />
        </div>
        <div className='ethnicwear'>
            <h3>Trending Ethnic Wear</h3>
            <div className='borderdiv' ></div>
                <div>
                    <div style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.GM6hLQoVCh6N2Q474C474&o=5&pid=21.1&w=&h=)'}} >
                        <div className='textdiv'>
                            <p>Everyday Kurtas</p>
                            <p>Under ₹859</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.md3cSCT%2fE5hWOg474C474&o=5&pid=21.1&w=&h=)'}} >
                        <div className='textdiv'>
                            <p>Everyday Kurtas</p>
                            <p>Under ₹1299</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.vOufU%2bPnFR3PPg474C474&o=5&pid=21.1&w=&h=)'}} >
                        <div className='textdiv'>
                            <p>Everyday Kurtas</p>
                            <p>Under ₹2599</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.x3gQh1rF%2fefZnQ474C474&o=5&pid=21.1&w=&h=)'}} >
                        <div className='textdiv'>
                            <p>Everyday Kurtas</p>
                            <p>Under ₹2699</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.Pw%2bHMI4keDFEbQ474C474&o=5&pid=21.1&w=&h=)'}} >
                        <div className='textdiv'>
                            <p>Everyday Kurtas</p>
                            <p>Under ₹799</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.Lm7T0LMrIDdQvQ474C474&o=5&pid=21.1&w=&h=)'}} >
                        <div className='textdiv'>
                            <p>Everyday Kurtas</p>
                            <p>Under ₹899</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className='flashsale'>
            <h3>Flash Sale For Today</h3>
            <div className='borderdiv' ></div>
            <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock1-A-13Dec2022A.gif" alt="" />
        </div>
        <div className='toppics'>
            <h3>Top Picks</h3>
            <div className='borderdiv' ></div>
            <div className='gridimg'>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-D-24Nov2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-E-24Nov2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-F-24Nov2022.jpg" alt="" />
            </div>
        </div>
        <div className='onlyimg'>
            <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-StripBanner1-24Nov2022.jpg" alt="" />

        </div>
        <div className='trendybottom' >
            <h3>Trendy Bottom Wear</h3>
            <div className='borderdiv' ></div>
            <div>
                <div className='bottom' style={{backgroundImage:'url(https://tse4.mm.bing.net/th?id=OIP.8dZ5rPg86R5k_b3IDnaW7AHaHa&pid=Api&P=0)'}}>
                    <p>Jeans and jeggings</p>
                </div>
                <div className='bottom' style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.x5crT7slRcQJMQ474C474&o=5&pid=21.1&w=&h=)'}}>
                    <p>Trousers and pants</p>
                </div>
                <div className='bottom' style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.NzCKv6ZXQicKvw474C474&o=5&pid=21.1&w=&h=)'}}>
                    <p>Activewear leggings</p>
                </div>
                <div className='bottom' style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.zrlA7UyzgIysUw474C474&o=5&pid=21.1&w=&h=)'}}>
                    <p>joggers and tracks</p>
                </div>
                <div className='bottom' style={{backgroundImage:'url(https://tse3.mm.bing.net/th?id=OIP._t67ZGsgrQAYord6Bjr4jAHaHa&pid=Api&P=0)'}}>
                    <p>Ethnic leggings</p>
                </div>
                <div className='bottom' style={{backgroundImage:'url(https://tse4.mm.bing.net/th?id=OIP.5Mbni6jKVdcVNj_Up39iRQHaHa&pid=Api&P=0)'}}>
                    <p>Ethnic pants & Palazzos</p>
                </div>
            </div>
        </div>
        <div className='shopbycategory'>
            <h3>Shop By Category</h3>
            <div className='borderdiv' ></div>
            <div>
                <div>
                    <div className='bottom' style={{backgroundImage:'url(https://tse3.mm.bing.net/th?id=OIP.9T2H0lY26i2YKSCNrpYoyAHaJ4&pid=Api&P=0)'}}>
                    </div>                    
                    <p>Tops & TEES</p>
                    <p>From ₹299</p>
                </div>
                <div>
                    <div className='bottom' style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.Pw%2bHMI4keDFEbQ474C474&o=5&pid=21.1&w=&h=)'}}>
                    </div>                    
                    <p>Tops & TEES</p>
                    <p>From ₹299</p>
                </div>
                <div>
                    <div className='bottom' style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.ijxrATNBQ8mFew474C474&o=5&pid=21.1&w=&h=)'}}>
                    </div>                    
                    <p>Tops & TEES</p>
                    <p>From ₹299</p>
                </div>
                <div>
                    <div className='bottom' style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.cu0Z7aUty1U3xQ474C474&o=5&pid=21.1&w=&h=)'}}>
                    </div>                    
                    <p>Tops & TEES</p>
                    <p>From ₹299</p>
                </div>
                <div>
                    <div className='bottom' style={{backgroundImage:'url(https://tse1.mm.bing.net/th?id=OIP.zICg9APLrr8OdaMruWdO7AHaJT&pid=Api&P=0)'}}>
                    </div>                    
                    <p>Tops & TEES</p>
                    <p>From ₹299</p>
                </div>
                <div>
                    <div className='bottom' style={{backgroundImage:'url(https://tse2.mm.bing.net/th?id=OIP.FMfBFW0eLdksxTpHiT9-mQHaLH&pid=Api&P=0)'}}>
                    </div>                    
                    <p>Tops & TEES</p>
                    <p>From ₹299</p>
                </div>
                
            </div>
        </div>
        <div className='activewear'>
            <h3>Activewear Essentials</h3>
            <div className='borderdiv' ></div>
            <div >
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-A-Women-13Dec2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-B-Women-13Dec2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-C-Women-06Sep2022.jpg" alt="" />
            </div>
        </div>
        <div className='activewear'>
            <h3>Most Loved Winterwear Styles</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-A-Women-09Dec2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-B-Women-09Dec2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-C-Women-12Dec2022.jpg" alt="" />
            </div>
        </div>
        <div className='activewear'>
            <h3>Curated For You</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-A-01Dec2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-B-01Dec2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-C-01Dec2022.jpg" alt="" />
            </div>
        </div>
        <div className='activewear'>
            <h3>Trendsetters</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-A-Women-06Dec2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-B-Women-06Dec2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-C-Women-06Dec2022.jpg" alt="" />
            </div>
        </div>
        <div className='activewear'>
            <h3>Wardrobe Essentials</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-A-Women-12Sept2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-B-Women-06Sep2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-C-Women-06Sep2022.jpg" alt="" />
            </div>
        </div>
        <div className='activewear'>
            <h3>Editor's Curated List</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modblock7-oneBythree-A-Women-08April2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modblock7-oneBythree-B-Women-08April2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modblock7-oneBythree-C-Women-08April2022.jpg" alt="" />
            </div>
        </div>
        <div className='bestseller'>
            <h3>Best Sellers</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-5modblock-oneBytwo1-C-Women-09yAug2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-5modblock-oneBytwo1-D-Women-09Aug2022.jpg" alt="" />
            </div>
        </div>
        <div className='activewear'>
            <h3>Shop By Department</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-A-Women-04March2022A.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-B-Women-12April2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-C-Women-04March2022A.jpg" alt="" />
            </div>
        </div>
        <div>
            <Footer/>
        </div>

    </div>
  )
}

export default Womens