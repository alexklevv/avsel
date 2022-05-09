import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import {Mark, MarkDocument} from "../schemas/mark.schema";

@Injectable()
export class MarkSeed {
    constructor(
        @InjectModel(Mark.name) private markModel: Model<MarkDocument>,
    ) { }

    @Command({ command: 'create:marks', describe: 'create marks' })
    async create() {
        const insertedMarks = await this.markModel.insertMany(
            [
                {
                    "id": "1",
                    "systemId": "AC",
                    "name": "AC"
                },
                {
                    "id": "2",
                    "systemId": "AMC",
                    "name": "AMC"
                },
                {
                    "id": "3",
                    "systemId": "ACURA",
                    "name": "Acura"
                },
                {
                    "id": "4",
                    "systemId": "ALFA_ROMEO",
                    "name": "Alfa Romeo"
                },
                {
                    "id": "5",
                    "systemId": "ALPINA",
                    "name": "Alpina"
                },
                {
                    "id": "6",
                    "systemId": "ASTON_MARTIN",
                    "name": "Aston Martin"
                },
                {
                    "id": "7",
                    "systemId": "AUDI",
                    "name": "Audi"
                },
                {
                    "id": "8",
                    "systemId": "BMW",
                    "name": "BMW"
                },
                {
                    "id": "9",
                    "systemId": "BYD",
                    "name": "BYD"
                },
                {
                    "id": "10",
                    "systemId": "BAJAJ",
                    "name": "Bajaj"
                },
                {
                    "id": "11",
                    "systemId": "BENTLEY",
                    "name": "Bentley"
                },
                {
                    "id": "12",
                    "systemId": "BORGWARD",
                    "name": "Borgward"
                },
                {
                    "id": "13",
                    "systemId": "BRILLIANCE",
                    "name": "Brilliance"
                },
                {
                    "id": "14",
                    "systemId": "BUICK",
                    "name": "Buick"
                },
                {
                    "id": "15",
                    "systemId": "CADILLAC",
                    "name": "Cadillac"
                },
                {
                    "id": "16",
                    "systemId": "CHANGAN",
                    "name": "Changan"
                },
                {
                    "id": "17",
                    "systemId": "CHERY",
                    "name": "Chery"
                },
                {
                    "id": "18",
                    "systemId": "CHEVROLET",
                    "name": "Chevrolet"
                },
                {
                    "id": "19",
                    "systemId": "CHRYSLER",
                    "name": "Chrysler"
                },
                {
                    "id": "20",
                    "systemId": "CITROEN",
                    "name": "Citroen"
                },
                {
                    "id": "21",
                    "systemId": "DKW",
                    "name": "DKW"
                },
                {
                    "id": "22",
                    "systemId": "DS",
                    "name": "DS"
                },
                {
                    "id": "23",
                    "systemId": "DW_HOWER",
                    "name": "DW Hower"
                },
                {
                    "id": "24",
                    "systemId": "DACIA",
                    "name": "Dacia"
                },
                {
                    "id": "25",
                    "systemId": "DAEWOO",
                    "name": "Daewoo"
                },
                {
                    "id": "26",
                    "systemId": "DAIHATSU",
                    "name": "Daihatsu"
                },
                {
                    "id": "27",
                    "systemId": "DAIMLER",
                    "name": "Daimler"
                },
                {
                    "id": "28",
                    "systemId": "DALLARA",
                    "name": "Dallara"
                },
                {
                    "id": "29",
                    "systemId": "DATSUN",
                    "name": "Datsun"
                },
                {
                    "id": "30",
                    "systemId": "DE_TOMASO",
                    "name": "De Tomaso"
                },
                {
                    "id": "31",
                    "systemId": "DELAGE",
                    "name": "Delage"
                },
                {
                    "id": "32",
                    "systemId": "DERWAYS",
                    "name": "Derways"
                },
                {
                    "id": "33",
                    "systemId": "DODGE",
                    "name": "Dodge"
                },
                {
                    "id": "34",
                    "systemId": "DONGFENG",
                    "name": "DongFeng"
                },
                {
                    "id": "35",
                    "systemId": "DONINVEST",
                    "name": "Doninvest"
                },
                {
                    "id": "36",
                    "systemId": "EAGLE",
                    "name": "Eagle"
                },
                {
                    "id": "37",
                    "systemId": "EXCALIBUR",
                    "name": "Excalibur"
                },
                {
                    "id": "38",
                    "systemId": "FAW",
                    "name": "FAW"
                },
                {
                    "id": "39",
                    "systemId": "FERRARI",
                    "name": "Ferrari"
                },
                {
                    "id": "40",
                    "systemId": "FIAT",
                    "name": "Fiat"
                },
                {
                    "id": "41",
                    "systemId": "FORD",
                    "name": "Ford"
                },
                {
                    "id": "42",
                    "systemId": "FOTON",
                    "name": "Foton"
                },
                {
                    "id": "43",
                    "systemId": "GAC",
                    "name": "GAC"
                },
                {
                    "id": "44",
                    "systemId": "GMC",
                    "name": "GMC"
                },
                {
                    "id": "45",
                    "systemId": "GEELY",
                    "name": "Geely"
                },
                {
                    "id": "46",
                    "systemId": "GENESIS",
                    "name": "Genesis"
                },
                {
                    "id": "47",
                    "systemId": "GREAT_WALL",
                    "name": "Great Wall"
                },
                {
                    "id": "48",
                    "systemId": "HAFEI",
                    "name": "Hafei"
                },
                {
                    "id": "49",
                    "systemId": "HAIMA",
                    "name": "Haima"
                },
                {
                    "id": "50",
                    "systemId": "HAVAL",
                    "name": "Haval"
                },
                {
                    "id": "51",
                    "systemId": "HAWTAI",
                    "name": "Hawtai"
                },
                {
                    "id": "52",
                    "systemId": "HEINKEL",
                    "name": "Heinkel"
                },
                {
                    "id": "53",
                    "systemId": "HONDA",
                    "name": "Honda"
                },
                {
                    "id": "54",
                    "systemId": "HUMMER",
                    "name": "Hummer"
                },
                {
                    "id": "55",
                    "systemId": "HYUNDAI",
                    "name": "Hyundai"
                },
                {
                    "id": "56",
                    "systemId": "INFINITY",
                    "name": "Infinity"
                },
                {
                    "id": "57",
                    "systemId": "IRAN_KHODRO",
                    "name": "Iran Khodro"
                },
                {
                    "id": "58",
                    "systemId": "ISUZU",
                    "name": "Isuzu"
                },
                {
                    "id": "59",
                    "systemId": "JAC",
                    "name": "JAC"
                },
                {
                    "id": "60",
                    "systemId": "JMC",
                    "name": "JMC"
                },
                {
                    "id": "61",
                    "systemId": "JAGUAR",
                    "name": "Jaguar"
                },
                {
                    "id": "62",
                    "systemId": "JEEP",
                    "name": "Jeep"
                },
                {
                    "id": "63",
                    "systemId": "KIA",
                    "name": "Kia"
                },
                {
                    "id": "64",
                    "systemId": "LADA",
                    "name": "Lada"
                },
                {
                    "id": "65",
                    "systemId": "LAMBORGHINI",
                    "name": "Lamborghini"
                },
                {
                    "id": "66",
                    "systemId": "LANCIA",
                    "name": "Lancia"
                },
                {
                    "id": "67",
                    "systemId": "LAND_ROVER",
                    "name": "Land Rover"
                },
                {
                    "id": "68",
                    "systemId": "LEXUS",
                    "name": "Lexus"
                },
                {
                    "id": "69",
                    "systemId": "LIFAN",
                    "name": "Lifan"
                },
                {
                    "id": "70",
                    "systemId": "LINCOLN",
                    "name": "Lincoln"
                },
                {
                    "id": "71",
                    "systemId": "LUXGEN",
                    "name": "Luxgen"
                },
                {
                    "id": "72",
                    "systemId": "MG",
                    "name": "MG"
                },
                {
                    "id": "73",
                    "systemId": "MINI",
                    "name": "MINI"
                },
                {
                    "id": "74",
                    "systemId": "MAHINDRA",
                    "name": "Mahindra"
                },
                {
                    "id": "75",
                    "systemId": "MASERATI",
                    "name": "Maserati"
                },
                {
                    "id": "76",
                    "systemId": "MAYBACH",
                    "name": "Maybach"
                },
                {
                    "id": "77",
                    "systemId": "MAZDA",
                    "name": "Mazda"
                },
                {
                    "id": "78",
                    "systemId": "MCLAREN",
                    "name": "McLaren"
                },
                {
                    "id": "79",
                    "systemId": "MERCEDES-BENZ",
                    "name": "Mercedes-Benz"
                },
                {
                    "id": "80",
                    "systemId": "MERCURY",
                    "name": "Mercury"
                },
                {
                    "id": "81",
                    "systemId": "METROCAB",
                    "name": "Metrocab"
                },
                {
                    "id": "82",
                    "systemId": "MITSUBISHI",
                    "name": "Mitsubishi"
                },
                {
                    "id": "83",
                    "systemId": "MITSUOKA",
                    "name": "Mitsuoka"
                },
                {
                    "id": "84",
                    "systemId": "NISSAN",
                    "name": "Nissan"
                },
                {
                    "id": "85",
                    "systemId": "OLDSMOBILE",
                    "name": "Oldsmobile"
                },
                {
                    "id": "86",
                    "systemId": "OPEL",
                    "name": "Opel"
                },
                {
                    "id": "87",
                    "systemId": "PUCH",
                    "name": "PUCH"
                },
                {
                    "id": "88",
                    "systemId": "PACKARD",
                    "name": "Packard"
                },
                {
                    "id": "89",
                    "systemId": "PEUGEOT",
                    "name": "Peugeot"
                },
                {
                    "id": "90",
                    "systemId": "PLYMOUTH",
                    "name": "Plymouth"
                },
                {
                    "id": "91",
                    "systemId": "PONTIAC",
                    "name": "Pontiac"
                },
                {
                    "id": "92",
                    "systemId": "PORSCHE",
                    "name": "Porsche"
                },
                {
                    "id": "93",
                    "systemId": "PROTON",
                    "name": "Proton"
                },
                {
                    "id": "94",
                    "systemId": "RAVON",
                    "name": "Ravon"
                },
                {
                    "id": "95",
                    "systemId": "RENAULT",
                    "name": "Renault"
                },
                {
                    "id": "96",
                    "systemId": "ROLLS-ROYCE",
                    "name": "Rolls-Royce"
                },
                {
                    "id": "97",
                    "systemId": "ROVER",
                    "name": "Rover"
                },
                {
                    "id": "98",
                    "systemId": "SEAT",
                    "name": "SEAT"
                },
                {
                    "id": "99",
                    "systemId": "SAAB",
                    "name": "Saab"
                },
                {
                    "id": "100",
                    "systemId": "SALEEN",
                    "name": "Saleen"
                },
                {
                    "id": "101",
                    "systemId": "SATURN",
                    "name": "Saturn"
                },
                {
                    "id": "102",
                    "systemId": "SCION",
                    "name": "Scion"
                },
                {
                    "id": "103",
                    "systemId": "SHANGHAI_MAPLE",
                    "name": "Shanghai Maple"
                },
                {
                    "id": "104",
                    "systemId": "SKODA",
                    "name": "Skoda"
                },
                {
                    "id": "105",
                    "systemId": "SMART",
                    "name": "Smart"
                },
                {
                    "id": "106",
                    "systemId": "SSANGYONG",
                    "name": "SsangYong"
                },
                {
                    "id": "107",
                    "systemId": "STEYR",
                    "name": "Steyr"
                },
                {
                    "id": "108",
                    "systemId": "SUBARU",
                    "name": "Subaru"
                },
                {
                    "id": "109",
                    "systemId": "SUZUKI",
                    "name": "Suzuki"
                },
                {
                    "id": "110",
                    "systemId": "TATRA",
                    "name": "Tatra"
                },
                {
                    "id": "111",
                    "systemId": "TESLA",
                    "name": "Tesla"
                },
                {
                    "id": "112",
                    "systemId": "TIANMA",
                    "name": "Tianma"
                },
                {
                    "id": "113",
                    "systemId": "TIANYE",
                    "name": "Tianye"
                },
                {
                    "id": "114",
                    "systemId": "TOYOTA",
                    "name": "Toyota"
                },
                {
                    "id": "115",
                    "systemId": "TRIUMPH",
                    "name": "Triumph"
                },
                {
                    "id": "116",
                    "systemId": "VOLKSWAGEN",
                    "name": "Volkswagen"
                },
                {
                    "id": "117",
                    "systemId": "VOLVO",
                    "name": "Volvo"
                },
                {
                    "id": "118",
                    "systemId": "VORTEX",
                    "name": "Vortex"
                },
                {
                    "id": "119",
                    "systemId": "WILLYS",
                    "name": "Willys"
                },
                {
                    "id": "120",
                    "systemId": "XIN_KAI",
                    "name": "Xin_Kai"
                },
                {
                    "id": "121",
                    "systemId": "ZX",
                    "name": "ZX"
                },
                {
                    "id": "122",
                    "systemId": "ZOTYE",
                    "name": "Zotye"
                },
                {
                    "id": "123",
                    "systemId": "GAZ",
                    "name": "ГАЗ"
                },
                {
                    "id": "124",
                    "systemId": "PROMO_AUTO",
                    "name": "Гоночный болид"
                },
                {
                    "id": "125",
                    "systemId": "ZAZ",
                    "name": "ЗАЗ"
                },
                {
                    "id": "126",
                    "systemId": "ZIL",
                    "name": "ЗИЛ"
                },
                {
                    "id": "127",
                    "systemId": "ZIS",
                    "name": "ЗиС"
                },
                {
                    "id": "128",
                    "systemId": "IJ",
                    "name": "ИЖ"
                },
                {
                    "id": "129",
                    "systemId": "COMBAT",
                    "name": "Комбат"
                },
                {
                    "id": "130",
                    "systemId": "LUAZ",
                    "name": "ЛуАЗ"
                },
                {
                    "id": "131",
                    "systemId": "MOSCOW",
                    "name": "Москвич"
                },
                {
                    "id": "132",
                    "systemId": "SMZ",
                    "name": "СМЗ"
                },
                {
                    "id": "133",
                    "systemId": "TAGAZ",
                    "name": "ТагАЗ"
                },
                {
                    "id": "134",
                    "systemId": "UAZ",
                    "name": "УАЗ"
                }
            ]
        );
        console.log('created marks: ', insertedMarks);
    }
}