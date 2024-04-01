import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import PillowCases from './Component/Product/HomeGarden/Bedding/PillowCases/PillowCases';
import BedSheets from './Component/Product/HomeGarden/Bedding/BedSheets/BedSheets';
import Pillows from './Component/Product/HomeGarden/Bedding/Pillows/Pillows';
import ThrowsblanketsandSpreads from './Component/Product/HomeGarden/Bedding/ThrowsblanketsandSpreads/ThrowsblanketsandSpreads';
import Towels from './Component/Product/HomeGarden/HomeDecorAccessories/Towels/Towels';

import Cushions from './Component/Product/HomeGarden/HomeDecorAccessories/Cushions/Cushions';
import CandlesandHomeFragrances from './Component/Product/HomeGarden/HomeDecorAccessories/CandlesandHomeFragrances/CandlesandHomeFragrances';
import GlassesDrinkware from './Component/Product/HomeGarden/CookingDining/GlassesDrinkware/GlassesDrinkware';
import PotsPans from './Component/Product/HomeGarden/CookingDining/PotsPans/PotsPans';
import Dresses from './Component/Product/Women/Clothing/Dresses/Dresses';
import Jeans from './Component/Product/Women/Clothing/Jeans/Jeans';
import ShirtsTops from './Component/Product/Women/Clothing/ShirtsTops/ShirtsTops';
import Shorts from './Component/Product/Women/Clothing/Shorts/Shorts';
import Skirts from './Component/Product/Women/Clothing/Skirts/Skirts';
import BrasSportsBras from './Component/Product/Women/LingerieNightwearHosiery/BrasSportsBras/BrasSportsBras';
import Nightwear from './Component/Product/Women/LingerieNightwearHosiery/Nightwear/Nightwear';
import Socks from './Component/Product/Women/LingerieNightwearHosiery/Socks/Socks';
import Tights from './Component/Product/Women/LingerieNightwearHosiery/Tights/Tights';
import Blazers from './Component/Product/Men/Clothing/Blazers/Blazers';
import MenJeans from './Component/Product/Men/Clothing/MenJeans/MenJeans';
import PoloShirts from './Component/Product/Men/Clothing/PoloShirts/PoloShirts';
import MenShirts from './Component/Product/Men/Clothing/MenShirts/MenShirts';
import MenShorts from './Component/Product/Men/Clothing/MenShorts/MenShorts';
import MenSportsClothesGym from './Component/Product/Men/Clothing/SportsClothes/Gym/MenSportsClothesGym';
import Suits from './Component/Product/Men/Clothing/Suits/Suits';
import Swimwear from './Component/Product/Men/Clothing/Swimwear/Swimwear';
import Trousers from './Component/Product/Men/Clothing/Trousers/Trousers';
import PyjamasNightwear from './Component/Product/Men/NightwearUnderwearSocks/PyjamasNightwear/PyjamasNightwear';
import MenSocks from './Component/Product/Men/NightwearUnderwearSocks/MenSocks/MenSocks';
import Underwear from './Component/Product/Men/NightwearUnderwearSocks/Underwear/Underwear';
import Foundations from './Component/Product/Beauty/Makeup/Foundations/Foundations';
import Concealers from './Component/Product/Beauty/Makeup/Concealers/Concealers';
import Eyeshadows from './Component/Product/Beauty/Makeup/Eyeshadows/Eyeshadows';
import Mascaras from './Component/Product/Beauty/Makeup/Mascaras/Mascaras';
import Lipsticks from './Component/Product/Beauty/Makeup/Lipsticks/Lipsticks';
import NailPolish from './Component/Product/Beauty/Makeup/NailPolish/NailPolish';
import TShirts from './Component/Product/Men/Clothing/TShirts/TShirts';
import Waistcoats from './Component/Product/Men/Clothing/Waistcoats/Waistcoats';
import WomensPerfume from './Component/Product/Beauty/Fragrance/WomensPerfume/WomensPerfume';
import PerfumeGiftSets from './Component/Product/Beauty/Fragrance/PerfumeGiftSets/PerfumeGiftSets';
import MensAftershave from './Component/Product/Beauty/Fragrance/MensAftershave/MensAftershave';
import AftershaveGiftSets from './Component/Product/Beauty/Fragrance/AftershaveGiftSets/AftershaveGiftSets';
import LoginForm from './Component/LoginForm/LoginForm';
import Login from './Component/LoginForm/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import YourAccount from './Component/Header/YourAccount/YourAccount';
import AddProduct from './Component/Header/YourAccount/Admin/AddProduct/AddProduct';
import PlaceOrder from './Component/Header/HeaderTop/PlaceOrder/PlaceOrder';
import ChangePass from './Component/Header/YourAccount/ChangePass/ChangePass';
import ForgotPass from './Component/LoginForm/forgotPass/forgotPass';
import AddressBook from './Component/Header/YourAccount/AddressBook/AddressBook';
import MyDetails from './Component/Header/YourAccount/MyDetails/MyDetails';
import MyFiles from './Component/Header/YourAccount/MyFiles/MyFiles';
import SearchResult from './Component/Header/SearchBox/SearchResult/SearchResult';
import OrderHistory from './Component/Header/YourAccount/OrderHistory/OrderHistory';
import UpdateDetails from './Component/Header/YourAccount/MyDetails/UpdateDetails/UpdateDetails';
import AddDetails from './Component/Header/YourAccount/MyDetails/AddDetails/AddDetails';
import PaymentOptionDetails from './Component/PaymentOption/PaymentOptionDetails';
import Aptamil from './Component/Product/Brand/Aptamil/Aptamil';
import BabyClub from './Component/Product/Brand/Baby-Club/BabyClub';
import Britax from './Component/Product/Brand/Britax/Britax';
import FitFlop from './Component/Product/Brand/Fitflop/FitFlop';
import Gucci from './Component/Product/Brand/Gucci/Gucci';
import Hipp from './Component/Product/Brand/Hipp/Hipp';
import Jole from './Component/Product/Brand/Jole/Jole';
import Levis from './Component/Product/Brand/Levis/Levis';
import MaxiCosi from './Component/Product/Brand/Maxi-Cosi/MaxiCosi';
import PhaseEight from './Component/Product/Brand/Phase-Eight/PhaseEight';
import TedBaker from './Component/Product/Brand/TedBaker/TedBaker';
import BathsShower from './Component/Product/Beauty/SkinBodyCare/BathsShower/BathsShower';
import Cleansers from './Component/Product/Beauty/SkinBodyCare/Cleansers/Cleansers';
import Moisturisers from './Component/Product/Beauty/SkinBodyCare/Moisturisers/Moisturisers';
import BodyCare from './Component/Product/Beauty/SkinBodyCare/BodyCare/BodyCare';
import LipBalmCare from './Component/Product/Beauty/SkinBodyCare/LipBalmCare/LipBalmCare';
import HandFootCare from './Component/Product/Beauty/SkinBodyCare/HandFootCare/HandFootCare';
import HairCare from './Component/Product/Beauty/HairCare&Styling/HairCare/HairCare';
import Shampoo from './Component/Product/Beauty/HairCare&Styling/Shampoo/Shampoo';
import Conditioner from './Component/Product/Beauty/HairCare&Styling/Conditioner/Conditioner';
import HairTreatments from './Component/Product/Beauty/HairCare&Styling/Hair Treatments/HairTreatments';
import HairStylingProducts from './Component/Product/Beauty/HairCare&Styling/HairStylingProducts/HairStylingProducts';
import HairBrushes from './Component/Product/Beauty/HairCare&Styling/HairBrushes/HairBrushes';
import ElectricalHairBeauty from './Component/Product/Beauty/HairCare&Styling/ElectricalHairBeauty/ElectricalHairBeauty';
import MakeAdmin from './Component/Header/YourAccount/Admin/MakeAdmin/MakeAdmin';
import AllOrderHistory from './Component/Header/YourAccount/Admin/AllOrderHistory/AllOrderHistory';
import Beds from './Component/Product/FurnitureLighting/BedroomFurniture/Beds/Beds';
import ChildrenBedroom from './Component/Product/FurnitureLighting/BedroomFurniture/ChildrenBedroom/ChildrenBedroom';
import Wardrobes from './Component/Product/FurnitureLighting/BedroomFurniture/Wardrobes/Wardrobes';
import DressingTables from './Component/Product/FurnitureLighting/BedroomFurniture/DressingTables/DressingTables';
import ChestsDrawers from './Component/Product/FurnitureLighting/BedroomFurniture/ChestsDrawers/ChestsDrawers';
import BedsideTables from './Component/Product/FurnitureLighting/BedroomFurniture/BedsideTables/BedsideTables';
import Mattresses from './Component/Product/FurnitureLighting/BedroomFurniture/Mattresses/Mattresses';
import SofasArmchairs from './Component/Product/FurnitureLighting/LivingRoomFurniture/SofasArmchairs/SofasArmchairs';
import TVStands from './Component/Product/FurnitureLighting/LivingRoomFurniture/TVStands/TVStands';
import CoffeeTables from './Component/Product/FurnitureLighting/LivingRoomFurniture/CoffeeTables/CoffeeTables';
import BookcasesShelving from './Component/Product/FurnitureLighting/LivingRoomFurniture/BookcasesShelving/BookcasesShelving';
import CabinetsSideboards from './Component/Product/FurnitureLighting/LivingRoomFurniture/CabinetsSideboards/CabinetsSideboards';
import AdminRoute from './Component/Header/YourAccount/Admin/AdminRoute/AdminRoute';
import PrivateRoute from './Component/Header/YourAccount/Admin/PrivateRoute/PrivateRoute';
import BarChairsStools from './Component/Product/FurnitureLighting/DiningRoomFurniture/BarChairsStools/BarChairsStools';
import DiningTables from './Component/Product/FurnitureLighting/DiningRoomFurniture/DiningTables/DiningTables';
import DiningChairs from './Component/Product/FurnitureLighting/DiningRoomFurniture/DiningChairs/DiningChairs';
import CeilingLights from './Component/Product/FurnitureLighting/Lighting/CeilingLights/CeilingLights';
import DeskTablelamps from './Component/Product/FurnitureLighting/Lighting/DeskTablelamps/DeskTablelamps';
import FloorLamps from './Component/Product/FurnitureLighting/Lighting/FloorLamps/FloorLamps';
import WallLighting from './Component/Product/FurnitureLighting/Lighting/WallLighting/WallLighting';
import GardenOutdoorlights from './Component/Product/FurnitureLighting/Lighting/GardenOutdoorlights/GardenOutdoorlights';
import LightBulbs from './Component/Product/FurnitureLighting/Lighting/LightBulbs/LightBulbs';
import OfficeDesks from './Component/Product/FurnitureLighting/HomeOfficeStorage/OfficeDesks/OfficeDesks';
import OfficeChairs from './Component/Product/FurnitureLighting/HomeOfficeStorage/OfficeChairs/OfficeChairs';
import HomeStorage from './Component/Product/FurnitureLighting/HomeOfficeStorage/HomeStorage/HomeStorage';


import Television from './Component/Product/Electricals/TelevisionAudio/Television/Television';
import SoundbarsHomeCinema from './Component/Product/Electricals/TelevisionAudio/SoundbarsHomeCinema/SoundbarsHomeCinema';
import TVStandsWallMounts from './Component/Product/Electricals/TelevisionAudio/TVStandsWallMounts/TVStandsWallMounts';
import TVStreamingDevices from './Component/Product/Electricals/TelevisionAudio/TVStreamingDevices/TVStreamingDevices';
import SpeakersSoundSystems from './Component/Product/Electricals/TelevisionAudio/SpeakersSoundSystems/SpeakersSoundSystems';
import Headphones from './Component/Product/Electricals/TelevisionAudio/Headphones/Headphones';
import IpadsTablets from './Component/Product/Electricals/ComputingGaming/IpadsTablets/IpadsTablets';
import LaptopsMacBooks from './Component/Product/Electricals/ComputingGaming/LaptopsMacBooks/LaptopsMacBooks';
import PCsDesktopComputers from './Component/Product/Electricals/ComputingGaming/PCsDesktopComputers/PCsDesktopComputers';
import MonitorsProjectors from './Component/Product/Electricals/ComputingGaming/MonitorsProjectors/MonitorsProjectors';
import PrintersAccessories from './Component/Product/Electricals/ComputingGaming/PrintersAccessories/PrintersAccessories';
import Gaming from './Component/Product/Electricals/ComputingGaming/Gaming/Gaming';
import WashingMachines from './Component/Product/Electricals/HomeAppliances/WashingMachines/WashingMachines';
import FridgeFreezers from './Component/Product/Electricals/HomeAppliances/FridgeFreezers/FridgeFreezers';
import Dishwashers from './Component/Product/Electricals/HomeAppliances/Dishwashers/Dishwashers';
import CookersOvens from './Component/Product/Electricals/HomeAppliances/CookersOvens/CookersOvens';
import Microwaves from './Component/Product/Electricals/HomeAppliances/Microwaves/Microwaves';
import CoffeeMachines from './Component/Product/Electricals/KitchenAppliancesVacuums/CoffeeMachines/CoffeeMachines';
import Kettles from './Component/Product/Electricals/KitchenAppliancesVacuums/Kettles/Kettles';
import Toasters from './Component/Product/Electricals/KitchenAppliancesVacuums/Toasters/Toasters';
import VacuumCleaners from './Component/Product/Electricals/KitchenAppliancesVacuums/VacuumCleaners/VacuumCleaners';
import FansCoolingPurifiers from './Component/Product/Electricals/KitchenAppliancesVacuums/FansCoolingPurifiers/FansCoolingPurifiers';
import Ironing from './Component/Product/Electricals/KitchenAppliancesVacuums/Ironing/Ironing';
import MobilePhonesAccessories from './Component/Product/Electricals/MobileCamerasSmartTech/MobilePhonesAccessories/MobilePhonesAccessories';
import CamerasCamcorders from './Component/Product/Electricals/MobileCamerasSmartTech/CamerasCamcorders/CamerasCamcorders';
import SmartFitnessWatches from './Component/Product/Electricals/MobileCamerasSmartTech/SmartFitnessWatches/SmartFitnessWatches';
import ManageProducts from './Component/Header/YourAccount/Admin/ManageProducts/ManageProducts';
import HomeAndGarden from './Component/Product/HomeGarden/HomeAndGarden';
import Women from './Component/Product/Women/Women';
import Men from './Component/Product/Men/Men';
import Beauty from './Component/Product/Beauty/Beauty';
import FurnitureAndLighting from './Component/Product/FurnitureLighting/FurnitureAndLighting';
import Electricals from './Component/Product/Electricals/Electricals';
import Gifts from './Component/Product/Gifts/Gifts';
import Mirrors from './Component/Product/HomeGarden/HomeDecorAccessories/Mirrors/Mirrors';
import Rugs from './Component/Product/HomeGarden/HomeDecorAccessories/Rugs/Rugs';
import Storage from './Component/Product/HomeGarden/HomeDecorAccessories/Storage/Storage';
import Blinds from './Component/Product/HomeGarden/CurtainsBlindsFloors/Blinds/Blinds';
import CarpetsAndFlooring from './Component/Product/HomeGarden/CurtainsBlindsFloors/CarpetsAndFlooring/CarpetsAndFlooring';
import Curtains from './Component/Product/HomeGarden/CurtainsBlindsFloors/Curtains/Curtains';
import MadeToMeasurecurtains from './Component/Product/HomeGarden/CurtainsBlindsFloors/MadeToMeasurecurtains/MadeToMeasurecurtains';
import GardenFurnitureSets from './Component/Product/HomeGarden/Garden/GardenFurnitureSets/GardenFurnitureSets';
import GardenSeating from './Component/Product/HomeGarden/Garden/GardenSeating/GardenSeating';
import SportsClothes from './Component/Product/Women/Clothing/SportsClothes/SportsClothes';
import SwimwearBeachwear from './Component/Product/Women/Clothing/SwimwearBeachwear/SwimwearBeachwear';
import Leggings from './Component/Product/Women/Clothing/Leggings/Leggings';
import PlusSize from './Component/Product/Women/Clothing/PlusSize/PlusSize';
import MaternityClothes from './Component/Product/Women/Clothing/MaternityClothes/MaternityClothes';
import WomenTrousers from './Component/Product/Women/Clothing/WomenTrousers/WomenTrousers';
import WomenShoes from './Component/Product/Women/Footwear/WomenShoes/WomenShoes';
import WomenSandals from './Component/Product/Women/Footwear/WomenSandals/WomenSandals';
import WomenSlippers from './Component/Product/Women/Footwear/WomenSlippers/WomenSlippers';
import WomenTrainersAndPlimsoles from './Component/Product/Women/Footwear/WomenTrainersAndPlimsoles/WomenTrainersAndPlimsoles';
import WomenCourtShoes from './Component/Product/Women/Footwear/WomenCourtShoes/WomenCourtShoes';
import Knickers from './Component/Product/Women/LingerieNightwearHosiery/Knickers/Knickers';
import WomenHandbags from './Component/Product/Women/Accessories/WomenHandbags/WomenHandbags';
import WomenPurses from './Component/Product/Women/Accessories/WomenPurses/WomenPurses';
import WomenBelts from './Component/Product/Women/Accessories/WomenBelts/WomenBelts';
import WomenSunglasses from './Component/Product/Women/Accessories/WomenSunglasses/WomenSunglasses';
import WomenJewellery from './Component/Product/Women/Accessories/WomenJewellery/WomenJewellery';
import WomenHats from './Component/Product/Women/Accessories/WomenHats/WomenHats';
import WomenWatches from './Component/Product/Women/Accessories/WomenWatches/WomenWatches';
import WomenHairAccessories from './Component/Product/Women/Accessories/WomenHairAccessories/WomenHairAccessories';
import RobesAndDressingGowns from './Component/Product/Men/NightwearUnderwearSocks/RobesAndDressingGowns/RobesAndDressingGowns';
import MenShoes from './Component/Product/Men/Footwear/MenShoes/MenShoes';
import MenSandals from './Component/Product/Men/Footwear/MenSandals/MenSandals';
import MenSlippers from './Component/Product/Men/Footwear/MenSlippers/MenSlippers';
import MenTrainersAndPlimsoles from './Component/Product/Men/Footwear/MenTrainersAndPlimsoles/MenTrainersAndPlimsoles';
import MenBelts from './Component/Product/Men/Accessories/MenBelts/MenBelts';
import MenHats from './Component/Product/Men/Accessories/MenHats/MenHats';
import MenWallets from './Component/Product/Men/Accessories/MenWallets/MenWallets';
import MenSunglasses from './Component/Product/Men/Accessories/MenSunglasses/MenSunglasses';
import MenWatches from './Component/Product/Men/Accessories/MenWatches/MenWatches';
import ChildrensBedding from './Component/Product/HomeGarden/Bedding/ChildrensBedding/ChildrensBedding';
import Cart from './Component/Header/HeaderTop/Cart/Cart';
import ProceedToPayment from './Component/Header/HeaderTop/Cart/ProceedToPayment/ProceedToPayment';
import ConfirmPayment from './Component/Header/HeaderTop/Cart/ProceedToPayment/ConfirmPayment/ConfirmPayment';
import WishLists from './Component/Header/HeaderTop/WishLists/WishLists';


import ShopBedding from './Component/Product/HomeGarden/Bedding/ShopBedding/ShopBedding';
import Duvets from './Component/Product/HomeGarden/Bedding/Duvets/Duvets';
import DuvetCovers from './Component/Product/HomeGarden/Bedding/DuvetCovers/DuvetCovers';
import KitchenBins from './Component/Product/HomeGarden/CookingDining/KitchenBins/KitchenBins';
import KitchenUtensilsGadgets from './Component/Product/HomeGarden/CookingDining/KitchenUtensilsGadgets/KitchenUtensilsGadgets';
import Picnicware from './Component/Product/HomeGarden/CookingDining/Picnicware/Picnicware';
import FoodPreparation from './Component/Product/HomeGarden/CookingDining/FoodPreparation/FoodPreparation';
import CookwareBakeware from './Component/Product/HomeGarden/CookingDining/CookwareBakeware/CookwareBakeware';
import HomeAccessories from './Component/Product/HomeGarden/HomeDecorAccessories/HomeAccessories/HomeAccessories';
import WallpaperPaintDIY from './Component/Product/HomeGarden/HomeDecorAccessories/WallpaperPaintDIY/WallpaperPaintDIY';
import PicturesArtFrames from './Component/Product/HomeGarden/HomeDecorAccessories/PicturesArtFrames/PicturesArtFrames';
import CurtainPolesAccessories from './Component/Product/HomeGarden/CurtainsBlindsFloors/CurtainPolesAccessories/CurtainPolesAccessories';
import Fabrics from './Component/Product/HomeGarden/CurtainsBlindsFloors/Fabrics/Fabrics';
import GasBBQs from './Component/Product/HomeGarden/Garden/GasBBQs/GasBBQs';
import PizzaOvens from './Component/Product/HomeGarden/Garden/PizzaOvens/PizzaOvens';
import DecorativeGardenAccessories from './Component/Product/HomeGarden/Garden/DecorativeGardenAccessories/DecorativeGardenAccessories';
import ParasolsAccessories from './Component/Product/HomeGarden/Garden/ParasolsAccessories/ParasolsAccessories';
import ShopGarden from './Component/Product/HomeGarden/Garden/ShopGarden/ShopGarden';
import CoatsJackets from './Component/Product/Women/Clothing/CoatsJackets/CoatsJackets';
import JumpersKnitwear from './Component/Product/Women/Clothing/JumpersKnitwear/JumpersKnitwear';
import Jumpsuits from './Component/Product/Women/Clothing/Jumpsuits/Jumpsuits';
import Linen from './Component/Product/Women/Clothing/Linen/Linen';
import Loungewear from './Component/Product/Women/Clothing/Loungewear/Loungewear';
import Petite from './Component/Product/Women/Clothing/Petite/Petite';
import Occasionwear from './Component/Product/Women/Clothing/Occasionwear/Occasionwear';
import WeddingBoutique from './Component/Product/Women/Clothing/WeddingBoutique/WeddingBoutique';
import WomenBoots from './Component/Product/Women/Footwear/WomenBoots/WomenBoots';
import WomenPumps from './Component/Product/Women/Footwear/WomenPumps/WomenPumps';
import WomenOccasionHatsFascinators from './Component/Product/Women/Accessories/WomenOccasionHatsFascinators/WomenOccasionHatsFascinators';
import MenCashmere from './Component/Product/Men/Clothing/MenCashmere/MenCashmere';
import MenCoatsJackets from './Component/Product/Men/Clothing/MenCoatsJackets/MenCoatsJackets';
import MenSweatshirtsHoodies from './Component/Product/Men/Clothing/MenSweatshirtsHoodies/MenSweatshirtsHoodies';
import MenJumpersCardigans from './Component/Product/Men/Clothing/MenJumpersCardigans/MenJumpersCardigans';
import MenLinen from './Component/Product/Men/Clothing/MenLinen/MenLinen';
import MenLoungewear from './Component/Product/Men/Clothing/MenLoungewear/MenLoungewear';
import MenWeddingShop from './Component/Product/Men/Clothing/MenWeddingShop/MenWeddingShop';
import MenHolidaySummerShop from './Component/Product/Men/Clothing/MenHolidaySummerShop/MenHolidaySummerShop';
import MenBoots from './Component/Product/Men/Footwear/MenBoots/MenBoots';
import MenWalkingBootsShoes from './Component/Product/Men/Footwear/MenWalkingBootsShoes/MenWalkingBootsShoes';
import MenJewellery from './Component/Product/Men/Accessories/MenJewellery/MenJewellery';
import MenSuitcases from './Component/Product/Men/Accessories/MenSuitcases/MenSuitcases';
import SkinCareTreatments from './Component/Product/Beauty/SkinBodyCare/SkinCareTreatments/SkinCareTreatments';
import SunCreamAfterSun from './Component/Product/Beauty/SkinBodyCare/SunCreamAfterSun/SunCreamAfterSun';
import MenGrooming from './Component/Product/Beauty/SkinBodyCare/MenGrooming/MenGrooming';

// BABY AND CHILD

import BabyToddlerFood from './Component/Product/Baby&child/BabyFoodMilk/BabyFoodFood/BabyFoodFood';
import BabyToddlerMilk from './Component/Product/Baby&child/BabyFoodMilk/BabyToddlerMilk/BabyToddlerMilk';

// Baby Home & Nursery

import Sleeping from './Component/Product/Baby&child/BabyHomeNursery/Sleeping/Sleeping';
import BathingChanging from './Component/Product/Baby&child/BabyHomeNursery/BathingChanging/BathingChanging';
import FeedingWeaning from './Component/Product/Baby&child/BabyHomeNursery/FeedingWeaning/FeedingWeaning';
import NurseryFunitureFurnishings from './Component/Product/Baby&child/BabyHomeNursery/NurseryFunitureFurnishings/NurseryFunitureFurnishings';
import SafetyHealthcare from './Component/Product/Baby&child/BabyHomeNursery/SafetyHealthcare/SafetyHealthcare';


// Baby Clothes(0 - 4 years)

import BabyToddlerclothes from './Component/Product/Baby&child/BabyClothes/BabyToddlerclothes/BabyToddlerclothes';
import BabyBoyClothes from './Component/Product/Baby&child/BabyClothes/BabyBoyClothes/BabyBoyClothes';
import BabyGirlClothes from './Component/Product/Baby&child/BabyClothes/BabyGirlClothes/BabyGirlClothes';
import SleepsuitsBodysuits from './Component/Product/Baby&child/BabyClothes/SleepsuitsBodysuits/SleepsuitsBodysuits';

// Kids Clothes & Shoes

import AllGirlsclothes from './Component/Product/Baby&child/KidsClothingShoes/AllGirlsclothes/AllGirlsclothes';
import GirlsDresses from './Component/Product/Baby&child/KidsClothingShoes/GirlsDresses/GirlsDresses';
import GirlsShoes from './Component/Product/Baby&child/KidsClothingShoes/GirlsShoes/GirlsShoes';
import GirlsPyjamas from './Component/Product/Baby&child/KidsClothingShoes/GirlsPyjamas/GirlsPyjamas';
import AllBoysClothes from './Component/Product/Baby&child/KidsClothingShoes/AllBoysClothes/AllBoysClothes';
import BoysShorts from './Component/Product/Baby&child/KidsClothingShoes/BoysShorts/BoysShorts';
import BoysShoes from './Component/Product/Baby&child/KidsClothingShoes/BoysShoes/BoysShoes';
import BoysTops from './Component/Product/Baby&child/KidsClothingShoes/BoysTops/BoysTops';

// Kids Travel

import BabyCarriers from './Component/Product/Baby&child/KidsTravel/BabyCarriers/BabyCarriers';
import CarSeats from './Component/Product/Baby&child/KidsTravel/CarSeats/CarSeats';
import Strollers from './Component/Product/Baby&child/KidsTravel/Strollers/Strollers';

// Kids Toys & Gifts
import GiftsForBabiesKids from './Component/Product/Baby&child/KidsToysGifts/GiftsForBabiesKids/GiftsForBabiesKids';
import LEGO from './Component/Product/Baby&child/KidsToysGifts/LEGO/LEGO';
import BabyPreschoolToys from './Component/Product/Baby&child/KidsToysGifts/BabyPreschoolToys/BabyPreschoolToys';
import Toys from './Component/Product/Baby&child/KidsToysGifts/Toys/Toys';
import BabyAndChild from './Component/Product/Baby&child/BabyAndChild';
import KidsGamesPuzzles from './Component/Product/Baby&child/KidsToysGifts/KidsGamesPuzzles/KidsGamesPuzzles';
import Cycling from './Component/Product/SportLeisure/EquipmentBySport/Cycling/Cycling';
import GymTrainingFitness from './Component/Product/SportLeisure/EquipmentBySport/GymTrainingFitness/GymTrainingFitness';
import Running from './Component/Product/SportLeisure/EquipmentBySport/Running/Running';
import Swimming from './Component/Product/SportLeisure/EquipmentBySport/Swimming/Swimming';
import Yoga from './Component/Product/SportLeisure/EquipmentBySport/Yoga/Yoga';
import WomensClothing from './Component/Product/SportLeisure/Sportswear/WomensClothing/WomensClothing';
import WomenSportsTrainers from './Component/Product/SportLeisure/Sportswear/WomenSportsTrainers/WomenSportsTrainers';
import MenClothing from './Component/Product/SportLeisure/Sportswear/MenClothing/MenClothing';
import MenSportsTrainers from './Component/Product/SportLeisure/Sportswear/MenSportsTrainers/MenSportsTrainers';
import FitnessMachinesTechonology from './Component/Product/SportLeisure/Fitness/FitnessMachinesTechonology/FitnessMachinesTechonology';
import SportsEquipment from './Component/Product/SportLeisure/Fitness/SportsEquipment/SportsEquipment';
import CrossTrainers from './Component/Product/SportLeisure/Fitness/CrossTrainers/CrossTrainers';
import Smartwatches from './Component/Product/SportLeisure/Fitness/Smartwatches/Smartwatches';
import ExerciseBikes from './Component/Product/SportLeisure/Fitness/ExerciseBikes/ExerciseBikes';
import Treadmills from './Component/Product/SportLeisure/Fitness/Treadmills/Treadmills';
import Weights from './Component/Product/SportLeisure/Fitness/Weights/Weights';
import Adidas from './Component/Product/SportLeisure/SportsBrands/Adidas/Adidas';
import SweatyBetty from './Component/Product/SportLeisure/SportsBrands/SweatyBetty/SweatyBetty';
import TheNorthFace from './Component/Product/SportLeisure/SportsBrands/TheNorthFace/TheNorthFace';
import Therabody from './Component/Product/SportLeisure/SportsBrands/Therabody/Therabody';
import UnderArmour from './Component/Product/SportLeisure/SportsBrands/UnderArmour/UnderArmour';
import Haberdashery from './Component/Product/SportLeisure/HobbiesCrafts/Haberdashery/Haberdashery';
import GamesPuzzles from './Component/Product/SportLeisure/HobbiesCrafts/GamesPuzzles/GamesPuzzles';
import Crafts from './Component/Product/SportLeisure/HobbiesCrafts/Crafts/Crafts';
import Stationery from './Component/Product/SportLeisure/HobbiesCrafts/Stationery/Stationery';
import Books from './Component/Product/SportLeisure/HobbiesCrafts/Books/Books';
import WoolYarn from './Component/Product/SportLeisure/HobbiesCrafts/WoolYarn/WoolYarn';
import SewingMachines from './Component/Product/SportLeisure/HobbiesCrafts/SewingMachines/SewingMachines';
import ViewAllLuggage from './Component/Product/SportLeisure/TravelLuggage/ViewAllLuggage/ViewAllLuggage';
import BackPacks from './Component/Product/SportLeisure/TravelLuggage/BackPacks/BackPacks';
import CabinCases from './Component/Product/SportLeisure/TravelLuggage/CabinCases/CabinCases';
import Suitcases from './Component/Product/SportLeisure/TravelLuggage/Suitcases/Suitcases';
import HoldallsWeekendBags from './Component/Product/SportLeisure/TravelLuggage/HoldallsWeekendBags/HoldallsWeekendBags';
import Camping from './Component/Product/SportLeisure/TravelLuggage/Camping/Camping';
import HolidaySummerShop from './Component/Product/SportLeisure/TravelLuggage/HolidaySummerShop/HolidaySummerShop';
import SportAndLeisure from './Component/Product/SportLeisure/SportAndLeisure';
import MensBags from './Component/Product/Men/Accessories/MensBags/MensBags';


import GiftsForHer from './Component/Product/Gifts/GiftsByRecipient/GiftsForHer/GiftsForHer';
import GiftsForHim from './Component/Product/Gifts/GiftsByRecipient/GiftsForHim/GiftsForHim';
import GiftsForKids from './Component/Product/Gifts/GiftsByRecipient/GiftsForKids/GiftsForKids';
import GiftsForCouples from './Component/Product/Gifts/GiftsByRecipient/GiftsForCouples/GiftsForCouples';
import GiftsForBabies from './Component/Product/Gifts/GiftsByRecipient/GiftsForBabies/GiftsForBabies';
import GiftsForTeenagers from './Component/Product/Gifts/GiftsByRecipient/GiftsForTeenagers/GiftsForTeenagers';
import BeautyFragranceGifts from './Component/Product/Gifts/PopularGifts/BeautyFragranceGifts/BeautyFragranceGifts';
import GamesAndPuzzles from './Component/Product/Gifts/PopularGifts/GamesAndPuzzles/GamesAndPuzzles';
import CandlesHomeFragrance from './Component/Product/Gifts/PopularGifts/CandlesHomeFragrance/CandlesHomeFragrance';
import CookingBaking from './Component/Product/Gifts/PopularGifts/CookingBaking/CookingBaking';
import Gardening from './Component/Product/Gifts/PopularGifts/Gardening/Gardening';
import GiftWrapPartyShop from './Component/Product/Gifts/PopularGifts/GiftWrapPartyShop/GiftWrapPartyShop';
import Hampers from './Component/Product/Gifts/FoodDrinkGifts/Hampers/Hampers';
import Chocolate from './Component/Product/Gifts/FoodDrinkGifts/Chocolate/Chocolate';
import Alcohol from './Component/Product/Gifts/FoodDrinkGifts/Alcohol/Alcohol';
import GiftsForPets from './Component/Product/Gifts/GiftsByRecipient/GiftsForPets/GiftsForPets';
import GiftsForGrandparents from './Component/Product/Gifts/GiftsByRecipient/GiftsForGrandparents/GiftsForGrandparents';
import GiftsUnder20 from './Component/Product/Gifts/GiftsByPrice/GiftsUnder20/GiftsUnder20';
import GiftsUnder50 from './Component/Product/Gifts/GiftsByPrice/GiftsUnder50/GiftsUnder50';
import GiftsUnder100 from './Component/Product/Gifts/GiftsByPrice/GiftsUnder100/GiftsUnder100';
import Birthday from './Component/Product/Gifts/ShopByOccasion/Birthday/Birthday';
import Wedding from './Component/Product/Gifts/ShopByOccasion/Wedding/Wedding';
import NewHome from './Component/Product/Gifts/ShopByOccasion/NewHome/NewHome';
import Anniversary from './Component/Product/Gifts/ShopByOccasion/Anniversary/Anniversary';
import ViewAllGiftFoodDrink from './Component/Product/Gifts/FoodDrinkGifts/ViewAllGiftFoodDrink/ViewAllGiftFoodDrink';
import GiftsForGinLovers from './Component/Product/Gifts/FoodDrinkGifts/GiftsForGinLovers/GiftsForGinLovers';
import CakesBiscuits from './Component/Product/Gifts/FoodDrinkGifts/CakesBiscuits/CakesBiscuits';
import SweetsFudge from './Component/Product/Gifts/FoodDrinkGifts/SweetsFudge/SweetsFudge';
import TheOrdinary from './Component/Product/Beauty/TopBrands/TheOrdinary/TheOrdinary';
import CHANEL from './Component/Product/Beauty/TopBrands/CHANEL/CHANEL';
import CharlotteTilbury from './Component/Product/Beauty/TopBrands/CharlotteTilbury/CharlotteTilbury';
import Clarins from './Component/Product/Beauty/TopBrands/Clarins/Clarins';
import Clinique from './Component/Product/Beauty/TopBrands/Clinique/Clinique';
import DIOR from './Component/Product/Beauty/TopBrands/DIOR/DIOR';
import EstéeLauder from './Component/Product/Beauty/TopBrands/EstéeLauder/EstéeLauder';
import BeautyGucci from './Component/Product/Beauty/TopBrands/BeautyGucci/BeautyGucci';
import JoMaloneLondon from './Component/Product/Beauty/TopBrands/JoMaloneLondon/JoMaloneLondon';
import AToZBrands from './Component/Product/Beauty/TopBrands/AToZBrands/AToZBrands';
import ViewallMakeup from './Component/Product/Beauty/Makeup/ViewallMakeup/ViewallMakeup';
import Offers from './Component/Product/Beauty/InspireMe/Offers/Offers';
import NewArrivals from './Component/Product/Beauty/InspireMe/NewArrivals/NewArrivals';
import VeganBeauty from './Component/Product/Beauty/VeganBeauty/VeganBeauty';
import Wellness from './Component/Product/Beauty/InspireMe/Wellness/Wellness';
import GiftSets from './Component/Product/Beauty/InspireMe/GiftSets/GiftSets';
import NewAndExclusiveClarinsExtraordinaire from './Component/Product/Beauty/InspireMe/NewAndExclusiveClarinsExtraordinaire/NewAndExclusiveClarinsExtraordinaire';
import LampShades from './Component/Product/FurnitureLighting/Lighting/LampShades/LampShades';
import ShopLighting from './Component/Product/FurnitureLighting/Lighting/ShopLighting/ShopLighting';
import GardenDiningSets from './Component/Product/FurnitureLighting/InspireMe/GardenDiningSets/GardenDiningSets';
import GardenLoungeSets from './Component/Product/FurnitureLighting/InspireMe/GardenLoungeSets/GardenLoungeSets';
import ShopHomeOffice from './Component/Product/FurnitureLighting/HomeOfficeStorage/ShopHomeOffice/ShopHomeOffice';
import ShopDiningRoom from './Component/Product/FurnitureLighting/DiningRoomFurniture/ShopDiningRoom/ShopDiningRoom';
import DiningBenches from './Component/Product/FurnitureLighting/DiningRoomFurniture/DiningBenches/DiningBenches';
import ShopBedroom from './Component/Product/FurnitureLighting/BedroomFurniture/ShopBedroom/ShopBedroom';
import ConsoleTables from './Component/Product/FurnitureLighting/LivingRoomFurniture/ConsoleTables/ConsoleTables';
import SideTables from './Component/Product/FurnitureLighting/LivingRoomFurniture/SideTables/SideTables';
import ShopLivingRoom from './Component/Product/FurnitureLighting/LivingRoomFurniture/ShopLivingRoom/ShopLivingRoom';
import TablewareAndcutlery from './Component/Product/HomeGarden/CookingDining/TablewareAndcutlery/TablewareAndcutlery';
import OutdoorLighting from './Component/Product/HomeGarden/Garden/OutdoorLighting/OutdoorLighting';
import LuxuryGifts from './Component/Product/Gifts/GiftInspiration/LuxuryGifts/LuxuryGifts';
import Techies from './Component/Product/Gifts/GiftInspiration/Techies/Techies';





function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>

            {/* MAIN ROUTE */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/wish-list" element={<WishLists />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/proceedToPayment" element={<PrivateRoute><ProceedToPayment /></PrivateRoute>} />
            <Route path="/payment" element={<PrivateRoute><ConfirmPayment /></PrivateRoute>} />
            <Route path="/register" element={<LoginForm />} />
            <Route path="/register" element={<Login />} />
            <Route path="/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />

            {/* BEDDING */}

            <Route path="/homeAndGarden/bedding" element={<BedSheets />} />
            <Route path="/homeAndGarden/pillows" element={<Pillows />} />
            <Route path="/homeAndGarden/PillowCases" element={<PillowCases />} />
            <Route path="/homeAndGarden/duvetCovers" element={<DuvetCovers />} />
            <Route path="/homeAndGarden/duvets" element={<Duvets />} />
            <Route path="/homeAndGarden/shopBedding" element={<ShopBedding />} />
            <Route path="/homeAndGarden/throwsBlanketsAndSpreads" element={<ThrowsblanketsandSpreads />} />

            {/* COOKING AND DINING */}

            <Route path="/homeAndGarden/childrensBedding" element={<ChildrensBedding />} />
            <Route path="/homeAndGarden/cookwareBakeware" element={<CookwareBakeware />} />
            <Route path="/homeAndGarden/tablewareAndcutlery" element={<TablewareAndcutlery />} />
            <Route path="/homeAndGarden/glassesDrinkware" element={<GlassesDrinkware />} />
            <Route path="/homeAndGarden/potsPans" element={<PotsPans />} />
            <Route path="/homeAndGarden/foodPreparation" element={<FoodPreparation />} />
            <Route path="/homeAndGarden/picnicware" element={<Picnicware />} />
            <Route path="/homeAndGarden/kitchenUtensilsGadgets" element={<KitchenUtensilsGadgets />} />
            <Route path="/homeAndGarden/kitchenBins" element={<KitchenBins />} />

            {/* Home Décor & Accessories */}

            <Route path="/homeAndGarden/candlesandHomeFragrances" element={<CandlesandHomeFragrances />} />
            <Route path="/homeAndGarden/homeAccessories" element={<HomeAccessories />} />
            <Route path="/homeAndGarden/cushions" element={<Cushions />} />
            <Route path="/homeAndGarden/wallpaperPaintDIY" element={<WallpaperPaintDIY />} />
            <Route path="/homeAndGarden/mirrors" element={<Mirrors />} />
            <Route path="/homeAndGarden/rugs" element={<Rugs />} />
            <Route path="/homeAndGarden/storage" element={<Storage />} />
            <Route path="/homeAndGarden/towels" element={<Towels />} />
            <Route path="/homeAndGarden/picturesArtFrames" element={<PicturesArtFrames />} />

            {/* Curtains, Blinds & Floors */}

            <Route path="/homeAndGarden/blinds" element={<Blinds />} />
            <Route path="/homeAndGarden/carpetsAndFlooring" element={<CarpetsAndFlooring />} />
            <Route path="/homeAndGarden/curtains" element={<Curtains />} />
            <Route path="/homeAndGarden/madeToMeasurecurtains" element={<MadeToMeasurecurtains />} />
            <Route path="/homeAndGarden/curtainPolesAccessories" element={<CurtainPolesAccessories />} />
            <Route path="/homeAndGarden/fabrics" element={<Fabrics />} />

            {/* Garden */}

            <Route path="/homeAndGarden/gardenFurnitureSets" element={<GardenFurnitureSets />} />
            <Route path="/homeAndGarden/gardenFurnitureSets" element={<GardenFurnitureSets />} />
            <Route path="/homeAndGarden/gardenSeating" element={<GardenSeating />} />
            <Route path="/homeAndGarden/gasBBQs" element={<GasBBQs />} />
            <Route path="/homeAndGarden/pizzaOvens" element={<PizzaOvens />} />
            <Route path="/homeAndGarden/outdoorlights" element={<OutdoorLighting />} />
            <Route path="/homeAndGarden/decorativeGardenAccessories" element={<DecorativeGardenAccessories />} />
            <Route path="/homeAndGarden/parasolsAccessories" element={<ParasolsAccessories />} />
            <Route path="/homeAndGarden/shopGarden" element={<ShopGarden />} />

            {/* WOMEN */}

            { /*CLOTHING*/}
            <Route path="/women/dresses" element={<Dresses />} />
            <Route path="/women/jeans" element={<Jeans />} />
            <Route path="/women/shirtsTops" element={<ShirtsTops />} />
            <Route path="/women/shorts" element={<Shorts />} />
            <Route path="/women/skirts" element={<Skirts />} />
            <Route path="/women/sportsClothes" element={<SportsClothes />} />
            <Route path="/women/swimwearBeachwear" element={<SwimwearBeachwear />} />
            <Route path="/women/women-Trousers" element={<WomenTrousers />} />
            <Route path="/women/leggings" element={<Leggings />} />
            <Route path="/women/plusSize" element={<PlusSize />} />
            <Route path="/women/maternityClothes" element={<MaternityClothes />} />
            <Route path="/women/coatsJackets" element={<CoatsJackets />} />
            <Route path="/women/jumpersKnitwear" element={<JumpersKnitwear />} />
            <Route path="/women/jumpsuits" element={<Jumpsuits />} />
            <Route path="/women/linen" element={<Linen />} />
            <Route path="/women/loungewear" element={<Loungewear />} />
            <Route path="/women/petite" element={<Petite />} />
            <Route path="/women/occasionwear" element={<Occasionwear />} />
            <Route path="/women/weddingBoutique" element={<WeddingBoutique />} />

            {/* WOMEN Footwear */}

            <Route path="/women/womenShoes" element={<WomenShoes />} />
            <Route path="/women/womenSandals" element={<WomenSandals />} />
            <Route path="/women/womenSlippers" element={<WomenSlippers />} />
            <Route path="/women/womenTrainersAndPlimsoles" element={<WomenTrainersAndPlimsoles />} />
            <Route path="/women/womenCourtShoes" element={<WomenCourtShoes />} />
            <Route path="/women/womenBoots" element={<WomenBoots />} />
            <Route path="/women/womenPumps" element={<WomenPumps />} />

            {/* Lingerie, Nightwear */}

            <Route path="/women/brasSportsBras" element={<BrasSportsBras />} />
            <Route path="/women/nightwear" element={<Nightwear />} />
            <Route path="/women/socks" element={<Socks />} />
            <Route path="/women/knickers" element={<Knickers />} />
            <Route path="/women/tights" element={<Tights />} />

            {/* Accessories */}

            <Route path="/women/womenHandbags" element={<WomenHandbags />} />
            <Route path="/women/womenPurses" element={<WomenPurses />} />
            <Route path="/women/womenBelts" element={<WomenBelts />} />
            <Route path="/women/womenSunglasses" element={<WomenSunglasses />} />
            <Route path="/women/womenJewellery" element={<WomenJewellery />} />
            <Route path="/women/womenHats" element={<WomenHats />} />
            <Route path="/women/womenWatches" element={<WomenWatches />} />
            <Route path="/women/womenHairAccessories" element={<WomenHairAccessories />} />
            <Route path="/women/womenOccasionHatsFascinators" element={<WomenOccasionHatsFascinators />} />

            {/* MEN Clothing */}

            <Route path="/men/blazers" element={<Blazers />} />
            <Route path="/men/menJeans" element={<MenJeans />} />
            <Route path="/men/poloShirts" element={<PoloShirts />} />
            <Route path="/men/menShirts" element={<MenShirts />} />
            <Route path="/men/menShorts" element={<MenShorts />} />
            <Route path="/men/menSportsClothesGym" element={<MenSportsClothesGym />} />
            <Route path="/men/suits" element={<Suits />} />
            <Route path="/men/swimwear" element={<Swimwear />} />
            <Route path="/men/trousers" element={<Trousers />} />
            <Route path="/men/t-shirts" element={<TShirts />} />
            <Route path="/men/waistcoats" element={<Waistcoats />} />
            <Route path="/men/menCashmere" element={<MenCashmere />} />
            <Route path="/men/menCoatsJackets" element={<MenCoatsJackets />} />
            <Route path="/men/menSweatshirtsHoodies" element={<MenSweatshirtsHoodies />} />
            <Route path="/men/menJumpersCardigans" element={<MenJumpersCardigans />} />
            <Route path="/men/menLinen" element={<MenLinen />} />
            <Route path="/men/menLoungewear" element={<MenLoungewear />} />
            <Route path="/men/menWeddingShop" element={<MenWeddingShop />} />
            <Route path="/men/menHolidaySummerShop" element={<MenHolidaySummerShop />} />

            {/* Nightwear, Underwear & Socks */}

            <Route path="/men/PyjamasNightwear" element={<PyjamasNightwear />} />
            <Route path="/men/robesAndDressingGowns" element={<RobesAndDressingGowns />} />
            <Route path="/men/MenSocks" element={<MenSocks />} />
            <Route path="/men/underwear" element={<Underwear />} />

            {/* Footwear */}

            <Route path="/men/menShoes" element={<MenShoes />} />
            <Route path="/men/menSandals" element={<MenSandals />} />
            <Route path="/men/menSlippers" element={<MenSlippers />} />
            <Route path="/men/menTrainersAndPlimsoles" element={<MenTrainersAndPlimsoles />} />
            <Route path="/men/menBoots" element={<MenBoots />} />
            <Route path="/men/menWalkingBootsShoes" element={<MenWalkingBootsShoes />} />

            {/* Accessories */}
            <Route path="/men/menBags" element={<MensBags />} />
            <Route path="/men/menBelts" element={<MenBelts />} />
            <Route path="/men/menHats" element={<MenHats />} />
            <Route path="/men/menWallets" element={<MenWallets />} />
            <Route path="/men/menSunglasses" element={<MenSunglasses />} />
            <Route path="/men/menWatches" element={<MenWatches />} />
            <Route path="/men/menJewellery" element={<MenJewellery />} />
            <Route path="/men/menSuitcases" element={<MenSuitcases />} />


            {/* BEAUTY */}

            {/* Top Brands */}
            <Route path="/beauty/TheOrdinary" element={<TheOrdinary />} />
            <Route path="/beauty/CHANEL" element={<CHANEL />} />
            <Route path="/beauty/CharlotteTilbury" element={<CharlotteTilbury />} />
            <Route path="/beauty/Clarins" element={<Clarins />} />
            <Route path="/beauty/Clinique" element={<Clinique />} />
            <Route path="/beauty/DIOR" element={<DIOR />} />
            <Route path="/beauty/EstéeLauder" element={<EstéeLauder />} />
            <Route path="/beauty/BeautyGucci" element={<BeautyGucci />} />
            <Route path="/beauty/JoMaloneLondon" element={<JoMaloneLondon />} />
            <Route path="/beauty/AToZBrands" element={<AToZBrands />} />

            {/* MAKEUP */}


            <Route path="/beauty/viewallMakeup" element={<ViewallMakeup />} />
            <Route path="/beauty/foundations" element={<Foundations />} />
            <Route path="/beauty/concealers" element={<Concealers />} />
            <Route path="/beauty/eyeshadows" element={<Eyeshadows />} />
            <Route path="/beauty/mascaras" element={<Mascaras />} />
            <Route path="/beauty/lipsticks" element={<Lipsticks />} />
            <Route path="/beauty/nailPolish" element={<NailPolish />} />

            {/* Fragrance */}

            <Route path="/beauty/womensPerfume" element={<WomensPerfume />} />
            <Route path="/beauty/PerfumeGiftSets" element={<PerfumeGiftSets />} />
            <Route path="/beauty/MensAftershave" element={<MensAftershave />} />
            <Route path="/beauty/AftershaveGiftSets" element={<AftershaveGiftSets />} />
            <Route path="/beauty/bathsShower" element={<BathsShower />} />

            {/* Skin & Body Care */}

            <Route path="/beauty/cleansers" element={<Cleansers />} />
            <Route path="/beauty/moisturisers" element={<Moisturisers />} />
            <Route path="/beauty/bodyCare" element={<BodyCare />} />
            <Route path="/beauty/lipBalmCare" element={<LipBalmCare />} />
            <Route path="/beauty/handFootCare" element={<HandFootCare />} />
            <Route path="/beauty/skinCareTreatments" element={<SkinCareTreatments />} />
            <Route path="/beauty/sunCreamAfterSun" element={<SunCreamAfterSun />} />
            <Route path="/beauty/menGrooming" element={<MenGrooming />} />

            {/* Hair Care & Styling */}

            <Route path="/beauty/hairCare" element={<HairCare />} />
            <Route path="/beauty/shampoo" element={<Shampoo />} />
            <Route path="/beauty/conditioner" element={<Conditioner />} />
            <Route path="/beauty/hairTreatments" element={<HairTreatments />} />
            <Route path="/beauty/hairStylingProducts" element={<HairStylingProducts />} />
            <Route path="/beauty/hairBrushes" element={<HairBrushes />} />
            <Route path="/beauty/electricalHairBeauty" element={<ElectricalHairBeauty />} />

            {/* INSPIRE ME */}

            <Route path="/beauty/Offers" element={<Offers />} />
            <Route path="/beauty/NewArrivals" element={<NewArrivals />} />
            <Route path="/beauty/VeganBeauty" element={<VeganBeauty />} />
            <Route path="/beauty/Wellness" element={<Wellness />} />
            <Route path="/beauty/GiftSets" element={<GiftSets />} />
            <Route path="/beauty/NewAndExclusive" element={<NewAndExclusiveClarinsExtraordinaire />} />

            {/* BABY AND CHILD */}

            <Route path="/BabyAndChild" element={<BabyAndChild />} />

            {/* Baby Food & Milk */}

            <Route path="/babyAndChild/BabyToddlerFood" element={<BabyToddlerFood />} />
            <Route path="/babyAndChild/BabyToddlerMilk" element={<BabyToddlerMilk />} />

            {/* Baby Home & Nursery */}
            <Route path="/babyAndChild/sleeping" element={<Sleeping />} />
            <Route path="/babyAndChild/bathingChanging" element={<BathingChanging />} />
            <Route path="/babyAndChild/feedingWeaning" element={<FeedingWeaning />} />
            <Route path="/babyAndChild/nurseryFunitureFurnishings" element={<NurseryFunitureFurnishings />} />
            <Route path="/babyAndChild/safetyHealthcare" element={<SafetyHealthcare />} />

            {/* Baby Clothes (0-4 years) */}
            <Route path="/babyAndChild/babyToddlerclothes" element={<BabyToddlerclothes />} />
            <Route path="/babyAndChild/babyBoyClothes" element={<BabyBoyClothes />} />
            <Route path="/babyAndChild/babyGirlClothes" element={<BabyGirlClothes />} />
            <Route path="/babyAndChild/sleepsuitsBodysuits" element={<SleepsuitsBodysuits />} />

            {/* Kids Clothes & Shoes */}
            <Route path="/babyAndChild/AllGirlsclothes" element={<AllGirlsclothes />} />
            <Route path="/babyAndChild/GirlsDresses" element={<GirlsDresses />} />
            <Route path="/babyAndChild/GirlsShoes" element={<GirlsShoes />} />
            <Route path="/babyAndChild/GirlsPyjamas" element={<GirlsPyjamas />} />
            <Route path="/babyAndChild/AllBoysClothes" element={<AllBoysClothes />} />
            <Route path="/babyAndChild/BoysShorts" element={<BoysShorts />} />
            <Route path="/babyAndChild/BoysShoes" element={<BoysShoes />} />
            <Route path="/babyAndChild/BoysTops" element={<BoysTops />} />

            {/* Kids Travel */}

            <Route path="/babyAndChild/CarSeats" element={<CarSeats />} />
            <Route path="/babyAndChild/BabyCarriers" element={<BabyCarriers />} />
            <Route path="/babyAndChild/Strollers" element={<Strollers />} />

            {/* Kids Toys & Gifts */}

            <Route path="/babyAndChild/Toys" element={<Toys />} />
            <Route path="/babyAndChild/BabyPreschoolToys" element={<BabyPreschoolToys />} />
            <Route path="/babyAndChild/KidsGamesPuzzles" element={<KidsGamesPuzzles />} />
            <Route path="/babyAndChild/LEGO" element={<LEGO />} />
            <Route path="/babyAndChild/GiftsForBabiesKids" element={<GiftsForBabiesKids />} />



            {/* EquipmentBySport */}

            <Route path="/sportAndLeisure/Cycling" element={<Cycling />} />
            <Route path="/sportAndLeisure/GymTrainingFitness" element={<GymTrainingFitness />} />
            <Route path="/sportAndLeisure/Running" element={<Running />} />
            <Route path="/sportAndLeisure/Swimming" element={<Swimming />} />
            <Route path="/sportAndLeisure/Yoga" element={<Yoga />} />

            {/* Sportswear */}

            <Route path="/sportAndLeisure/WomensClothing" element={<WomensClothing />} />
            <Route path="/sportAndLeisure/WomenSportsTrainers" element={<WomenSportsTrainers />} />
            <Route path="/sportAndLeisure/MenClothing" element={<MenClothing />} />
            <Route path="/sportAndLeisure/MenSportsTrainers" element={<MenSportsTrainers />} />

            {/* Fitness */}

            <Route path="/sportAndLeisure/FitnessMachinesTechnology" element={<FitnessMachinesTechonology />} />
            <Route path="/sportAndLeisure/SportsEquipment" element={<SportsEquipment />} />
            <Route path="/sportAndLeisure/Treadmills" element={<Treadmills />} />
            <Route path="/sportAndLeisure/ExerciseBikes" element={<ExerciseBikes />} />
            <Route path="/sportAndLeisure/CrossTrainers" element={<CrossTrainers />} />
            <Route path="/sportAndLeisure/Weights" element={<Weights />} />
            <Route path="/sportAndLeisure/Smartwatches" element={<Smartwatches />} />

            {/* Sports Brands */}

            <Route path="/sportAndLeisure/Adidas" element={<Adidas />} />
            <Route path="/sportAndLeisure/SweatyBetty" element={<SweatyBetty />} />
            <Route path="/sportAndLeisure/TheNorthFace" element={<TheNorthFace />} />
            <Route path="/sportAndLeisure/Therabody" element={<Therabody />} />
            <Route path="/sportAndLeisure/UnderArmour" element={<UnderArmour />} />

            {/* Hobbies & Crafts */}

            <Route path="/sportAndLeisure/Haberdashery" element={<Haberdashery />} />
            <Route path="/sportAndLeisure/GamesPuzzles" element={<GamesPuzzles />} />
            <Route path="/sportAndLeisure/Crafts" element={<Crafts />} />
            <Route path="/sportAndLeisure/Stationery" element={<Stationery />} />
            <Route path="/sportAndLeisure/Books" element={<Books />} />
            <Route path="/sportAndLeisure/SewingMachines" element={<SewingMachines />} />
            <Route path="/sportAndLeisure/WoolYarn" element={<WoolYarn />} />

            {/* Travel & Luggage */}

            <Route path="/sportAndLeisure/ViewAllLuggage" element={<ViewAllLuggage />} />
            <Route path="/sportAndLeisure/Backpacks" element={<BackPacks />} />
            <Route path="/sportAndLeisure/CabinCases" element={<CabinCases />} />
            <Route path="/sportAndLeisure/Suitcases" element={<Suitcases />} />
            <Route path="/sportAndLeisure/HoldallsWeekendBags" element={<HoldallsWeekendBags />} />
            <Route path="/sportAndLeisure/Camping" element={<Camping />} />
            <Route path="/sportAndLeisure/HolidaySummerShop" element={<HolidaySummerShop />} />


            {/* Living Room Furniture */}

            <Route path="/furnitureAndLighting/sofasArmchairs" element={<SofasArmchairs />} />
            <Route path="/furnitureAndLighting/tVStands" element={<TVStands />} />
            <Route path="/furnitureAndLighting/coffeeTables" element={<CoffeeTables />} />
            <Route path="/furnitureAndLighting/bookcasesShelving" element={<BookcasesShelving />} />
            <Route path="/furnitureAndLighting/cabinetsSideboards" element={<CabinetsSideboards />} />
            <Route path="/furnitureAndLighting/consoleTables" element={<ConsoleTables />} />
            <Route path="/furnitureAndLighting/sideTables" element={<SideTables />} />
            <Route path="/furnitureAndLighting/shopLivingRoom" element={<ShopLivingRoom />} />


            {/* Bedroom Furniture */}

            <Route path="/furnitureAndLighting/beds" element={<Beds />} />
            <Route path="/furnitureAndLighting/mattresses" element={<Mattresses />} />
            <Route path="/furnitureAndLighting/bedsideTables" element={<BedsideTables />} />
            <Route path="/furnitureAndLighting/chestsDrawers" element={<ChestsDrawers />} />
            <Route path="/furnitureAndLighting/dressingTables" element={<DressingTables />} />
            <Route path="/furnitureAndLighting/wardrobes" element={<Wardrobes />} />
            <Route path="/furnitureAndLighting/childrenBedroom" element={<ChildrenBedroom />} />
            <Route path="/furnitureAndLighting/shopBedroom" element={<ShopBedroom />} />

            {/* Dining Room Furniture */}

            <Route path="/furnitureAndLighting/diningTables" element={<DiningTables />} />
            <Route path="/furnitureAndLighting/diningChairs" element={<DiningChairs />} />
            <Route path="/furnitureAndLighting/barChairsStools" element={<BarChairsStools />} />
            <Route path="/furnitureAndLighting/diningBenches" element={<DiningBenches />} />
            <Route path="/furnitureAndLighting/shopDiningRoom" element={<ShopDiningRoom />} />

            {/* Home Office & Storage */}
            <Route path="/furnitureAndLighting/officeDesks" element={<OfficeDesks />} />
            <Route path="/furnitureAndLighting/officeChairs" element={<OfficeChairs />} />
            <Route path="/furnitureAndLighting/homeStorage" element={<HomeStorage />} />
            <Route path="/furnitureAndLighting/shopHomeOffice" element={<ShopHomeOffice />} />

            {/* Lighting */}

            <Route path="/furnitureAndLighting/ceilingLights" element={<CeilingLights />} />
            <Route path="/furnitureAndLighting/deskTableLamps" element={<DeskTablelamps />} />
            <Route path="/furnitureAndLighting/floorLamps" element={<FloorLamps />} />
            <Route path="/furnitureAndLighting/wallLighting" element={<WallLighting />} />
            <Route path="/furnitureAndLighting/gardenOutdoorlights" element={<GardenOutdoorlights />} />
            <Route path="/furnitureAndLighting/lightBulbs" element={<LightBulbs />} />
            <Route path="/furnitureAndLighting/lampShades" element={<LampShades />} />
            <Route path="/furnitureAndLighting/shopLighting" element={<ShopLighting />} />

            {/* Inspire Me */}

            <Route path="/furnitureAndLighting/gardenDiningSets" element={<GardenDiningSets />} />
            <Route path="/furnitureAndLighting/gardenLoungeSets" element={<GardenLoungeSets />} />


            {/* Television & Audio */}
            <Route path="/electricals/Television" element={<Television />} />
            <Route path="/electricals/SoundbarsHomeCinema" element={<SoundbarsHomeCinema />} />
            <Route path="/electricals/TVStandsWallMounts" element={<TVStandsWallMounts />} />
            <Route path="/electricals/TVStreamingDevices" element={<TVStreamingDevices />} />
            <Route path="/electricals/SpeakersSoundSystems" element={<SpeakersSoundSystems />} />
            <Route path="/electricals/Headphones" element={<Headphones />} />

            {/* Computing & Gaming */}

            <Route path="/electricals/IpadsTablets" element={<IpadsTablets />} />
            <Route path="/electricals/LaptopsMacBooks" element={<LaptopsMacBooks />} />
            <Route path="/electricals/PCsDesktopComputers" element={<PCsDesktopComputers />} />
            <Route path="/electricals/MonitorsProjectors" element={<MonitorsProjectors />} />
            <Route path="/electricals/PrintersAccessories" element={<PrintersAccessories />} />
            <Route path="/electricals/Gaming" element={<Gaming />} />

            {/* Home Appliances */}

            <Route path="/electricals/WashingMachines" element={<WashingMachines />} />
            <Route path="/electricals/FridgeFreezers" element={<FridgeFreezers />} />
            <Route path="/electricals/Dishwashers" element={<Dishwashers />} />
            <Route path="/electricals/CookersOvens" element={<CookersOvens />} />
            <Route path="/electricals/Microwaves" element={<Microwaves />} />

            {/* Kitchen Appliances & Vacuums */}

            <Route path="/electricals/CoffeeMachines" element={<CoffeeMachines />} />
            <Route path="/electricals/Kettles" element={<Kettles />} />
            <Route path="/electricals/Toasters" element={<Toasters />} />
            <Route path="/electricals/VacuumCleaners" element={<VacuumCleaners />} />
            <Route path="/electricals/FansCoolingPurifiers" element={<FansCoolingPurifiers />} />
            <Route path="/electricals/Ironing" element={<Ironing />} />

            {/* Mobile, Cameras & Smart Tech */}

            <Route path="/electricals/MobilePhonesAccessories" element={<MobilePhonesAccessories />} />
            <Route path="/electricals/CamerasCamcorders" element={<CamerasCamcorders />} />
            <Route path="/electricals/SmartFitnessWatches" element={<SmartFitnessWatches />} />

            {/* GIFT */}
            {/* Gifts by Recipient */}


            <Route path="/gifts/GiftsForHer" element={<GiftsForHer />} />
            <Route path="/gifts/GiftsForHim" element={<GiftsForHim />} />
            <Route path="/gifts/GiftsForKids" element={<GiftsForKids />} />
            <Route path="/gifts/GiftsForCouples" element={<GiftsForCouples />} />
            <Route path="/gifts/GiftsForBabies" element={<GiftsForBabies />} />
            <Route path="/gifts/GiftsForTeenagers" element={<GiftsForTeenagers />} />
            <Route path="/gifts/GiftsForPets" element={<GiftsForPets />} />
            <Route path="/gifts/GiftsForGrandparents" element={<GiftsForGrandparents />} />

            {/* Gifts by Price */}

            <Route path="/gifts/GiftsUnder20" element={<GiftsUnder20 />} />
            <Route path="/gifts/GiftsUnder50" element={<GiftsUnder50 />} />
            <Route path="/gifts/GiftsUnder100" element={<GiftsUnder100 />} />

            {/* Shop by Occasion */}

            <Route path="/gifts/Birthday" element={<Birthday />} />
            <Route path="/gifts/Wedding" element={<Wedding />} />
            <Route path="/gifts/NewHome" element={<NewHome />} />
            <Route path="/gifts/Anniversary" element={<Anniversary />} />

            {/* Food & Drink Gifts */}
            <Route path="/gifts/ViewAllGiftFoodDrink" element={<ViewAllGiftFoodDrink />} />
            <Route path="/gifts/GiftsForGinLovers" element={<GiftsForGinLovers />} />
            <Route path="/gifts/CakesBiscuits" element={<CakesBiscuits />} />
            <Route path="/gifts/SweetsFudge" element={<SweetsFudge />} />
            <Route path="/gifts/Hampers" element={<Hampers />} />
            <Route path="/gifts/Chocolate" element={<Chocolate />} />
            <Route path="/gifts/Alcohol" element={<Alcohol />} />

            {/* Popular Gifts */}

            <Route path="/gifts/BeautyFragranceGifts" element={<BeautyFragranceGifts />} />
            <Route path="/gifts/GamesAndPuzzles" element={<GamesAndPuzzles />} />
            <Route path="/gifts/CandlesHomeFragrance" element={<CandlesHomeFragrance />} />
            <Route path="/gifts/CookingBaking" element={<CookingBaking />} />
            <Route path="/gifts/Gardening" element={<Gardening />} />
            <Route path="/gifts/GiftWrapPartyShop" element={<GiftWrapPartyShop />} />

            {/* GIFT INSPIRATION */}
            <Route path="/gifts/LuxuryGifts" element={<LuxuryGifts />} />
            <Route path="/gifts/Techies" element={<Techies />} />







            <Route path="/HomeAndGarden" element={<HomeAndGarden />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/FurnitureAndLighting" element={<FurnitureAndLighting />} />
            <Route path="/Electricals" element={<Electricals />} />
            <Route path="/sportAndLeisure" element={<SportAndLeisure />} />
            <Route path="/Gifts" element={<Gifts />} />

            {/* YOUR ACCOUNT */}

            <Route path="/profile" element={<YourAccount />} />
            <Route path="/addProduct" element={<AdminRoute><AddProduct /></AdminRoute>} />
            <Route path="/details/:productId" element={<PlaceOrder />} />
            <Route path="/ChangePass" element={<ChangePass />} />
            <Route path="/forgotPass" element={<ForgotPass />} />
            <Route path="/addressBook" element={<AddressBook />} />
            <Route path="/myDetails" element={<MyDetails />} />
            <Route path="/myFiles" element={<MyFiles />} />
            <Route path="/:searchText" element={<SearchResult />} />
            <Route path="/orderHistory" element={<OrderHistory />} />
            <Route path="/allOrderHistory" element={<AdminRoute><AllOrderHistory /></AdminRoute>} />
            <Route path="/updateDetails/:profileId" element={<UpdateDetails />} />
            <Route path="/addDetails" element={<AddDetails />} />
            <Route path="/manageProducts" element={<AdminRoute><ManageProducts /></AdminRoute>} />
            <Route path="/payment-option" element={<PaymentOptionDetails />} />
            <Route path="/brand/aptamil" element={<Aptamil />} />
            <Route path="/brand/babyClub" element={<BabyClub />} />
            <Route path="/brand/britax" element={<Britax />} />
            <Route path="/brand/fitflop" element={<FitFlop />} />
            <Route path="/brand/gucci" element={<Gucci />} />
            <Route path="/brand/hipp" element={<Hipp />} />
            <Route path="/brand/jole" element={<Jole />} />
            <Route path="/brand/levis" element={<Levis />} />
            <Route path="/brand/maxiCosi" element={<MaxiCosi />} />
            <Route path="/brand/phaseEight" element={<PhaseEight />} />
            <Route path="/brand/tedBaker" element={<TedBaker />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
