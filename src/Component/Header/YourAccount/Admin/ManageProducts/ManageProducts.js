import React, { useState, useEffect } from 'react';
import { Accordion, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '../../../../Footer/Footer';
import Header from '../../../Header';
import UpdatePrice from './UpdatePrice';
import UpdateTitle from './UpdateTitle';

const ManageProducts = () => {
  const [filter, setFilter] = useState([])
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`https://magpyehub-server.onrender.com/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      });
  }, [products]);


  const filterProduct = (catProduct) => {
    const updatedProduct = products.filter((curElem) => {
      return curElem.category === catProduct;
    });
    setFilter(updatedProduct);

  };

  const handleDelete = id => {
    const url = `https://magpyehub-server.onrender.com/products/${id}`;
    fetch(url, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {

        if (data.deletedCount) {
          alert('Successfully Deleted')
          const remaining = products.filter(product => product._id !== id);
          setProducts(remaining);
        }
      })
  }

  return (
    <div>
      <Helmet>
        <title>
          Manage Products
        </title>
        <meta name="description" content="This is Magpyehub Online Shop" />
      </Helmet>
      <Header></Header>
      <Container>
        <Row>
          <Col md={4}>
            <Accordion defaultActiveKey="0">
              <h2>Home & Garden</h2>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Home Furnishings & Accessories</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('duvetCovers') }} to="">Duvet Covers</Link> <br />
                    <Link onClick={() => { filterProduct('bedding') }} to="">Bed Sheets</Link> <br />
                    <Link onClick={() => { filterProduct('pillowCases') }} to="">Pillow Cases</Link> <br />
                    <Link onClick={() => { filterProduct('duvets') }} to="">Duvets</Link> <br />
                    <Link onClick={() => { filterProduct('pillows') }} to="">Pillows</Link> <br />
                    <Link onClick={() => { filterProduct('throwsBlanketsAndSpreads') }} to="">Throws & Blankets</Link> <br />
                    <Link onClick={() => { filterProduct('childrensBedding') }} to="">Children's Bedding</Link> <br />
                    <Link onClick={() => { filterProduct('shopBedding') }} to="">Shop Bedding</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Cooking & Dining</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('cookwareBakeware') }} to="">Cookware & Bakeware</Link> <br />
                    <Link onClick={() => { filterProduct('tablewareAndcutlery') }} to="">Tableware & Cutlery</Link> <br />
                    <Link onClick={() => { filterProduct('glassesDrinkware') }} to="">Glasses & Drinkware</Link> <br />
                    <Link onClick={() => { filterProduct('potsPans') }} to="">Pots & Pans</Link> <br />
                    <Link onClick={() => { filterProduct('foodPreparation') }} to="">Food Preparation</Link> <br />
                    <Link onClick={() => { filterProduct('picnicware') }} to="">Picnicware</Link> <br />
                    <Link onClick={() => { filterProduct('kitchenUtensilsGadgets') }} to="">Kitchen Utensils & Gadgets</Link> <br />
                    <Link onClick={() => { filterProduct('kitchenBins') }} to="">Kitchen Bins</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Home Décor & Accessories</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('homeAccessories') }} to="">Home Accessories</Link> <br />
                    <Link onClick={() => { filterProduct('cushions') }} to="">Cushions & Bean Bags</Link> <br />
                    <Link onClick={() => { filterProduct('candlesAndHomeFragrances') }} to="">Candles & Home Fragrance</Link> <br />
                    <Link onClick={() => { filterProduct('towels') }} to=""> Towels</Link> <br />
                    <Link onClick={() => { filterProduct('picturesArtFrames') }} to="">Pictures, Art & Frames</Link> <br />
                    <Link onClick={() => { filterProduct('mirrors') }} to=""> Mirrors</Link> <br />
                    <Link onClick={() => { filterProduct('rugs') }} to=""> Rugs</Link> <br />
                    <Link onClick={() => { filterProduct('storage') }} to=""> Storage</Link> <br />
                    <Link onClick={() => { filterProduct('wallpaperPaintDIY') }} to=""> Wallpaper, Paint & DIY</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Curtains, Blinds & Floors</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('curtains') }} to="">Curtains</Link> <br />
                    <Link onClick={() => { filterProduct('madeToMeasureCurtains') }} to="">Made to Measure Curtains</Link> <br />
                    <Link onClick={() => { filterProduct('curtainPolesAccessories') }} to="">Curtain Poles & Accessories</Link> <br />
                    <Link onClick={() => { filterProduct('blinds') }} to=""> Blinds</Link> <br />
                    <Link onClick={() => { filterProduct('fabrics') }} to=""> Fabrics</Link> <br />
                    <Link onClick={() => { filterProduct('carpetsAndFlooring') }} to=""> Carpets & Flooring</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Garden</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('gardenFurnitureSets') }} to="">Garden Furniture Sets</Link> <br />
                    <Link onClick={() => { filterProduct('gardenSeating') }} to="">Garden Seating</Link> <br />
                    <Link onClick={() => { filterProduct('gasBBQs') }} to="">Gas BBQs</Link> <br />
                    <Link onClick={() => { filterProduct('pizzaOvens') }} to="">Pizza Ovens</Link> <br />
                    <Link onClick={() => { filterProduct('decorativeGardenAccessories') }} to=""> Decorative Garden Accessories</Link> <br />
                    <Link onClick={() => { filterProduct('ardenOutdoorlights') }} to=""> Outdoor Lighting</Link> <br />
                    <Link onClick={() => { filterProduct('parasolsAccessories') }} to=""> Parasols & Accessories</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <h2>Women</h2>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Clothing</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('dresses') }} to="">Dresses</Link> <br />
                    <Link onClick={() => { filterProduct('jeans') }} to="">Jeans</Link> <br />
                    <Link onClick={() => { filterProduct('shirtsTops') }} to="">Shirts & Tops</Link> <br />
                    <Link onClick={() => { filterProduct('shorts') }} to="">Shorts</Link> <br />
                    <Link onClick={() => { filterProduct('skirts') }} to="">Skirts</Link> <br />
                    <Link onClick={() => { filterProduct('sportsClothes') }} to=" ">Sports & Clothes  </Link> <br />
                    <Link onClick={() => { filterProduct('swimwearBeachwear') }} to=" ">Swimwear Beachwear  </Link> <br />
                    <Link onClick={() => { filterProduct('womenTrousers') }} to="">Trousers</Link> <br />
                    <Link onClick={() => { filterProduct('leggings') }} to="">Leggings</Link> <br />
                    <Link onClick={() => { filterProduct('plusSize') }} to="">Plus Size</Link> <br />
                    <Link onClick={() => { filterProduct('maternityClothes') }} to=" ">Maternity Clothes</Link> <br />
                    <Link onClick={() => { filterProduct('coatsJackets') }} to=" ">Coats & Jackets</Link> <br />
                    <Link onClick={() => { filterProduct('jumpersKnitwear') }} to=" ">Jumpers & Knitwear</Link> <br />
                    <Link onClick={() => { filterProduct('jumpsuits') }} to=" ">Jumpsuits</Link> <br />
                    <Link onClick={() => { filterProduct('linen') }} to="">Linen</Link> <br />
                    <Link onClick={() => { filterProduct('loungewear') }} to=" ">Loungewear</Link> <br />
                    <Link onClick={() => { filterProduct('petite') }} to=" ">Petite</Link> <br />
                    <Link onClick={() => { filterProduct('occasionwear') }} to=" ">Occasionwear</Link> <br />
                    <Link onClick={() => { filterProduct('weddingBoutique') }} to=" ">Wedding</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Footwear</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('womenShoes') }} to="">Shoes</Link> <br />
                    <Link onClick={() => { filterProduct('womenSandals') }} to="">Sandals</Link> <br />
                    <Link onClick={() => { filterProduct('womenSlippers') }} to="">Slippers</Link> <br />
                    <Link onClick={() => { filterProduct('womenTrainersAndPlimsoles') }} to="">Trainers & Plimsoles</Link> <br />
                    <Link onClick={() => { filterProduct('womenCourtShoes') }} to="">Court Shoes</Link> <br />
                    <Link onClick={() => { filterProduct('womenBoots') }} to="">Boots</Link> <br />
                    <Link onClick={() => { filterProduct('womenPumps') }} to="">Court Pumps</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Lingerie, Nightwear & Hosiery</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('brasSportsBras') }} to="">Bras & Sports Bras</Link> <br />
                    <Link onClick={() => { filterProduct('Nightwear') }} to="">Nightwear</Link> <br />
                    <Link onClick={() => { filterProduct('socks') }} to="">Socks</Link> <br />
                    <Link onClick={() => { filterProduct('Knickers') }} to="">Knickers</Link> <br />
                    <Link onClick={() => { filterProduct('tights') }} to="">Tights</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>Accessories</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('womenHandbags') }} to="">Handbags</Link> <br />
                    <Link onClick={() => { filterProduct('womenPurses') }} to="">Purses</Link> <br />
                    <Link onClick={() => { filterProduct('womenBelts') }} to="">Belts</Link> <br />
                    <Link onClick={() => { filterProduct('womenSunglasses') }} to="">Sunglasses</Link> <br />
                    <Link onClick={() => { filterProduct('womenJewellery') }} to="">Jewellery</Link> <br />
                    <Link onClick={() => { filterProduct('womenHats') }} to="">Hats</Link> <br />
                    <Link onClick={() => { filterProduct('womenWatches') }} to="">Watches</Link> <br />
                    <Link onClick={() => { filterProduct('womenHairAccessories') }} to="">Hair Accessories</Link> <br />
                    <Link onClick={() => { filterProduct('womenOccasionHatsFascinators') }} to="">Occasion Hats & Fascinators</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <h2>Men</h2>
              <Accordion.Item eventKey="10">
                <Accordion.Header>Clothing</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('blazers') }} to="">Blazers</Link> <br />
                    <Link onClick={() => { filterProduct('MenJeans') }} to="">Jeans</Link> <br />
                    <Link onClick={() => { filterProduct('poloshirts') }} to="">Polo Shirts</Link> <br />
                    <Link onClick={() => { filterProduct('menShirts') }} to="">Shirts</Link> <br />
                    <Link onClick={() => { filterProduct('menShorts') }} to="">Shorts</Link> <br />
                    <Link onClick={() => { filterProduct('menSportsClothesGym') }} to="">Sports Clothes/Gym</Link> <br />
                    <Link onClick={() => { filterProduct('suits') }} to="">Suits</Link> <br />
                    <Link onClick={() => { filterProduct('swimwear') }} to="">Swimwear</Link> <br />
                    <Link onClick={() => { filterProduct('trousers') }} to="">Trousers</Link> <br />
                    <Link onClick={() => { filterProduct('t-shirts') }} to="">T-Shirts</Link> <br />
                    <Link onClick={() => { filterProduct('waistcoats') }} to="">Waistcoats</Link> <br />
                    <Link onClick={() => { filterProduct('menCoatsJackets') }} to="">Coats & Jackets</Link> <br />
                    <Link onClick={() => { filterProduct('menSweatshirtsHoodies') }} to="">Sweatshirts & Hoodies</Link> <br />
                    <Link onClick={() => { filterProduct('menJumpersCardigans') }} to="">Jumpers & Cardigans</Link> <br />
                    <Link onClick={() => { filterProduct('menLinen') }} to="">Linen</Link> <br />
                    <Link onClick={() => { filterProduct('menLoungewear') }} to="">Loungewear</Link> <br />
                    <Link onClick={() => { filterProduct('menWeddingShop') }} to="">Wedding Shop</Link> <br />
                    <Link onClick={() => { filterProduct('menHolidaySummerShop') }} to="">Holiday & Summer Shop</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>Nightwear, Underwear & Socks</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('PyjamasNightwear') }} to="">Pyjamas & Nightwear</Link> <br />
                    <Link onClick={() => { filterProduct('robesAndDressingGowns') }} to="">Robes & Dressing Gowns</Link> <br />
                    <Link onClick={() => { filterProduct('MenSocks') }} to="">Socks</Link> <br />
                    <Link onClick={() => { filterProduct('underwear') }} to="">Underwear</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>Footwear</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('menBoots') }} to="">Boots</Link> <br />
                    <Link onClick={() => { filterProduct('menShoes') }} to="">Shoes</Link> <br />
                    <Link onClick={() => { filterProduct('menSandals') }} to="">Sandals</Link> <br />
                    <Link onClick={() => { filterProduct('menSlippers') }} to="">Slippers</Link> <br />
                    <Link onClick={() => { filterProduct('menTrainersAndPlimsoles') }} to="">Trainers</Link> <br />
                    <Link onClick={() => { filterProduct('menWalkingBootsShoes') }} to="">Walking Boots & Shoes</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>Accessories</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('menMensBags') }} to="">Men's Bags</Link> <br />
                    <Link onClick={() => { filterProduct('menBelts') }} to="">Belts</Link> <br />
                    <Link onClick={() => { filterProduct('menHats') }} to="">Hats</Link> <br />
                    <Link onClick={() => { filterProduct('menWallets') }} to="">Wallets</Link> <br />
                    <Link onClick={() => { filterProduct('menSunglasses') }} to="">Sunglasses</Link> <br />
                    <Link onClick={() => { filterProduct('menWatches') }} to="">Watches</Link> <br />
                    <Link onClick={() => { filterProduct('menJewellery') }} to="">Jewellery</Link> <br />
                    <Link onClick={() => { filterProduct('menSuitcases') }} to="">Suitcases</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <h4>Beauty</h4>
              <Accordion.Item eventKey="49">
                <Accordion.Header>Top Brands</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('theOrdinary') }} to="">The Ordinary</Link> <br />
                    <Link onClick={() => { filterProduct('CHANEL') }} to="">CHANEL</Link> <br />
                    <Link onClick={() => { filterProduct('CharlotteTilbury') }} to="">Charlotte Tilbury</Link> <br />
                    <Link onClick={() => { filterProduct('Clarins') }} to="">Clarins</Link> <br />
                    <Link onClick={() => { filterProduct('Clinique') }} to="">Clinique</Link> <br />
                    <Link onClick={() => { filterProduct('DIOR') }} to="">DIOR</Link> <br />
                    <Link onClick={() => { filterProduct('JoMaloneLondon') }} to="">Jo Malone London</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>Makeup</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('viewallMakeup') }} to="">View all Makeup</Link><br />
                    <Link onClick={() => { filterProduct('foundations') }} to="">Foundations</Link><br />
                    <Link onClick={() => { filterProduct('concealers') }} to="">Concealers</Link><br />
                    <Link onClick={() => { filterProduct('eyeshadows') }} to="">Eyeshadows</Link><br />
                    <Link onClick={() => { filterProduct('mascaras') }} to="">Mascaras</Link><br />
                    <Link onClick={() => { filterProduct('lipsticks') }} to="">Lipsticks</Link><br />
                    <Link onClick={() => { filterProduct('nailPolish') }} to="">Nail Polish</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header>Fragrance</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('womensPerfume') }} to="">Women's Perfume</Link><br />
                    <Link onClick={() => { filterProduct('perfumeGiftSets') }} to="">Perfume Gift Sets</Link><br />
                    <Link onClick={() => { filterProduct('mensAftershave') }} to="">Men's Aftershave</Link><br />
                    <Link onClick={() => { filterProduct('aftershaveGiftSets') }} to="">Aftershave Gift Sets</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header>Skin & Body Care</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('cleansers') }} to="">Cleansers</Link><br />
                    <Link onClick={() => { filterProduct('moisturisers') }} to="">Moisturisers</Link><br />
                    <Link onClick={() => { filterProduct('bathsShower') }} to="">Baths & Shower</Link><br />
                    <Link onClick={() => { filterProduct('bodyCare') }} to="">Body Care</Link><br />
                    <Link onClick={() => { filterProduct('lipBalmCare') }} to="">Lip Balm & Care</Link><br />
                    <Link onClick={() => { filterProduct('handFootCare') }} to="">Hand & Foot Care</Link><br />
                    <Link onClick={() => { filterProduct('skinCareTreatments') }} to="">Skin Care & Treatments</Link><br />
                    <Link onClick={() => { filterProduct('sunCreamAfterSun') }} to="">Sun Cream & After Sun</Link><br />
                    <Link onClick={() => { filterProduct('beautyToolsTechnology') }} to="">Beauty Tools & Technology</Link><br />
                    <Link onClick={() => { filterProduct('menGrooming') }} to="">Men's Grooming</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header>Hair Care & Styling</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('hairCare') }} to="">Hair Care</Link><br />
                    <Link onClick={() => { filterProduct('shampoo') }} to="">Shampoo</Link><br />
                    <Link onClick={() => { filterProduct('conditioner') }} to="">Conditioner</Link><br />
                    <Link onClick={() => { filterProduct('hairTreatments') }} to="">Hair Treatments</Link><br />
                    <Link onClick={() => { filterProduct('hairStylingProducts') }} to="">Hair Styling Products</Link><br />
                    <Link onClick={() => { filterProduct('hairBrushes') }} to="">Hair Brushes</Link><br />
                    <Link onClick={() => { filterProduct('electricalHairBeauty') }} to="">Electrical Hair & Beauty</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="18">
                <Accordion.Header>Inspire Me</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('Offers') }} to="">Offers</Link><br />
                    <Link onClick={() => { filterProduct('NewArrivals') }} to="">New Arrivals</Link><br />
                    <Link onClick={() => { filterProduct('VeganBeauty') }} to="">Vegan Beauty</Link><br />
                    <Link onClick={() => { filterProduct('Wellness') }} to="">Wellness</Link><br />
                    <Link onClick={() => { filterProduct('GiftSets') }} to="">Gift Sets</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <h2>Baby & Child</h2>
              <Accordion.Item eventKey="19">
                <Accordion.Header>Baby Food & Milk</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('BabyToddlerFood') }} to="">Baby & Toddler Food</Link><br />
                    <Link onClick={() => { filterProduct('BabyToddlerMilk') }} to="">Baby & Toddler Milk</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="20">
                <Accordion.Header>Baby Home & Nursery</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('sleeping') }} to="">Sleeping</Link><br />
                    <Link onClick={() => { filterProduct('bathingChanging') }} to="">Bathing & Changing</Link><br />
                    <Link onClick={() => { filterProduct('feedingWeaning') }} to="">Feeding & Weaning</Link><br />
                    <Link onClick={() => { filterProduct('nurseryFunitureFurnishings') }} to="">Nursery Funiture & Furnishings</Link><br />
                    <Link onClick={() => { filterProduct('safetyHealthcare') }} to="">Safety & Healthcare</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="21">
                <Accordion.Header>Baby Clothes (0-4 years)</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('babyToddlerclothes') }} to="">Baby & Toddler clothes</Link><br />
                    <Link onClick={() => { filterProduct('babyBoyClothes') }} to="">Baby Boy Clothes</Link><br />
                    <Link onClick={() => { filterProduct('babyGirlClothes') }} to="">Baby Girl Clothes</Link><br />
                    <Link onClick={() => { filterProduct('sleepsuitsBodysuits') }} to="">Sleepsuits & Bodysuits</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="22">
                <Accordion.Header>Kids Clothing & Shoes</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('AllGirlsclothes') }} to="">All Girls clothes</Link><br />
                    <Link onClick={() => { filterProduct('GirlsDresses') }} to="">Girls Dresses</Link><br />
                    <Link onClick={() => { filterProduct('GirlsShoes') }} to="">Girls Shoes</Link><br />
                    <Link onClick={() => { filterProduct('AllBoysClothes') }} to="">All Boys Clothes</Link><br />
                    <Link onClick={() => { filterProduct('BoysShorts') }} to="">Boys Shorts </Link><br />
                    <Link onClick={() => { filterProduct('BoysShoes') }} to="">Boys Shoes</Link><br />
                    <Link onClick={() => { filterProduct('BoysTops') }} to="">Boys Tops </Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="23">
                <Accordion.Header>Kids Travel</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('carSeats') }} to="">Car Seats</Link><br />
                    <Link onClick={() => { filterProduct('babyCarriers') }} to="">Baby Carriers</Link><br />
                    <Link onClick={() => { filterProduct('strollers') }} to="">Strollers</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="24">
                <Accordion.Header>Kids Toys & Gifts</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('Toys') }} to="">Toys</Link><br />
                    <Link onClick={() => { filterProduct('BabyPreschoolToys') }} to="">Baby & preschool Toys</Link><br />
                    <Link onClick={() => { filterProduct('KidsGamesPuzzles') }} to="">Games & Puzzles</Link><br />
                    <Link onClick={() => { filterProduct('LEGO') }} to="">LEGO</Link><br />
                    <Link onClick={() => { filterProduct('GiftsForBabiesKids') }} to="">Gifts for Babies & Kids</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <h2>Furniture & Lighting</h2>
              <Accordion.Item eventKey="25">
                <Accordion.Header>Living Room Furniture</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('sofasArmchairs') }} to="">Sofas & Armchairs</Link><br />
                    <Link onClick={() => { filterProduct('tVStands') }} to="">TV Stands</Link><br />
                    <Link onClick={() => { filterProduct('coffeeTables') }} to="">Coffee Tables</Link><br />
                    <Link onClick={() => { filterProduct('bookcasesShelving') }} to="">Bookcases & Shelving</Link><br />
                    <Link onClick={() => { filterProduct('cabinetsSideboards') }} to="">Cabinets & Sideboards</Link><br />
                    <Link onClick={() => { filterProduct('consoleTables') }} to="">Console Tables</Link><br />
                    <Link onClick={() => { filterProduct('sideTables') }} to="">Side Tables</Link><br />
                    <Link onClick={() => { filterProduct('shopLivingRoom') }} to="">Shop Living Room</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="26">
                <Accordion.Header>Bedroom Furniture</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('beds') }} to="">Beds</Link><br />
                    <Link onClick={() => { filterProduct('mattresses') }} to="">Mattresses</Link><br />
                    <Link onClick={() => { filterProduct('bedsideTables') }} to="">Bedside Tables</Link><br />
                    <Link onClick={() => { filterProduct('chestsDrawers') }} to="">Chests of Drawers</Link><br />
                    <Link onClick={() => { filterProduct('dressingTables') }} to="">Dressing Tables</Link><br />
                    <Link onClick={() => { filterProduct('wardrobes') }} to="">Wardrobes</Link><br />
                    <Link onClick={() => { filterProduct('childrenBedroom') }} to="">Children's Bedroom</Link><br />
                    <Link onClick={() => { filterProduct('shopBedroom') }} to="">Shop Bedroom</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="27">
                <Accordion.Header>Dining Room Furniture</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('DiningTables') }} to="">Dining Tables</Link><br />
                    <Link onClick={() => { filterProduct('DiningChairs') }} to="">Dining Chairs </Link><br />
                    <Link onClick={() => { filterProduct('BarChairsStools') }} to="">Bar Chairs & Stools</Link><br />
                    <Link onClick={() => { filterProduct('DiningBenches') }} to="">Dining Benches</Link><br />
                    <Link onClick={() => { filterProduct('ShopDiningRoom') }} to="">Shop Dining Room</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="28">
                <Accordion.Header>Home Office & Storage</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('OfficeDesks') }} to="">Office Desks</Link><br />
                    <Link onClick={() => { filterProduct('OfficeChairs') }} to="">Office Chairs</Link><br />
                    <Link onClick={() => { filterProduct('HomeStorage') }} to="">Home Storage</Link><br />
                    <Link onClick={() => { filterProduct('ShopHomeOffice') }} to="">Shop Home Office</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="29">
                <Accordion.Header>Lighting</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('CeilingLights') }}>Ceiling Lights</Link><br />
                    <Link to="" onClick={() => { filterProduct('DeskTableLamps') }}>Desk & Table lamps</Link><br />
                    <Link to="" onClick={() => { filterProduct('FloorLamps') }}>Floor Lamps</Link><br />
                    <Link to="" onClick={() => { filterProduct('WallLighting') }}>Wall Lighting</Link><br />
                    <Link to="" onClick={() => { filterProduct('GardenOutdoorlights') }}>Garden & Outdoor lights</Link><br />
                    <Link to="" onClick={() => { filterProduct('LightBulbs') }}>Light Bulbs</Link><br />
                    <Link to="" onClick={() => { filterProduct('LampShades') }}>Lamp Shades</Link><br />
                    <Link to="" onClick={() => { filterProduct('ShopLighting') }}>Shop Lighting</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="30">
                <Accordion.Header>Inspire Me</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('gardenDiningSets') }}>Garden Dining Sets</Link><br />
                    <Link to="" onClick={() => { filterProduct('gardenLoungeSets') }}>Garden Lounge Sets</Link><br />
                    <Link to="" onClick={() => { filterProduct('newInLighting') }}>New in: Lighting</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <h2>Electrical</h2>
              <Accordion.Item eventKey="31">
                <Accordion.Header>Television & Audio</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('Television') }} to="">Television</Link><br />
                    <Link onClick={() => { filterProduct('SoundbarsHomeCinema') }} to="">Soundbars & Home Cinema</Link><br />
                    <Link onClick={() => { filterProduct('TVStandsWallMounts') }} to="">TV Stands & Wall Mounts</Link><br />
                    <Link onClick={() => { filterProduct('TVStreamingDevices') }} to="">TV Streaming Devices</Link><br />
                    <Link onClick={() => { filterProduct('SpeakersSoundSystems') }} to="">Speakers & Sound Systems</Link><br />
                    <Link onClick={() => { filterProduct('Headphones') }} to="">Headphones</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="32">
                <Accordion.Header>Computing & Gaming</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('IpadsTablets') }} to="">Ipads & Tablets</Link><br />
                    <Link onClick={() => { filterProduct('LaptopsMacBooks') }} to="">Laptops & MacBooks </Link><br />
                    <Link onClick={() => { filterProduct('PCsDesktopComputers') }} to="">PCs & Desktop Computers</Link><br />
                    <Link onClick={() => { filterProduct('MonitorsProjectors') }} to="">Monitors & Projectors</Link><br />
                    <Link onClick={() => { filterProduct('PrintersAccessories') }} to="">Printers & Accessories</Link><br />
                    <Link onClick={() => { filterProduct('Gaming') }} to="">Gaming</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="33">
                <Accordion.Header>Home Appliances</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('WashingMachines') }} to="">Washing Machines</Link><br />
                    <Link onClick={() => { filterProduct('FridgeFreezers') }} to="">Fridge Freezers</Link><br />
                    <Link onClick={() => { filterProduct('Dishwashers') }} to="">Dishwashers</Link><br />
                    <Link onClick={() => { filterProduct('CookersOvens') }} to="">Cookers & Ovens</Link><br />
                    <Link onClick={() => { filterProduct('Microwaves') }} to="">Microwaves</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="34">
                <Accordion.Header>Kitchen Appliances & Vacuums</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('CoffeeMachines') }} to="">Coffee Machines</Link><br />
                    <Link onClick={() => { filterProduct('Kettles') }} to="">Kettles</Link><br />
                    <Link onClick={() => { filterProduct('Toasters') }} to="">Toasters</Link><br />
                    <Link onClick={() => { filterProduct('VacuumCleaners') }} to="">Vacuum Cleaners</Link><br />
                    <Link onClick={() => { filterProduct('FansCoolingPurifiers') }} to="">Fans, Cooling & Purifiers</Link><br />
                    <Link onClick={() => { filterProduct('Ironing') }} to="">Ironing</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="35">
                <Accordion.Header>Mobile, Cameras & Smart Tech</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('MobilePhonesAccessories') }} to="">Mobile Phones & Accessories</Link><br />
                    <Link onClick={() => { filterProduct('CamerasCamcorders') }} to="">Cameras & Camcorders</Link><br />
                    <Link onClick={() => { filterProduct('SmartFitnessWatches') }} to="">Smart & Fitness Watches</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <h2>Sports & Leisure</h2>
              <Accordion.Item eventKey="36">
                <Accordion.Header>Sportswear</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('WomensClothing') }}>Women's Clothing</Link><br />
                    <Link to="" onClick={() => { filterProduct('WomenSportsTrainers') }}>Women's Sports Trainers</Link><br />
                    <Link to="" onClick={() => { filterProduct('MenClothing') }}>Men's Clothing</Link><br />
                    <Link to="" onClick={() => { filterProduct('MenSportsTrainers') }}>Men's Sports Trainers</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="37">
                <Accordion.Header>Fitness</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('FitnessMachinesTechnology') }}>Fitness Machines & Technology</Link><br />
                    <Link to="" onClick={() => { filterProduct('SportsEquipment') }}>Sports Equipment</Link><br />
                    <Link to="" onClick={() => { filterProduct('Treadmills') }}>Treadmills</Link><br />
                    <Link to="" onClick={() => { filterProduct('ExerciseBikes') }}>Exercise Bikes</Link><br />
                    <Link to="" onClick={() => { filterProduct('CrossTrainers') }}>Cross Trainers</Link><br />
                    <Link to="" onClick={() => { filterProduct('Weights') }}>Weights</Link><br />
                    <Link to="" onClick={() => { filterProduct('Smartwatches') }}>Smartwatches</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="38">
                <Accordion.Header>Equipment by Sport</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('Cycling') }} to="">Cycling </Link><br />
                    <Link onClick={() => { filterProduct('GymTrainingFitness') }} to=" ">Gym, Training & Fitness </Link><br />
                    <Link onClick={() => { filterProduct('Running') }} to="">Running </Link><br />
                    <Link onClick={() => { filterProduct('Swimming') }} to="">Swimming </Link><br />
                    <Link onClick={() => { filterProduct('Yoga') }} to="">Yoga </Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="39">
                <Accordion.Header>Sports Brands</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('ExploreOurBrands') }}>Explore our Brands</Link><br />
                    <Link to="" onClick={() => { filterProduct('Adidas') }}>Adidas</Link><br />
                    <Link to="" onClick={() => { filterProduct('SweatyBetty') }}>Sweaty Betty</Link><br />
                    <Link to="" onClick={() => { filterProduct('TheNorthFace') }}>The North Face</Link><br />
                    <Link to="" onClick={() => { filterProduct('Therabody') }}>Therabody</Link><br />
                    <Link to="" onClick={() => { filterProduct('UnderArmour') }}>Under Armour</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="40">
                <Accordion.Header>Hobbies & Crafts</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('Haberdashery') }}>Haberdashery</Link> <br />
                    <Link to="" onClick={() => { filterProduct('GamesPuzzles') }}>Games & Puzzles</Link> <br />
                    <Link to="" onClick={() => { filterProduct('Crafts') }}>Crafts</Link> <br />
                    <Link to="" onClick={() => { filterProduct('Stationery') }}>Stationery</Link> <br />
                    <Link to="" onClick={() => { filterProduct('Books') }}>Books</Link> <br />
                    <Link to="" onClick={() => { filterProduct('SewingMachines') }}>Sewing Machines</Link> <br />
                    <Link to="" onClick={() => { filterProduct('WoolYarn') }}>Wool & Yarn</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="41">
                <Accordion.Header>Travel & Luggage</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('ViewAllLuggage') }}>View All Luggage</Link><br />
                    <Link to="" onClick={() => { filterProduct('Backpacks') }}>Backpacks</Link><br />
                    <Link to="" onClick={() => { filterProduct('CabinCases') }}>Cabin Cases</Link><br />
                    <Link to="" onClick={() => { filterProduct('Suitcases') }}>Suitcases</Link><br />
                    <Link to="" onClick={() => { filterProduct('HoldallsWeekendBags') }}>Holdalls & Weekend Bags</Link><br />
                    <Link to="" onClick={() => { filterProduct('Camping') }}>Camping</Link><br />
                    <Link to="" onClick={() => { filterProduct('HolidaySummerShop') }}>Holiday & Summer Shop</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <h2>Gift</h2>
              <Accordion.Item eventKey="42">
                <Accordion.Header>Gifts By Recipient</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('GiftsForHer') }}>Gifts for Her</Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftsForHim') }}>Gifts for Him</Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftsForKids') }}>Gifts for Kids</Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftsForCouples') }}>Gifts for Couples</Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftsForBabies') }}>Gifts for Babies</Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftsForTeenagers') }}>Gifts for Teenagers</Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftsForPets') }}>Gifts for Pets</Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftsForGrandparents') }}>Gifts for Grandparents</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="43">
                <Accordion.Header>Gifts by Price</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('GiftsUnder20') }}>Gifts under $20</Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftsUnder50') }}>Gifts under $50</Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftsUnder100') }}>Gifts under $100</Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftCardsEGiftCards') }}>Gift Cards & E-Gift Cards</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="44">
                <Accordion.Header>Shop by Occasion</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('Birthday') }}>Birthday</Link><br />
                    <Link to="" onClick={() => { filterProduct('Wedding') }}>Wedding</Link><br />
                    <Link to="" onClick={() => { filterProduct('NewHome') }}>New Home</Link><br />
                    <Link to="" onClick={() => { filterProduct('Anniversary') }}>Anniversary</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="45">
                <Accordion.Header>Food & Drink Gifts</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('ViewAllGiftFoodDrink') }}>View All Gift Food & Drink</Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftsForGinLovers') }}>Gifts for Gin Lovers</Link><br />
                    <Link to="" onClick={() => { filterProduct('CakesBiscuits') }}>Cakes & Biscuits</Link><br />
                    <Link to="" onClick={() => { filterProduct('SweetsFudge') }}>Sweets & Fudge</Link><br />
                    <Link to="" onClick={() => { filterProduct('Hampers') }}>Hampers</Link><br />
                    <Link to="" onClick={() => { filterProduct('Chocolate') }}>Chocolate</Link><br />
                    <Link to="" onClick={() => { filterProduct('Alcohol') }}>Alcohol</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="46">
                <Accordion.Header>Popular Gifts</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link to="" onClick={() => { filterProduct('BeautyFragranceGifts') }}>Beauty & Fragrance Gifts</Link><br />
                    <Link to="" onClick={() => { filterProduct('GamesAndPuzzles') }}>Games and Puzzles</Link><br />
                    <Link to="" onClick={() => { filterProduct('CandlesHomeFragrance') }}>Candles & Home Fragrance</Link><br />
                    <Link to="" onClick={() => { filterProduct('CookingBaking') }}>Cooking & Baking </Link><br />
                    <Link to="" onClick={() => { filterProduct('Gardening') }}>Gardening </Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftWrapPartyShop') }}>Gift Wrap & Party Shop</Link><br />
                    <Link to="" onClick={() => { filterProduct('GiftStationery') }}>Stationery</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="47">
                <Accordion.Header>Gift Inspiration</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('LuxuryGifts') }} to="">Luxury Gifts</Link> <br />
                    <Link onClick={() => { filterProduct('Techies') }} to="">Techies</Link> <br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <h2>Brand</h2>
              <Accordion.Item eventKey="48">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>
                  <div className="filterItem">
                    <Link onClick={() => { filterProduct('aptamil') }} to="">Aptamil</Link><br />
                    <Link onClick={() => { filterProduct('babyClub') }} to="">Baby Club</Link><br />
                    <Link onClick={() => { filterProduct('britax') }} to="">Britax</Link><br />
                    <Link onClick={() => { filterProduct('fitFlop') }} to="">Fit Flop</Link><br />
                    <Link onClick={() => { filterProduct('gucci') }} to="">Gucci</Link><br />
                    <Link onClick={() => { filterProduct('hipp') }} to="">Hipp</Link><br />
                    <Link onClick={() => { filterProduct('jole') }} to="">Jole</Link><br />
                    <Link onClick={() => { filterProduct('levis') }} to="">Levis</Link><br />
                    <Link onClick={() => { filterProduct('maxiCosi') }} to="">Maxi Cosi</Link><br />
                    <Link onClick={() => { filterProduct('phaseEight') }} to="">Phase Eight</Link><br />
                    <Link onClick={() => { filterProduct('tedBaker') }} to="">Ted Baker</Link><br />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={8}>
            <h2>Total Product: {products.length}</h2>
            {loading ? <div className='text-center' style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="info" />
            </div> :
              filter.map(product => <div key={product._id}
                product={product}>
                <Container>
                  <Row style={{

                    borderBottom: '1px solid rgb(159 159 159)',
                    margin: '10px 0'
                  }}>
                    <Col xs={6} md={2}>
                      {/* <img src={`data:image/jpg;base64,${product.img}`} alt="" width="100px" height="100px" /> */}
                      <img src={product.img} alt="" width="100px" height="100px" />
                    </Col>
                    <Col xs={6} md={4} style={{
                      textAlign: 'start'
                    }}>
                      <Link to={`/details/${product._id}`}>
                        <h5>{product.title}</h5>
                      </Link>
                      <p>Product Code: {product._id}</p>
                      <p>Product Price: {product.price}</p>
                      <p>Category: {product.category}</p>
                    </Col>
                    <Col xs={6} md={2}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                      </div>
                    </Col>
                    <Col xs={6} md={2}>

                    </Col>
                    <Col xs={6} md={2}>

                      <i className="fa-solid fa-xmark"></i>
                      <p>
                        <svg style={{
                          color: 'red',
                          cursor: 'pointer'
                        }} onClick={() => handleDelete(product._id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="30px"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
                      </p>
                      <UpdatePrice
                        product={product}
                      ></UpdatePrice>
                      <UpdateTitle
                        product={product}
                      ></UpdateTitle>
                    </Col>
                  </Row>
                </Container>
              </div>)
            }
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default ManageProducts;
