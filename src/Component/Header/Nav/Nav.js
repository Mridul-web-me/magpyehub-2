import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox'


import './Nav.css'
const Nav = () => {

    return (
        <>
            <div>
                <nav>
                    <div className="wrapper">
                        <input type="radio" name="slider" id="menu-btn" />
                        <input type="radio" name="slider" id="close-btn" />
                        <ul className="nav-links">
                            <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
                            <li className='nav-item'>
                                {/* <label className="desktop-item">Home & Garden <i className="fas fa-angle-down"></i></label> */}
                                <input type="checkbox" id="showMega" />

                                <div className="searchBarQuote">
                                    <div className='searchBar'>
                                        <label htmlFor="showMega" className="mobile-item">Search Products</label>
                                    </div>
                                </div>
                                <div className="mega-box">
                                    <div className="content">
                                        <div className="row">
                                            <SearchBox></SearchBox>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item1">
                                    <Link to="/HomeAndGarden">Home & Garden</Link>
                                </label>
                                <input type="checkbox" id="showMega1" />
                                <label htmlFor="showMega1" className="mobile-item1">
                                    Home & Garden
                                </label>
                                <div className="mega-box1">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Bedding</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/homeAndGarden/duvetCovers">Duvet Covers</Link></li>
                                                <li><Link to="/homeAndGarden/bedding">Bed Sheets</Link></li>
                                                <li><Link to="/homeAndGarden/pillowCases">Pillow Cases</Link></li>
                                                <li><Link to="/homeAndGarden/duvets">Duvets</Link></li>
                                                <li><Link to="/homeAndGarden/pillows">Pillows</Link></li>
                                                <li><Link to="/homeAndGarden/throwsBlanketsAndSpreads">Throws & Blankets</Link></li>
                                                <li><Link to="/homeAndGarden/childrensBedding">Children's Bedding</Link></li>
                                                <li><Link to="/homeAndGarden/shopBedding">Shop Bedding</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Cooking & Dining</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/homeAndGarden/cookwareBakeware">Cookware & Bakeware</Link></li>
                                                <li><Link to="/homeAndGarden/tablewareAndcutlery">Tableware & Cutlery</Link></li>
                                                <li><Link to="/homeAndGarden/glassesDrinkware">Glasses & Drinkware</Link></li>
                                                <li><Link to="/homeAndGarden/potsPans">Pots & Pans</Link></li>
                                                <li><Link to="/homeAndGarden/foodPreparation">Food Preparation</Link></li>
                                                <li><Link to="/homeAndGarden/picnicware">Picnicware</Link></li>
                                                <li><Link to="/homeAndGarden/kitchenUtensilsGadgets">Kitchen Utensils & Gadgets</Link></li>
                                                <li><Link to="/homeAndGarden/kitchenBins">Kitchen Bins</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Décor & Accessories</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/homeAndGarden/homeAccessories">Home Accessories</Link></li>
                                                <li><Link to="/homeAndGarden/cushions">Cushions & Bean Bags</Link></li>
                                                <li><Link to="/homeAndGarden/candlesAndHomeFragrances">Candles & Home Fragrance</Link></li>
                                                <li><Link to="/homeAndGarden/towels"> Towels</Link></li>
                                                <li><Link to="/homeAndGarden/picturesArtFrames">Pictures, Art & Frames</Link></li>
                                                <li><Link to="/homeAndGarden/mirrors"> Mirrors</Link></li>
                                                <li><Link to="/homeAndGarden/rugs"> Rugs</Link></li>
                                                <li><Link to="/homeAndGarden/storage"> Storage</Link></li>
                                                <li><Link to="/homeAndGarden/wallpaperPaintDIY"> Wallpaper, Paint & DIY</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Curtains, Blinds & Floors</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/homeAndGarden/curtains">Curtains</Link></li>
                                                <li><Link to="/homeAndGarden/madeToMeasureCurtains">Made to Measure Curtains</Link></li>
                                                <li><Link to="/homeAndGarden/curtainPolesAccessories">Curtain Poles & Accessories</Link></li>
                                                <li><Link to="/homeAndGarden/blinds"> Blinds</Link></li>
                                                <li><Link to="/homeAndGarden/fabrics"> Fabrics</Link></li>
                                                <li><Link to="/homeAndGarden/carpetsAndFlooring"> Carpets & Flooring</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Garden</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/homeAndGarden/gardenFurnitureSets">Garden Furniture Sets</Link></li>
                                                <li><Link to="/homeAndGarden/gardenSeating">Garden Seating</Link></li>
                                                <li><Link to="/homeAndGarden/gasBBQs">Gas BBQs</Link></li>
                                                <li><Link to="/homeAndGarden/pizzaOvens">Pizza Ovens</Link></li>
                                                <li><Link to="/homeAndGarden/decorativeGardenAccessories"> Decorative Garden Accessories</Link></li>
                                                <li><Link to="/homeAndGarden/outdoorlights"> Outdoor Lighting</Link></li>
                                                <li><Link to="/homeAndGarden/parasolsAccessories"> Parasols & Accessories</Link></li>
                                                <li><Link to="/HomeAndGarden"> Shop Garden</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className='nav-item'>
                                <label className="desktop-item2">
                                    <Link to="/women">Women</Link>
                                </label>
                                <input type="checkbox" id="showMega2" />
                                <label htmlFor="showMega2" className="mobile-item2">
                                    Women
                                </label>
                                <div className="mega-box2">
                                    <div className="content">

                                        <div className="row" style={{

                                            marginRight: '0px'
                                        }}>
                                            <h5>Clothing</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/women/dresses">Dresses</Link></li>
                                                <li><Link to="/women/jeans">Jeans</Link></li>
                                                <li><Link to="/women/shirtsTops">Shirts & Tops</Link></li>
                                                <li><Link to="/women/shorts">Shorts</Link></li>
                                                <li><Link to="/women/skirts">Skirts</Link></li>
                                                <li><Link to="/women/sportsClothes ">Sports & Clothes  </Link></li>
                                                <li><Link to="/women/swimwearBeachwear ">Swimwear Beachwear  </Link></li>
                                                <li><Link to="/women/womenTrousers">Trousers</Link></li>
                                                <li><Link to="/women/leggings">Leggings</Link></li>
                                                <li><Link to="/women/plusSize">Plus Size</Link></li>
                                            </ul>
                                        </div>
                                        <div style={{
                                            marginTop: '24px',
                                            marginLeft: '0px'
                                        }} className="row">
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/women/maternityClothes ">Maternity Clothes</Link></li>
                                                <li><Link to="/women/cashmere">Cashmere</Link></li>
                                                <li><Link to="/women/coatsJackets ">Coats & Jackets</Link></li>
                                                <li><Link to="/women/jumpersKnitwear ">Jumpers & Knitwear</Link></li>
                                                <li><Link to="/women/jumpsuits ">Jumpsuits</Link></li>
                                                <li><Link to="/women/linen">Linen</Link></li>
                                                <li><Link to="/women/loungewear ">Loungewear</Link></li>
                                                <li><Link to="/women/petite ">Petite</Link></li>
                                                <li><Link to="/women/occasionwear ">Occasionwear</Link></li>
                                                <li><Link to="/women/weddingBoutique ">Wedding Boutique</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Footwear</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/women/womenShoes">Shoes</Link></li>
                                                <li><Link to="/women/womenSandals">Sandals</Link></li>
                                                <li><Link to="/women/womenSlippers">Slippers</Link></li>
                                                <li><Link to="/women/womenTrainersAndPlimsoles">Trainers & Plimsoles</Link></li>
                                                <li><Link to="/women/womenCourtShoes">Court Shoes</Link></li>
                                                <li><Link to="/women/womenBoots">Boots</Link></li>
                                                <li><Link to="/women/womenPumps">Court Pumps</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Lingerie, Nightwear & Hosiery</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/women/brasSportsBras">Bras & Sports Bras</Link></li>
                                                <li><Link to="/women/Nightwear">Nightwear</Link></li>
                                                <li><Link to="/women/socks">Socks</Link></li>
                                                <li><Link to="/women/Knickers">Knickers</Link></li>
                                                <li><Link to="/women/tights">Tights</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row" style={{
                                            marginRight: '0px'
                                        }}>
                                            <h5 >Accessories</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/women/womenHandbags">Handbags</Link></li>
                                                <li><Link to="/women/womenPurses">Purses</Link></li>
                                                <li><Link to="/women/womenBelts">Belts</Link></li>
                                                <li><Link to="/women/womenSunglasses">Sunglasses</Link></li>
                                                <li><Link to="/women/womenJewellery">Jewellery</Link></li>
                                                <li><Link to="/women/womenHats">Hats</Link></li>
                                                <li><Link to="/women/womenWatches">Watches</Link></li>
                                                <li><Link to="/women/womenHairAccessories">Hair Accessories</Link></li>
                                                <li><Link to="/women/womenOccasionHatsFascinators">Occasion Hats & Fascinators</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item3">
                                    <Link to="/men">Men</Link>
                                </label>
                                <input type="checkbox" id="showMega3" />
                                <label htmlFor="showMega3" className="mobile-item3">
                                    Men
                                </label>
                                <div className="mega-box3">
                                    <div className="content">
                                        <div className="row" style={{
                                            marginRight: '0px'
                                        }}>
                                            <h5>Clothing</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/men/blazers">Blazers</Link></li>
                                                <li><Link to="/men/MenJeans">Jeans</Link></li>
                                                <li><Link to="/men/poloshirts">Polo Shirts</Link></li>
                                                <li><Link to="/men/menShirts">Shirts</Link></li>
                                                <li><Link to="/men/menShorts">Shorts</Link></li>
                                                <li><Link to="/men/menSportsClothesGym">Sports Clothes/Gym</Link></li>
                                                <li><Link to="/men/suits">Suits</Link></li>
                                                <li><Link to="/men/swimwear">Swimwear</Link></li>
                                                <li><Link to="/men/trousers">Trousers</Link></li>
                                                <li><Link to="/men/t-shirts">T-Shirts</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row" style={{
                                            marginTop: '24px',
                                            marginLeft: '0px'
                                        }}>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/men/waistcoats">Waistcoats</Link></li>
                                                <li><Link to="/men/menCoatsJackets">Coats & Jackets</Link></li>
                                                <li><Link to="/men/menSweatshirtsHoodies">Sweatshirts & Hoodies</Link></li>
                                                <li><Link to="/men/menJumpersCardigans">Jumpers & Cardigans</Link></li>
                                                <li><Link to="/men/menLinen">Linen</Link></li>
                                                <li><Link to="/men/menLoungewear">Loungewear</Link></li>
                                                <li><Link to="/men/menWeddingShop">Wedding Shop</Link></li>
                                                <li><Link to="/men/menHolidaySummerShop">Holiday & Summer Shop</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Nightwear, Underwear & Socks</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/men/PyjamasNightwear">Pyjamas & Nightwear</Link></li>
                                                <li><Link to="/men/robesAndDressingGowns">Robes & Dressing Gowns</Link></li>
                                                <li><Link to="/men/MenSocks">Socks</Link></li>
                                                <li><Link to="/men/underwear">Underwear</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Footwear</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/men/menBoots">Boots</Link></li>
                                                <li><Link to="/men/menShoes">Shoes</Link></li>
                                                <li><Link to="/men/menSandals">Sandals</Link></li>
                                                <li><Link to="/men/menSlippers">Slippers</Link></li>
                                                <li><Link to="/men/menTrainersAndPlimsoles">Trainers</Link></li>
                                                <li><Link to="/men/menWalkingBootsShoes">Walking Boots & Shoes</Link></li>

                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Accessories</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/men/menBags">Men's Bags</Link></li>
                                                <li><Link to="/men/menBelts">Belts</Link></li>
                                                <li><Link to="/men/menHats">Hats</Link></li>
                                                <li><Link to="/men/menWallets">Wallets</Link></li>
                                                <li><Link to="/men/menSunglasses">Sunglasses</Link></li>
                                                <li><Link to="/men/menWatches">Watches</Link></li>
                                                <li><Link to="/men/menJewellery">Jewellery</Link></li>
                                                <li><Link to="/men/menSuitcases">Suitcases</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item4">
                                    <Link to="/beauty">Beauty</Link>
                                </label>
                                <input type="checkbox" id="showMega4" />
                                <label htmlFor="showMega4" className="mobile-item4">
                                    Beauty
                                </label>
                                <div className="mega-box4">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Top Brands</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li> <Link to="/beauty/theOrdinary">The Ordinary</Link></li>
                                                <li> <Link to="/beauty/CHANEL">CHANEL</Link></li>
                                                <li> <Link to="/beauty/CharlotteTilbury">Charlotte Tilbury</Link></li>
                                                <li> <Link to="/beauty/Clarins">Clarins</Link></li>
                                                <li> <Link to="/beauty/Clinique">Clinique</Link></li>
                                                <li> <Link to="/beauty/DIOR">DIOR</Link></li>
                                                <li> <Link to="/beauty/JoMaloneLondon">Jo Malone London</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Makeup</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/beauty/viewallMakeup">View all Makeup</Link></li>
                                                <li><Link to="/beauty/foundations">Foundations</Link></li>
                                                <li><Link to="/beauty/concealers">Concealers</Link></li>
                                                <li><Link to="/beauty/eyeshadows">Eyeshadows</Link></li>
                                                <li><Link to="/beauty/mascaras">Mascaras</Link></li>
                                                <li><Link to="/beauty/lipsticks">Lipsticks</Link></li>
                                                <li><Link to="/beauty/nailPolish">Nail Polish</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Fragrance</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/beauty/womensPerfume">Women's Perfume</Link></li>
                                                <li><Link to="/beauty/perfumeGiftSets">Perfume Gift Sets</Link></li>
                                                <li><Link to="/beauty/mensAftershave">Men's Aftershave</Link></li>
                                                <li><Link to="/beauty/aftershaveGiftSets">Aftershave Gift Sets</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Skin & Body Care</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/beauty/cleansers">Cleansers</Link></li>
                                                <li><Link to="/beauty/moisturisers">Moisturisers</Link></li>
                                                <li><Link to="/beauty/bathsShower">Baths & Shower</Link></li>
                                                <li><Link to="/beauty/bodyCare">Body Care</Link></li>
                                                <li><Link to="/beauty/lipBalmCare">Lip Balm & Care</Link></li>
                                                <li><Link to="/beauty/handFootCare">Hand & Foot Care</Link></li>
                                                <li><Link to="/beauty/skinCareTreatments">Skin Care & Treatments</Link></li>
                                                <li><Link to="/beauty/sunCreamAfterSun">Sun Cream & After Sun</Link></li>
                                                <li><Link to="/beauty/menGrooming">Men's Grooming</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Hair Care & Styling</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/beauty/hairCare">Hair Care</Link></li>
                                                <li><Link to="/beauty/shampoo">Shampoo</Link></li>
                                                <li><Link to="/beauty/conditioner">Conditioner</Link></li>
                                                <li><Link to="/beauty/hairTreatments">Hair Treatments</Link></li>
                                                <li><Link to="/beauty/hairStylingProducts">Hair Styling Products</Link></li>
                                                <li><Link to="/beauty/hairBrushes">Hair Brushes</Link></li>
                                                <li><Link to="/beauty/electricalHairBeauty">Electrical Hair & Beauty</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Inspire Me</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/beauty/Offers">Offers</Link></li>
                                                <li><Link to="/beauty/NewArrivals">New Arrivals</Link></li>
                                                <li><Link to="/beauty/VeganBeauty">Vegan Beauty</Link></li>
                                                <li><Link to="/beauty/Wellness">Wellness</Link></li>
                                                <li><Link to="/beauty/GiftSets">Gift Sets</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item5">
                                    <Link to="/BabyAndChild">Baby & Child</Link>
                                </label>
                                <input type="checkbox" id="showMega5" />
                                <label htmlFor="showMega5" className="mobile-item5">
                                    Baby & Child
                                </label>
                                <div className="mega-box5">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Baby Food & Milk</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/babyAndChild/BabyToddlerFood">Baby & Toddler Food</Link></li>
                                                <li><Link to="/babyAndChild/BabyToddlerMilk">Baby & Toddler Milk</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Baby Home & Nursery</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/babyAndChild/sleeping">Sleeping</Link></li>
                                                <li><Link to="/babyAndChild/bathingChanging">Bathing & Changing</Link></li>
                                                <li><Link to="/babyAndChild/feedingWeaning">Feeding & Weaning</Link></li>
                                                <li><Link to="/babyAndChild/nurseryFunitureFurnishings">Nursery Funiture & Furnishings</Link></li>
                                                <li><Link to="/babyAndChild/safetyHealthcare">Safety & Healthcare</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Baby Clothes (0-4 years)</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/babyAndChild/babyToddlerclothes">Baby & Toddler clothes</Link></li>
                                                <li><Link to="/babyAndChild/babyBoyClothes">Baby Boy Clothes</Link></li>
                                                <li><Link to="/babyAndChild/babyGirlClothes">Baby Girl Clothes</Link></li>
                                                <li><Link to="/babyAndChild/sleepsuitsBodysuits">Sleepsuits & Bodysuits</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Kids Clothing & Shoes</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/babyAndChild/AllGirlsclothes">All Girls clothes</Link></li>
                                                <li><Link to="/babyAndChild/GirlsDresses">Girls Dresses</Link></li>
                                                <li><Link to="/babyAndChild/GirlsShoes">Girls Shoes</Link></li>
                                                <li><Link to="/babyAndChild/AllBoysClothes">All Boys Clothes</Link></li>
                                                <li><Link to="/babyAndChild/BoysShorts ">Boys Shorts </Link></li>
                                                <li><Link to="/babyAndChild/BoysShoes">Boys Shoes</Link></li>
                                                <li><Link to="/babyAndChild/BoysTops">Boys Tops</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Kids Travel</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/babyAndChild/carSeats">Car Seats</Link></li>
                                                <li><Link to="/babyAndChild/babyCarriers">Baby Carriers</Link></li>
                                                <li><Link to="/babyAndChild/strollers">Strollers</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Kids Toys & Gifts</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/babyAndChild/Toys">Toys</Link></li>
                                                <li><Link to="/babyAndChild/BabyPreschoolToys">Baby & preschool Toys</Link></li>
                                                <li><Link to="/babyAndChild/KidsGamesPuzzles">Games & Puzzles</Link></li>
                                                <li><Link to="/babyAndChild/LEGO">LEGO</Link></li>
                                                <li><Link to="/babyAndChild/GiftsForBabiesKids">Gifts for Babies & Kids</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item6">
                                    <Link to="/FurnitureAndLighting">Furniture & Lighting</Link>
                                </label>
                                <input type="checkbox" id="showMega6" />
                                <label htmlFor="showMega6" className="mobile-item6">Furniture & Lighting</label>
                                <div className="mega-box6">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Living Room Furniture</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/furnitureAndLighting/sofasArmchairs">Sofas & Armchairs</Link></li>
                                                <li><Link to="/furnitureAndLighting/tVStands">TV Stands</Link></li>
                                                <li><Link to="/furnitureAndLighting/coffeeTables">Coffee Tables</Link></li>
                                                <li><Link to="/furnitureAndLighting/bookcasesShelving">Bookcases & Shelving</Link></li>
                                                <li><Link to="/furnitureAndLighting/cabinetsSideboards">Cabinets & Sideboards</Link></li>
                                                <li><Link to="/furnitureAndLighting/consoleTables">Console Tables</Link></li>
                                                <li><Link to="/furnitureAndLighting/sideTables">Side Tables</Link></li>
                                                <li><Link to="/furnitureAndLighting/shopLivingRoom">Shop Living Room</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Bedroom Furniture</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/furnitureAndLighting/beds">Beds</Link></li>
                                                <li><Link to="/furnitureAndLighting/mattresses">Mattresses</Link></li>
                                                <li><Link to="/furnitureAndLighting/bedsideTables">Bedside Tables</Link></li>
                                                <li><Link to="/furnitureAndLighting/chestsDrawers">Chests of Drawers</Link></li>
                                                <li><Link to="/furnitureAndLighting/dressingTables">Dressing Tables</Link></li>
                                                <li><Link to="/furnitureAndLighting/wardrobes">Wardrobes</Link></li>
                                                <li><Link to="/furnitureAndLighting/childrenBedroom">Children's Bedroom</Link></li>
                                                <li><Link to="/furnitureAndLighting/shopBedroom">Shop Bedroom</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Dining Room Furniture</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/furnitureAndLighting/DiningTables">Dining Tables</Link></li>
                                                <li><Link to="/furnitureAndLighting/DiningChairs">Dining Chairs </Link></li>
                                                <li><Link to="/furnitureAndLighting/BarChairsStools">Bar Chairs & Stools</Link></li>
                                                <li><Link to="/furnitureAndLighting/DiningBenches">Dining Benches</Link></li>
                                                <li><Link to="/furnitureAndLighting/ShopDiningRoom">Shop Dining Room</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Home Office & Storage</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/furnitureAndLighting/OfficeDesks">Office Desks</Link></li>
                                                <li><Link to="/furnitureAndLighting/OfficeChairs">Office Chairs</Link></li>
                                                <li><Link to="/furnitureAndLighting/HomeStorage">Home Storage</Link></li>
                                                <li><Link to="/furnitureAndLighting/ShopHomeOffice">Shop Home Office</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Lighting</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/furnitureAndLighting/CeilingLights">Ceiling Lights</Link></li>
                                                <li><Link to="/furnitureAndLighting/DeskTableLamps">Desk & Table lamps</Link></li>
                                                <li><Link to="/furnitureAndLighting/FloorLamps">Floor Lamps</Link></li>
                                                <li><Link to="/furnitureAndLighting/WallLighting">Wall Lighting</Link></li>
                                                <li><Link to="/furnitureAndLighting/GardenOutdoorlights">Garden & Outdoor lights</Link></li>
                                                <li><Link to="/furnitureAndLighting/LightBulbs">Light Bulbs</Link></li>
                                                <li><Link to="/furnitureAndLighting/LampShades">Lamp Shades</Link></li>
                                                <li><Link to="/furnitureAndLighting/ShopLighting">Shop Lighting</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Inspire Me</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/furnitureAndLighting/gardenDiningSets">Garden Dining Sets</Link></li>
                                                <li><Link to="/furnitureAndLighting/gardenLoungeSets">Garden Lounge Sets</Link></li>
                                                <li><Link to="/furnitureAndLighting/ShopLighting">New in: Lighting</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className='nav-item'>
                                <label className="desktop-item7">
                                    <Link to="/Electricals">Electricals</Link>
                                </label>
                                <input type="checkbox" id="showMega7" />
                                <label htmlFor="showMega7" className="mobile-item7">Electricals</label>
                                <div className="mega-box7">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Television & Audio</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/electricals/Television">Television</Link></li>
                                                <li><Link to="/electricals/SoundbarsHomeCinema">Soundbars & Home Cinema</Link></li>
                                                <li><Link to="/electricals/TVStandsWallMounts">TV Stands & Wall Mounts</Link></li>
                                                <li><Link to="/electricals/TVStreamingDevices">TV Streaming Devices</Link></li>
                                                <li><Link to="/electricals/SpeakersSoundSystems">Speakers & Sound Systems</Link></li>
                                                <li><Link to="/electricals/Headphones">Headphones</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Computing & Gaming</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/electricals/IpadsTablets">Ipads & Tablets</Link></li>
                                                <li><Link to="/electricals/LaptopsMacBooks">Laptops & MacBooks </Link></li>
                                                <li><Link to="/electricals/PCsDesktopComputers">PCs & Desktop Computers</Link></li>
                                                <li><Link to="/electricals/MonitorsProjectors">Monitors & Projectors</Link></li>
                                                <li><Link to="/electricals/PrintersAccessories">Printers & Accessories</Link></li>
                                                <li><Link to="/electricals/Gaming">Gaming</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Home Appliances</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/electricals/WashingMachines">Washing Machines</Link></li>
                                                <li><Link to="/electricals/FridgeFreezers">Fridge Freezers</Link></li>
                                                <li><Link to="/electricals/Dishwashers">Dishwashers</Link></li>
                                                <li><Link to="/electricals/CookersOvens">Cookers & Ovens</Link></li>
                                                <li><Link to="/electricals/Microwaves">Microwaves</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Kitchen Appliances & Vacuums</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/electricals/CoffeeMachines">Coffee Machines</Link></li>
                                                <li><Link to="/electricals/Kettles">Kettles</Link></li>
                                                <li><Link to="/electricals/Toasters">Toasters</Link></li>
                                                <li><Link to="/electricals/VacuumCleaners">Vacuum Cleaners</Link></li>
                                                <li><Link to="/electricals/FansCoolingPurifiers">Fans, Cooling & Purifiers</Link></li>
                                                <li><Link to="/electricals/Ironing">Ironing</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Mobile, Cameras & Smart Tech</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/electricals/MobilePhonesAccessories">Mobile Phones & Accessories</Link></li>
                                                <li><Link to="/electricals/CamerasCamcorders">Cameras & Camcorders</Link></li>
                                                <li><Link to="/electricals/SmartFitnessWatches">Smart & Fitness Watches</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className='nav-item'>
                                <label className="desktop-item8">
                                    <Link to="/sportAndLeisure">Sport & Leisure</Link>
                                </label>
                                <input type="checkbox" id="showMega8" />
                                <label htmlFor="showMega8" className="mobile-item8">Sport & Leisure</label>
                                <div className="mega-box8">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Sportswear</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/sportAndLeisure/WomensClothing">Women's Clothing</Link></li>
                                                <li><Link to="/sportAndLeisure/WomenSportsTrainers">Women's Sports Trainers</Link></li>
                                                <li><Link to="/sportAndLeisure/MenClothing">Men's Clothing</Link></li>
                                                <li><Link to="/sportAndLeisure/MenSportsTrainers">Men's Sports Trainers</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Fitness</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/sportAndLeisure/FitnessMachinesTechnology">Fitness Machines & Technology</Link></li>
                                                <li><Link to="/sportAndLeisure/SportsEquipment">Sports Equipment</Link></li>
                                                <li><Link to="/sportAndLeisure/Treadmills">Treadmills</Link></li>
                                                <li><Link to="/sportAndLeisure/ExerciseBikes">Exercise Bikes</Link></li>
                                                <li><Link to="/sportAndLeisure/CrossTrainers">Cross Trainers</Link></li>
                                                <li><Link to="/sportAndLeisure/Weights">Weights</Link></li>
                                                <li><Link to="/sportAndLeisure/Smartwatches">Smartwatches</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Equipment by Sport</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/sportAndLeisure/Cycling">Cycling </Link></li>
                                                <li><Link to="/sportAndLeisure/GymTrainingFitness ">Gym, Training & Fitness </Link></li>
                                                <li><Link to="/sportAndLeisure/Running">Running </Link></li>
                                                <li><Link to="/sportAndLeisure/Swimming">Swimming </Link></li>
                                                <li><Link to="/sportAndLeisure/Yoga">Yoga </Link></li>
                                            </ul>
                                        </div>

                                        <div className="row">
                                            <h5>Sports Brands</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/sportAndLeisure/Adidas">Adidas</Link></li>
                                                <li><Link to="/sportAndLeisure/SweatyBetty">Sweaty Betty</Link></li>
                                                <li><Link to="/sportAndLeisure/TheNorthFace">The North Face</Link></li>
                                                <li><Link to="/sportAndLeisure/Therabody">Therabody</Link></li>
                                                <li><Link to="/sportAndLeisure/UnderArmour">Under Armour</Link></li>

                                            </ul>
                                        </div>

                                        <div className="row">
                                            <h5>Hobbies & Crafts</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/sportAndLeisure/Haberdashery">Haberdashery</Link></li>
                                                <li><Link to="/sportAndLeisure/GamesPuzzles">Games & Puzzles</Link></li>
                                                <li><Link to="/sportAndLeisure/Crafts">Crafts</Link></li>
                                                <li><Link to="/sportAndLeisure/Stationery">Stationery</Link></li>
                                                <li><Link to="/sportAndLeisure/Books">Books</Link></li>
                                                <li><Link to="/sportAndLeisure/SewingMachines">Sewing Machines</Link></li>
                                                <li><Link to="/sportAndLeisure/WoolYarn">Wool & Yarn</Link></li>
                                            </ul>
                                        </div>

                                        <div className="row">
                                            <h5>Travel & Luggage</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/sportAndLeisure/ViewAllLuggage">View All Luggage</Link></li>
                                                <li><Link to="/sportAndLeisure/Backpacks">Backpacks</Link></li>
                                                <li><Link to="/sportAndLeisure/CabinCases">Cabin Cases</Link></li>
                                                <li><Link to="/sportAndLeisure/Suitcases">Suitcases</Link></li>
                                                <li><Link to="/sportAndLeisure/HoldallsWeekendBags">Holdalls & Weekend Bags</Link></li>
                                                <li><Link to="/sportAndLeisure/Camping">Camping</Link></li>
                                                <li><Link to="/sportAndLeisure/HolidaySummerShop">Holiday & Summer Shop</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item'>
                                <label className="desktop-item9">
                                    <Link to="/Gifts">Gifts</Link>
                                </label>
                                <input type="checkbox" id="showMega9" />
                                <label htmlFor="showMega9" className="mobile-item9">Gifts</label>
                                <div className="mega-box9">
                                    <div className="content">
                                        <div className="row">
                                            <h5>Gifts By Recipient</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/gifts/GiftsForHer">Gifts for Her</Link></li>
                                                <li><Link to="/gifts/GiftsForHim">Gifts for Him</Link></li>
                                                <li><Link to="/gifts/GiftsForKids">Gifts for Kids</Link></li>
                                                <li><Link to="/gifts/GiftsForCouples">Gifts for Couples</Link></li>
                                                <li><Link to="/gifts/GiftsForBabies">Gifts for Babies</Link></li>
                                                <li><Link to="/gifts/GiftsForTeenagers">Gifts for Teenagers</Link></li>
                                                <li><Link to="/gifts/GiftsForPets">Gifts for Pets</Link></li>
                                                <li><Link to="/gifts/GiftsForGrandparents">Gifts for Grandparents</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Gifts by Price</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/gifts/GiftsUnder20">Gifts under $20</Link></li>
                                                <li><Link to="/gifts/GiftsUnder50">Gifts under $50</Link></li>
                                                <li><Link to="/gifts/GiftsUnder100">Gifts under $100</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Shop by Occasion</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/gifts/Birthday">Birthday</Link></li>
                                                <li><Link to="/gifts/Wedding">Wedding</Link></li>
                                                <li><Link to="/gifts/NewHome">New Home</Link></li>
                                                <li><Link to="/gifts/Anniversary">Anniversary</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Food & Drink Gifts</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/gifts/ViewAllGiftFoodDrink">View All Gift Food & Drink</Link></li>
                                                <li><Link to="/gifts/GiftsForGinLovers">Gifts for Gin Lovers</Link></li>
                                                <li><Link to="/gifts/CakesBiscuits">Cakes & Biscuits</Link></li>
                                                <li><Link to="/gifts/SweetsFudge">Sweets & Fudge</Link></li>
                                                <li><Link to="/gifts/Hampers">Hampers</Link></li>
                                                <li><Link to="/gifts/Chocolate">Chocolate</Link></li>
                                                <li><Link to="/gifts/Alcohol">Alcohol</Link></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <h5>Popular Gifts</h5>
                                            <hr />
                                            <ul className="mega-links">
                                                <li><Link to="/gifts/BeautyFragranceGifts">Beauty & Fragrance Gifts</Link></li>
                                                <li><Link to="/gifts/GamesAndPuzzles">Games and Puzzles</Link></li>
                                                <li><Link to="/gifts/CandlesHomeFragrance">Candles & Home Fragrance</Link></li>
                                                <li><Link to="/gifts/CookingBaking">Cooking & Baking </Link></li>
                                                <li><Link to="/gifts/Gardening">Gardening </Link></li>
                                                <li><Link to="/gifts/GiftWrapPartyShop">Gift Wrap & Party Shop</Link></li>
                                                <li><Link to="/sportAndLeisure/Stationery">Stationery</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default Nav
