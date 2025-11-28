import carEngineOilChange from "../assets/carserviceimages/Engineoilchange.jpeg";
import carEngineFlush from "../assets/carserviceimages/Engineflush.jpeg";
import carSteeringOilCheck from "../assets/carserviceimages/Steeringoilcheck.jpeg";
import carGearOilCheck from "../assets/carserviceimages/Gearoilcheck.jpeg";
import carAirFilterCheck from "../assets/carserviceimages/Airfiltercheck.jpeg";
import carOilFilterCheck from "../assets/carserviceimages/Oilfiltercheck.jpeg";
import carSparkPlugsCheck from "../assets/carserviceimages/Sparkplugscheck.jpeg";
import carCoolantCheck from "../assets/carserviceimages/Coolantcheck.jpeg";
import carFullBodyWash from "../assets/carserviceimages/Fullbodywash.jpeg";
import carHeadlightBuffing from "../assets/carserviceimages/Complementaryhead&taillightsbuffing.jpeg";
import carEngineServices from "../assets/carserviceimages/Alltypesofenginemechanical&electricalservices.jpeg";
import carEngineReplacement from "../assets/carserviceimages/Enginereplacement&restoration.jpeg";
import carPPF from "../assets/carserviceimages/PPF.jpeg";
import carCeramicCoating from "../assets/carserviceimages/Borophene,graphene&ceramiccoating–3,5,8yearswarranty.jpeg";

import bikeEngineOil from "../assets/bikeservicesimages/Engineoil.jpg";
import bikeEngineFlush from "../assets/bikeservicesimages/Engineflush.jpg";
import bikeGearOil from "../assets/bikeservicesimages/Gearoil.jpg";
import bikeBrakeOil from "../assets/bikeservicesimages/Brakeoil.jpg";
import bikeClutchBrakesCheck from "../assets/bikeservicesimages/Clutch&brakescheck.jpg";
import bikeAirFilter from "../assets/bikeservicesimages/Airfilter.jpg";
import bikeOilFilter from "../assets/bikeservicesimages/Oilfilter.jpg";
import bikeHeadlightBuffing from "../assets/bikeservicesimages/Complementaryheadlightbuffing.jpg";
import bikeEngineServices from "../assets/bikeservicesimages/Enginemechanical&electricalservices.jpg";
import bikePPF from "../assets/bikeservicesimages/PPF.jpg";
import bikeCeramicCoating from "../assets/bikeservicesimages/Borophene,graphene&ceramiccoating.jpg";

export const servicesData = {
  car: [
    {
      category: "Car Mechanical Services",
      services: [
        { name: "Engine oil change", image: carEngineOilChange },
        { name: "Engine flush", image: carEngineFlush },
        { name: "Steering oil check", image: carSteeringOilCheck },
        { name: "Gear oil check", image: carGearOilCheck },
        { name: "Brake oil check", image: null },
        { name: "Air filter check", image: carAirFilterCheck },
        { name: "Oil filter check", image: carOilFilterCheck },
        { name: "Spark plugs check", image: carSparkPlugsCheck },
        { name: "Coolant check", image: carCoolantCheck },
        { name: "Full body wash", image: carFullBodyWash },
        {
          name: "Complementary head & tail lights buffing",
          image: carHeadlightBuffing,
        },
        {
          name: "All types of engine mechanical & electrical services",
          image: carEngineServices,
        },
        {
          name: "Engine replacement & restoration",
          image: carEngineReplacement,
        },
      ],
    },
    {
      category: "Car Detailing Services",
      services: [
        {
          name: "PPF (Paint Protection Film) – 5, 7, 10 years warranty",
          image: carPPF,
        },
        {
          name: "Borophene, graphene & ceramic coating – 3, 5, 8 years warranty",
          image: carCeramicCoating,
        },
        { name: "Teflon coating (paint correction package)", image: null },
        { name: "Full interior & exterior steam wash", image: null },
        { name: "Ceramic wax coating – lasts up to 1 year", image: null },
      ],
    },
  ],

  bike: [
    {
      category: "Bike Mechanical Services",
      services: [
        { name: "Engine oil", image: bikeEngineOil },
        { name: "Engine flush", image: bikeEngineFlush },
        { name: "Gear oil", image: bikeGearOil },
        { name: "Brake oil", image: bikeBrakeOil },
        { name: "Clutch & brakes check", image: bikeClutchBrakesCheck },
        { name: "Air filter", image: bikeAirFilter },
        { name: "Oil filter", image: bikeOilFilter },
        { name: "Detail wash", image: null },
        {
          name: "Complementary headlight buffing",
          image: bikeHeadlightBuffing,
        },
        {
          name: "Engine mechanical & electrical services",
          image: bikeEngineServices,
        },
        { name: "Engine replacement & restoration", image: null },
      ],
    },
    {
      category: "Bike Detailing Services",
      services: [
        {
          name: "PPF (Paint Protection Film) – 3 years warranty",
          image: bikePPF,
        },
        {
          name: "Borophene, graphene & ceramic coating – 3 years warranty",
          image: bikeCeramicCoating,
        },
        {
          name: "Teflon coating for engine silencer & full body",
          image: null,
        },
        { name: "Full body detailing & coating", image: null },
      ],
    },
    {
      category: "Bike Modification Services",
      services: [
        { name: "Lights upgrades", image: null },
        { name: "Body kits installation", image: null },
        { name: "Custom wraps, denting & painting", image: null },
        { name: "Pickup & drop service – FREE", image: null },
      ],
    },
  ],
};