import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Mslider from './Mslider'
import './Womens.css'

const Mens = () => {
  return (
    <div className='womens' >
        <div className='slider'>
            <Mslider/>
        </div>
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
            <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-menstripbanner-15Dec2022.jpg" alt="" />
        </div>

        <div className='winterwear'>
            <h3>Winterwear Essentials</h3>
            <div className='borderdiv' ></div>
            <div>
                <div>
                <Link to='/mensproduct'><div>
                        <img src="https://sp.yimg.com/ib/th?id=OPA.C4dEhRf9fcrSBw474C474&o=5&pid=21.1&w=&h=" alt="" />
                    </div>
                    <p>Upto 50% off</p>
                    {/* <p>Men Solid Jacket</p> */}
                    </Link>
                </div>

                <div>
                <Link to='/mensproduct'><div>
                        <img src="https://sp.yimg.com/ib/th?id=OPA.yoPM8RRP9tkg3Q474C474&o=5&pid=21.1&w=&h=" alt="" />
                    </div>
                    <p>Upto 40% off</p>
                    {/* <p>Men's Quilted Bomber Jacket</p> */}
                    </Link>
                </div>
                <div>
                <Link to='/mensproduct'><div>
                        <img src="https://sp.yimg.com/ib/th?id=OPA.jeG%2f5u5CcyvE8g474C474&o=5&pid=21.1&w=&h=" alt="" />
                    </div>
                    <p>Upto 20% off</p>
                    {/* <p>Printed Men Round Neck Full Sleeve T-Shirt</p> */}
                    </Link>
                </div>
                <div>
                <Link to='/mensproduct'><div>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.H2beENqaAte0_fP4u1-_AgHaJQ&pid=Api&P=0" alt="" />
                    </div>
                    <p>Upto 30% off</p>
                    {/* <p>Men's Regular Fit Cotton Jacket for Winter Wear </p> */}
                    </Link>
                </div>
                <div>
                <Link to='/mensproduct'><div>
                        <img src="https://sp.yimg.com/ib/th?id=OPA.d7bNsKmUiYckQQ474C474&o=5&pid=21.1&w=&h=" alt="" />
                    </div>
                    <p>Upto 50% off</p>
                    {/* <p>Printed Men Round Neck Full Sleeve T-Shirt</p> */}
                    </Link>
                </div>
                <div>
                <Link to='/mensproduct'><div>
                        <img src="https://sp.yimg.com/ib/th?id=OPA.tleyh614cd7sgQ474C474&o=5&pid=21.1&w=&h=" alt="" />
                    </div>
                    <p>Upto 60% off</p>
                    {/* <p>Men's Solid Black Dri-Fit Zip Through Activewear Jacket</p> */}
                    </Link>
                </div>
            </div>
        </div>
        <div className='shopnow'>
            <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-9modblock-StripBanner2-D-15Dec2022.jpg" alt="" />
        </div>
        <div className='firsttime'> 
            <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-8modblock-oneBythree-D-15Dec2022.jpg" alt="" />
        </div>
        <div className='ethnicwear'>
            <h3>Shop by category</h3>
            <div className='borderdiv' ></div>
                <div>
                    <div style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.bIWHuvDaan31Tw474C474&o=5&pid=21.1&w=&h=)'}} >
                        <div className='textdiv'>
                            <p>T-shirt</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.hvDg4LFMc%2fJ4dg474C474&o=5&pid=21.1&w=&h=)'}} >
                        <div className='textdiv'>
                            <p>Casual shirt</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:'url(https://tse3.mm.bing.net/th?id=OIP.gEU8F1NTkILvsjyOPDK6NwHaI-&pid=Api&P=0)'}} >
                        <div className='textdiv'>
                            <p>Trackpants</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:'url(https://tse4.mm.bing.net/th?id=OIP.dG1t7kbkv6iu9iw12jUH0QHaJ3&pid=Api&P=0)'}} >
                        <div className='textdiv'>
                            <p>Jeans</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:'url(https://tse2.mm.bing.net/th?id=OIP.TOdDYGmOVz5HvGvd0KAgvgHaHa&pid=Api&P=0)'}} >
                        <div className='textdiv'>
                            <p>Watches</p>
                        </div>
                    </div>
                    <div style={{backgroundImage:'url(https://tse1.mm.bing.net/th?id=OIP.VoTlN48zCVGoMQahJQsVUQHaJ4&pid=Api&P=0)'}} >
                        <div className='textdiv'>
                            <p>Shorts</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className='flashsale'>
            <h3>Flash Sale For Today</h3>
            <div className='borderdiv' ></div>
            <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-modularblock7-oneBythree-A-Men-15Dec2022.jpg" alt="" />
        </div>
        <div className='toppics'>
            <h3>Top Picks</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-1-oneBythree-21June2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-2-oneBythree-21June2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-3-oneBythree-21June2022.jpg" alt="" />
            </div>
        </div>
        <div className='onlyimg'>
            <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-StripBanner1-24Nov2022.jpg" alt="" />

        </div>
        <div className='trendybottom' >
            <h3>Trendy Bottom Wear</h3>
            <div className='borderdiv' ></div>
            <div>
                <div className='mensbottom' style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.AqmSB4ylymkbWA474C474&o=5&pid=21.1&w=&h=)'}}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.232VyTDtip7Yg9qpb-gTKAHaHa&pid=Api&P=0" alt="" />
                </div>
                <div className='mensbottom' style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.hWT6pqm92VLJrg474C474&o=5&pid=21.1&w=&h=)'}}>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.mEBv-buSR2d-YYAa0-2pWQHaHG&pid=Api&P=0" alt="" />
                </div>
                <div className='mensbottom' style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.T9U%2feYwCKjDyyA474C474&o=5&pid=21.1&w=&h=)'}}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.qaWlAhuqk_Y3jg3honeMXgAAAA&pid=Api&P=0" alt="" />
                </div>
                <div className='mensbottom' style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.le06VymrPq6xVw474C474&o=5&pid=21.1&w=&h=)'}}>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.JeXAkmZcF8NaorvXecPfEQHaE6&pid=Api&P=0" alt="" />
                </div>
                <div className='mensbottom' style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.vOlIAUXeJW4Meg474C474&o=5&pid=21.1&w=&h=)'}}>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.-2MA_qJQYEJzQT-S5dw92QHaHa&pid=Api&P=0" alt="" />
                </div>
                <div className='mensbottom' style={{backgroundImage:'url(https://sp.yimg.com/ib/th?id=OPA.by7JutbrdM08Nw474C474&o=5&pid=21.1&w=&h=)'}}>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.3bwRTtx1xEfyuzbk_cNOCAHaE7&pid=Api&P=0" alt="" />
                </div>
            </div>
        </div>
        
        <div className='activewear'>
            <h3>Winter Trends</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-A-Men-09Sep2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-B-Men-15Dec2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-C-Men-15Dec2022.jpg" alt="" />
            </div>
        </div>
        <div className='activewear'>
            <h3>Most Loved Styles</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-1-oneBythreeA-07Sep2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-2-oneBythreeA-15Dec2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-3-oneBythreeA-24June2022.jpg" alt="" />
            </div>
        </div>
        <div className='activewear'>
            <h3>Highlights of the Day</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-1-oneBythree-24June2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-2-oneBythree-19July2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-3-oneBythree-24June2022.gif" alt="" />
            </div>
        </div>
        <div className='activewear'>
            <h3>Trendy Bottom Styles</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-1-oneBythree-15Dec2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-2-oneBythree-15Dec2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-3-oneBythree-16Sep2022.jpg" alt="" />
            </div>
        </div>
        <div className='activewear'>
            <h3>Active Wardrobe</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-1-oneBythree-16Sep2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-2-oneBythree-16Sep2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-3-oneBythree-16Sep2022.jpg" alt="" />
            </div>
        </div>
        {/* <div className='activewear'>
            <h3>Editor's Curated List</h3>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modblock7-oneBythree-A-Women-08April2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modblock7-oneBythree-B-Women-08April2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modblock7-oneBythree-C-Women-08April2022.jpg" alt="" />
            </div>
        </div> */}
        <div className='bestseller'>
            <h3>Most Loved Brands</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1C-Men-14July2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1D-Men-14July2022.jpg" alt="" />
            </div>
        </div>
        <div className='bestseller'>
            <h3>Essentials For You</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-A-Men-12Sept2022.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-B-Men-15Dec2022.jpg" alt="" />
            </div>
        </div>
        <div className='activewear'>
            <h3>Shop By Department</h3>
            <div className='borderdiv' ></div>
            <div>
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-A-Men-04March2022A.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-B-Men-04March2022A.jpg" alt="" />
                <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-C-Men-04March2022A.jpg" alt="" />
            </div>
        </div>
        <div>
            <Footer/>
        </div>

    </div>
  )
}

export default Mens