import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { Model as MongooseModel } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import {Model, ModelDocument} from "../schemas/model.schema";

@Injectable()
export class ModelSeed {
    constructor(
        @InjectModel(Model.name) private modelModel: MongooseModel<ModelDocument>,
    ) { }

    @Command({ command: 'create:models', describe: 'create models' })
    async create() {
        const insertedModels = await this.modelModel.insertMany(
            [
                {
                    "id": "1",
                    "markId": "68",
                    "systemId": "CT",
                    "name": "CT"
                },
                {
                    "id": "2",
                    "markId": "68",
                    "systemId": "ES",
                    "name": "ES"
                },
                {
                    "id": "3",
                    "markId": "68",
                    "systemId": "GS",
                    "name": "GS"
                },
                {
                    "id": "4",
                    "markId": "68",
                    "systemId": "GS_F",
                    "name": "GS F"
                },
                {
                    "id": "5",
                    "markId": "68",
                    "systemId": "GX",
                    "name": "GX"
                },
                {
                    "id": "6",
                    "markId": "68",
                    "systemId": "HS",
                    "name": "HS"
                },
                {
                    "id": "7",
                    "markId": "68",
                    "systemId": "IS",
                    "name": "IS"
                },
                {
                    "id": "8",
                    "markId": "68",
                    "systemId": "IS_F",
                    "name": "IS F"
                },
                {
                    "id": "9",
                    "markId": "68",
                    "systemId": "LC",
                    "name": "LC"
                },
                {
                    "id": "10",
                    "markId": "68",
                    "systemId": "LFA",
                    "name": "LFA"
                },
                {
                    "id": "11",
                    "markId": "68",
                    "systemId": "LS",
                    "name": "LS"
                },
                {
                    "id": "12",
                    "markId": "68",
                    "systemId": "LX",
                    "name": "LX"
                },
                {
                    "id": "13",
                    "markId": "68",
                    "systemId": "NX",
                    "name": "NX"
                },
                {
                    "id": "14",
                    "markId": "68",
                    "systemId": "RC",
                    "name": "RC"
                },
                {
                    "id": "15",
                    "markId": "68",
                    "systemId": "RC_F",
                    "name": "RC F"
                },
                {
                    "id": "16",
                    "markId": "68",
                    "systemId": "RX",
                    "name": "RX"
                },
                {
                    "id": "17",
                    "markId": "68",
                    "systemId": "SC",
                    "name": "SC"
                },
                {
                    "id": "18",
                    "markId": "68",
                    "systemId": "UX",
                    "name": "UX"
                },
                {
                    "id": "19",
                    "markId": "84",
                    "systemId": "100NX",
                    "name": "100NX"
                },
                {
                    "id": "20",
                    "markId": "84",
                    "systemId": "180SX",
                    "name": "180SX"
                },
                {
                    "id": "21",
                    "markId": "84",
                    "systemId": "200SX",
                    "name": "200SX"
                },
                {
                    "id": "22",
                    "markId": "84",
                    "systemId": "240SX",
                    "name": "240SX"
                },
                {
                    "id": "23",
                    "markId": "84",
                    "systemId": "280ZX",
                    "name": "280ZX"
                },
                {
                    "id": "24",
                    "markId": "84",
                    "systemId": "300ZX",
                    "name": "300ZX"
                },
                {
                    "id": "25",
                    "markId": "84",
                    "systemId": "350Z",
                    "name": "350Z"
                },
                {
                    "id": "26",
                    "markId": "84",
                    "systemId": "370Z",
                    "name": "370Z"
                },
                {
                    "id": "27",
                    "markId": "84",
                    "systemId": "AD",
                    "name": "AD"
                },
                {
                    "id": "28",
                    "markId": "84",
                    "systemId": "ALMERA",
                    "name": "Almera"
                },
                {
                    "id": "29",
                    "markId": "84",
                    "systemId": "ALMERA_CLASSIC",
                    "name": "Almera Classic"
                },
                {
                    "id": "30",
                    "markId": "84",
                    "systemId": "ALTIMA",
                    "name": "Altima"
                },
                {
                    "id": "31",
                    "markId": "84",
                    "systemId": "ARMADA",
                    "name": "Armada"
                },
                {
                    "id": "32",
                    "markId": "84",
                    "systemId": "AUSTER",
                    "name": "Auster"
                },
                {
                    "id": "33",
                    "markId": "84",
                    "systemId": "AVENIR",
                    "name": "Avenir"
                },
                {
                    "id": "34",
                    "markId": "84",
                    "systemId": "BASSARA",
                    "name": "Bassara"
                },
                {
                    "id": "35",
                    "markId": "84",
                    "systemId": "BE-1",
                    "name": "BE-1"
                },
                {
                    "id": "36",
                    "markId": "84",
                    "systemId": "BLUEBIRD",
                    "name": "Bluebird"
                },
                {
                    "id": "37",
                    "markId": "84",
                    "systemId": "BLUEBIRD_MAXIMA",
                    "name": "Bluebird Maxima"
                },
                {
                    "id": "38",
                    "markId": "84",
                    "systemId": "BLUEBIRD_SYLPHY",
                    "name": "Bluebird Sylphy"
                },
                {
                    "id": "39",
                    "markId": "84",
                    "systemId": "CARAVAN",
                    "name": "Caravan"
                },
                {
                    "id": "40",
                    "markId": "84",
                    "systemId": "CEDRIC",
                    "name": "Cedric"
                },
                {
                    "id": "41",
                    "markId": "84",
                    "systemId": "CEFIRO",
                    "name": "Cefiro"
                },
                {
                    "id": "42",
                    "markId": "84",
                    "systemId": "CHERRY",
                    "name": "Cherry"
                },
                {
                    "id": "43",
                    "markId": "84",
                    "systemId": "CIMA",
                    "name": "Cima"
                },
                {
                    "id": "44",
                    "markId": "84",
                    "systemId": "CLIPPER_RIO",
                    "name": "Clipper Rio"
                },
                {
                    "id": "45",
                    "markId": "84",
                    "systemId": "CREW",
                    "name": "Crew"
                },
                {
                    "id": "46",
                    "markId": "84",
                    "systemId": "CUBE",
                    "name": "Cube"
                },
                {
                    "id": "47",
                    "markId": "84",
                    "systemId": "DATSUN",
                    "name": "Datsun"
                },
                {
                    "id": "48",
                    "markId": "84",
                    "systemId": "DAYZ",
                    "name": "Dayz"
                },
                {
                    "id": "49",
                    "markId": "84",
                    "systemId": "DAYZ_ROOX",
                    "name": "Dayz Roox"
                },
                {
                    "id": "50",
                    "markId": "84",
                    "systemId": "DUALIS",
                    "name": "Dualis"
                },
                {
                    "id": "51",
                    "markId": "84",
                    "systemId": "ELGRAND",
                    "name": "Elgrand"
                },
                {
                    "id": "52",
                    "markId": "84",
                    "systemId": "EXA",
                    "name": "Exa"
                },
                {
                    "id": "53",
                    "markId": "84",
                    "systemId": "EXPERT",
                    "name": "Expert"
                },
                {
                    "id": "54",
                    "markId": "84",
                    "systemId": "FAIRLADY Z",
                    "name": "Fairlady Z"
                },
                {
                    "id": "55",
                    "markId": "84",
                    "systemId": "FIGARO",
                    "name": "Figaro"
                },
                {
                    "id": "56",
                    "markId": "84",
                    "systemId": "FUGA",
                    "name": "Fuga"
                },
                {
                    "id": "57",
                    "markId": "84",
                    "systemId": "GLORIA",
                    "name": "Gloria"
                },
                {
                    "id": "58",
                    "markId": "84",
                    "systemId": "GT-R",
                    "name": "GT-R"
                },
                {
                    "id": "59",
                    "markId": "84",
                    "systemId": "HOMY",
                    "name": "Homy"
                },
                {
                    "id": "60",
                    "markId": "84",
                    "systemId": "HYPERMINI",
                    "name": "Hypermini"
                },
                {
                    "id": "61",
                    "markId": "84",
                    "systemId": "JUKE",
                    "name": "Juke"
                },
                {
                    "id": "62",
                    "markId": "84",
                    "systemId": "JUKE NISMO",
                    "name": "Juke Nismo"
                },
                {
                    "id": "63",
                    "markId": "84",
                    "systemId": "KICKS",
                    "name": "Kicks"
                },
                {
                    "id": "64",
                    "markId": "84",
                    "systemId": "KIX",
                    "name": "Kix"
                },
                {
                    "id": "65",
                    "markId": "84",
                    "systemId": "LAFESTA",
                    "name": "Lafesta"
                },
                {
                    "id": "66",
                    "markId": "84",
                    "systemId": "LANGLEY",
                    "name": "Langley"
                },
                {
                    "id": "67",
                    "markId": "84",
                    "systemId": "LARGO",
                    "name": "Largo"
                },
                {
                    "id": "68",
                    "markId": "84",
                    "systemId": "LATIO",
                    "name": "Latio"
                },
                {
                    "id": "69",
                    "markId": "84",
                    "systemId": "LAUREL",
                    "name": "Laurel"
                },
                {
                    "id": "70",
                    "markId": "84",
                    "systemId": "LEAF",
                    "name": "Leaf"
                },
                {
                    "id": "71",
                    "markId": "84",
                    "systemId": "LEOPARD",
                    "name": "Leopard"
                },
                {
                    "id": "72",
                    "markId": "84",
                    "systemId": "LIBERTA VILLA",
                    "name": "Liberta Villa"
                },
                {
                    "id": "73",
                    "markId": "84",
                    "systemId": "LIBERTY",
                    "name": "Liberty"
                },
                {
                    "id": "74",
                    "markId": "84",
                    "systemId": "LIVINA",
                    "name": "Livina"
                },
                {
                    "id": "75",
                    "markId": "84",
                    "systemId": "LUCINO",
                    "name": "Lucino"
                },
                {
                    "id": "76",
                    "markId": "84",
                    "systemId": "MARCH",
                    "name": "March"
                },
                {
                    "id": "77",
                    "markId": "84",
                    "systemId": "MAXIMA",
                    "name": "Maxima"
                },
                {
                    "id": "78",
                    "markId": "84",
                    "systemId": "MICRA",
                    "name": "Micra"
                },
                {
                    "id": "79",
                    "markId": "84",
                    "systemId": "MISTRAL",
                    "name": "Mistral"
                },
                {
                    "id": "80",
                    "markId": "84",
                    "systemId": "MOCO",
                    "name": "Moco"
                },
                {
                    "id": "81",
                    "markId": "84",
                    "systemId": "MURANO",
                    "name": "Murano"
                },
                {
                    "id": "82",
                    "markId": "84",
                    "systemId": "NAVARA(FRONTIER)",
                    "name": "NAVARA(FRONTIER)"
                },
                {
                    "id": "83",
                    "markId": "84",
                    "systemId": "NOTE",
                    "name": "Note"
                },
                {
                    "id": "84",
                    "markId": "84",
                    "systemId": "NP300",
                    "name": "NP300"
                },
                {
                    "id": "85",
                    "markId": "84",
                    "systemId": "NV100 Clipper",
                    "name": "NV100 Clipper"
                },
                {
                    "id": "86",
                    "markId": "84",
                    "systemId": "NV200",
                    "name": "NV200"
                },
                {
                    "id": "87",
                    "markId": "84",
                    "systemId": "NV350 Caravan",
                    "name": "NV350 Caravan"
                },
                {
                    "id": "88",
                    "markId": "84",
                    "systemId": "NX Coupe",
                    "name": "NX Coupe"
                },
                {
                    "id": "89",
                    "markId": "84",
                    "systemId": "OTTI",
                    "name": "Otti"
                },
                {
                    "id": "90",
                    "markId": "84",
                    "systemId": "PAO",
                    "name": "Pao"
                },
                {
                    "id": "91",
                    "markId": "84",
                    "systemId": "PATHFINDER",
                    "name": "Pathfinder"
                },
                {
                    "id": "92",
                    "markId": "84",
                    "systemId": "PATROL",
                    "name": "Patrol"
                },
                {
                    "id": "93",
                    "markId": "84",
                    "systemId": "PINO",
                    "name": "Pino"
                },
                {
                    "id": "94",
                    "markId": "84",
                    "systemId": "PIXO",
                    "name": "Pixo"
                },
                {
                    "id": "95",
                    "markId": "84",
                    "systemId": "PRAIRIE",
                    "name": "Prairie"
                },
                {
                    "id": "96",
                    "markId": "84",
                    "systemId": "PRESAGE",
                    "name": "Presage"
                },
                {
                    "id": "97",
                    "markId": "84",
                    "systemId": "PRESEA",
                    "name": "Presea"
                },
                {
                    "id": "98",
                    "markId": "84",
                    "systemId": "PRESIDENT",
                    "name": "President"
                },
                {
                    "id": "99",
                    "markId": "84",
                    "systemId": "PRIMASTAR",
                    "name": "Primastar"
                },
                {
                    "id": "100",
                    "markId": "84",
                    "systemId": "PRIMERA",
                    "name": "Primera"
                },
                {
                    "id": "101",
                    "markId": "84",
                    "systemId": "PULSAR",
                    "name": "Pulsar"
                },
                {
                    "id": "102",
                    "markId": "84",
                    "systemId": "QASHQAI",
                    "name": "Qashqai"
                },
                {
                    "id": "103",
                    "markId": "84",
                    "systemId": "QASHQAI+2",
                    "name": "Qashqai+2"
                },
                {
                    "id": "104",
                    "markId": "84",
                    "systemId": "QUEST",
                    "name": "Quest"
                },
                {
                    "id": "105",
                    "markId": "84",
                    "systemId": "{{208}}''{{209}}",
                    "name": "{{210}}''{{211}}"
                },
                {
                    "id": "106",
                    "markId": "84",
                    "systemId": "RASHEEN",
                    "name": "Rasheen"
                },
                {
                    "id": "107",
                    "markId": "84",
                    "systemId": "ROGUE",
                    "name": "Rogue"
                },
                {
                    "id": "108",
                    "markId": "84",
                    "systemId": "ROOX",
                    "name": "Roox"
                },
                {
                    "id": "109",
                    "markId": "84",
                    "systemId": "SAFARI",
                    "name": "Safari"
                },
                {
                    "id": "110",
                    "markId": "84",
                    "systemId": "SENTRA",
                    "name": "Sentra"
                },
                {
                    "id": "111",
                    "markId": "84",
                    "systemId": "SERENA",
                    "name": "Serena"
                },
                {
                    "id": "112",
                    "markId": "84",
                    "systemId": "SILVIA",
                    "name": "Silvia"
                },
                {
                    "id": "113",
                    "markId": "84",
                    "systemId": "SKYLINE",
                    "name": "Skyline"
                },
                {
                    "id": "114",
                    "markId": "84",
                    "systemId": "SKYLINE_CROSSOVER",
                    "name": "Skyline Crossover"
                },
                {
                    "id": "115",
                    "markId": "84",
                    "systemId": "STAGEA",
                    "name": "Stagea"
                },
                {
                    "id": "116",
                    "markId": "84",
                    "systemId": "STANZA",
                    "name": "Stanza"
                },
                {
                    "id": "117",
                    "markId": "84",
                    "systemId": "SUNNY",
                    "name": "Sunny"
                },
                {
                    "id": "118",
                    "markId": "84",
                    "systemId": "TEANA",
                    "name": "Teana"
                },
                {
                    "id": "119",
                    "markId": "84",
                    "systemId": "TERRA",
                    "name": "Terra"
                },
                {
                    "id": "120",
                    "markId": "84",
                    "systemId": "TERRANO",
                    "name": "Terrano"
                },
                {
                    "id": "121",
                    "markId": "84",
                    "systemId": "TERRANO_REGULUS",
                    "name": "Terrano Regulus"
                },
                {
                    "id": "122",
                    "markId": "84",
                    "systemId": "TIIDA",
                    "name": "Tiida"
                },
                {
                    "id": "123",
                    "markId": "84",
                    "systemId": "TINO",
                    "name": "Tino"
                },
                {
                    "id": "124",
                    "markId": "84",
                    "systemId": "TITAN",
                    "name": "Titan"
                },
                {
                    "id": "125",
                    "markId": "84",
                    "systemId": "URVAN",
                    "name": "Urvan"
                },
                {
                    "id": "126",
                    "markId": "84",
                    "systemId": "VANETTE",
                    "name": "Vanette"
                },
                {
                    "id": "127",
                    "markId": "84",
                    "systemId": "VERSA",
                    "name": "Versa"
                },
                {
                    "id": "128",
                    "markId": "84",
                    "systemId": "WINGROAD",
                    "name": "Wingroad"
                },
                {
                    "id": "129",
                    "markId": "84",
                    "systemId": "X-TRAIL",
                    "name": "X-Trail"
                },
                {
                    "id": "130",
                    "markId": "84",
                    "systemId": "XTERRA",
                    "name": "Xterra"
                },
                {
                    "id": "131",
                    "markId": "1",
                    "systemId": "378_GT_ZAGATO",
                    "name": "378 GT Zagato"
                },
                {
                    "id": "132",
                    "markId": "1",
                    "systemId": "ACE",
                    "name": "Ace"
                },
                {
                    "id": "133",
                    "markId": "1",
                    "systemId": "ACECA",
                    "name": "Aceca"
                },
                {
                    "id": "134",
                    "markId": "1",
                    "systemId": "COBRA",
                    "name": "Cobra"
                },
                {
                    "id": "135",
                    "markId": "3",
                    "systemId": "CL",
                    "name": "CL"
                },
                {
                    "id": "136",
                    "markId": "3",
                    "systemId": "CSX",
                    "name": "CSX"
                },
                {
                    "id": "137",
                    "markId": "3",
                    "systemId": "EL",
                    "name": "EL"
                },
                {
                    "id": "138",
                    "markId": "3",
                    "systemId": "ILX",
                    "name": "ILX"
                },
                {
                    "id": "139",
                    "markId": "3",
                    "systemId": "INTEGRA",
                    "name": "Integra"
                },
                {
                    "id": "140",
                    "markId": "3",
                    "systemId": "LEGEND",
                    "name": "Legend"
                },
                {
                    "id": "141",
                    "markId": "3",
                    "systemId": "MDX",
                    "name": "MDX"
                },
                {
                    "id": "142",
                    "markId": "3",
                    "systemId": "NSX",
                    "name": "NSX"
                },
                {
                    "id": "143",
                    "markId": "3",
                    "systemId": "RDX",
                    "name": "RDX"
                },
                {
                    "id": "144",
                    "markId": "3",
                    "systemId": "RL",
                    "name": "RL"
                },
                {
                    "id": "145",
                    "markId": "3",
                    "systemId": "RLX",
                    "name": "RLX"
                },
                {
                    "id": "146",
                    "markId": "3",
                    "systemId": "RSX",
                    "name": "RSX"
                },
                {
                    "id": "147",
                    "markId": "3",
                    "systemId": "SLX",
                    "name": "SLX"
                },
                {
                    "id": "148",
                    "markId": "3",
                    "systemId": "TL",
                    "name": "TL"
                },
                {
                    "id": "149",
                    "markId": "3",
                    "systemId": "TLX",
                    "name": "TLX"
                },
                {
                    "id": "150",
                    "markId": "3",
                    "systemId": "TSX",
                    "name": "TSX"
                },
                {
                    "id": "151",
                    "markId": "3",
                    "systemId": "ZDX",
                    "name": "ZDX"
                },
                {
                    "id": "154",
                    "markId": "4",
                    "systemId": "105/115",
                    "name": "105/115"
                },
                {
                    "id": "155",
                    "markId": "4",
                    "systemId": "145",
                    "name": "145"
                },
                {
                    "id": "156",
                    "markId": "4",
                    "systemId": "146",
                    "name": "146"
                },
                {
                    "id": "157",
                    "markId": "4",
                    "systemId": "147",
                    "name": "147"
                },
                {
                    "id": "158",
                    "markId": "4",
                    "systemId": "155",
                    "name": "155"
                },
                {
                    "id": "159",
                    "markId": "4",
                    "systemId": "156",
                    "name": "156"
                },
                {
                    "id": "160",
                    "markId": "4",
                    "systemId": "159",
                    "name": "159"
                },
                {
                    "id": "161",
                    "markId": "4",
                    "systemId": "164",
                    "name": "164"
                },
                {
                    "id": "162",
                    "markId": "4",
                    "systemId": "166",
                    "name": "166"
                },
                {
                    "id": "163",
                    "markId": "4",
                    "systemId": "1900",
                    "name": "1900"
                },
                {
                    "id": "164",
                    "markId": "4",
                    "systemId": "2600",
                    "name": "2600"
                },
                {
                    "id": "165",
                    "markId": "4",
                    "systemId": "33",
                    "name": "33"
                },
                {
                    "id": "166",
                    "markId": "4",
                    "systemId": "4C",
                    "name": "4C"
                },
                {
                    "id": "167",
                    "markId": "4",
                    "systemId": "6",
                    "name": "6"
                },
                {
                    "id": "168",
                    "markId": "4",
                    "systemId": "6C",
                    "name": "6C"
                },
                {
                    "id": "169",
                    "markId": "4",
                    "systemId": "75",
                    "name": "75"
                },
                {
                    "id": "170",
                    "markId": "4",
                    "systemId": "8C_COMPETIZIONE",
                    "name": "8C Competizione"
                },
                {
                    "id": "171",
                    "markId": "4",
                    "systemId": "90",
                    "name": "90"
                },
                {
                    "id": "172",
                    "markId": "4",
                    "systemId": "ALFASUD",
                    "name": "Alfasud"
                },
                {
                    "id": "173",
                    "markId": "4",
                    "systemId": "ALFETTA",
                    "name": "Alfetta"
                },
                {
                    "id": "174",
                    "markId": "4",
                    "systemId": "ARNA",
                    "name": "Arna"
                },
                {
                    "id": "175",
                    "markId": "4",
                    "systemId": "BRERA",
                    "name": "Brera"
                },
                {
                    "id": "176",
                    "markId": "4",
                    "systemId": "DISCO_VOLANTE",
                    "name": "Disco Volante"
                },
                {
                    "id": "177",
                    "markId": "4",
                    "systemId": "GIULIA",
                    "name": "Giulia"
                },
                {
                    "id": "178",
                    "markId": "4",
                    "systemId": "GIULIETTA",
                    "name": "Giulietta"
                },
                {
                    "id": "179",
                    "markId": "4",
                    "systemId": "GT",
                    "name": "GT"
                },
                {
                    "id": "180",
                    "markId": "4",
                    "systemId": "GTA_COUPE",
                    "name": "GTA Coupe"
                },
                {
                    "id": "181",
                    "markId": "4",
                    "systemId": "GTV",
                    "name": "GTV"
                },
                {
                    "id": "182",
                    "markId": "4",
                    "systemId": "MITO",
                    "name": "MiTo"
                },
                {
                    "id": "183",
                    "markId": "4",
                    "systemId": "MONTREAL",
                    "name": "Montreal"
                },
                {
                    "id": "184",
                    "markId": "4",
                    "systemId": "RZ",
                    "name": "RZ"
                },
                {
                    "id": "185",
                    "markId": "4",
                    "systemId": "SPIDER",
                    "name": "Spider"
                },
                {
                    "id": "186",
                    "markId": "4",
                    "systemId": "SPRINT",
                    "name": "Sprint"
                },
                {
                    "id": "187",
                    "markId": "4",
                    "systemId": "STELVIO",
                    "name": "Stelvio"
                },
                {
                    "id": "188",
                    "markId": "4",
                    "systemId": "SZ",
                    "name": "SZ"
                },
                {
                    "id": "189",
                    "markId": "5",
                    "systemId": "B10",
                    "name": "B10"
                },
                {
                    "id": "190",
                    "markId": "5",
                    "systemId": "B11",
                    "name": "B11"
                },
                {
                    "id": "191",
                    "markId": "5",
                    "systemId": "B12",
                    "name": "B12"
                },
                {
                    "id": "192",
                    "markId": "5",
                    "systemId": "B3",
                    "name": "B3"
                },
                {
                    "id": "193",
                    "markId": "5",
                    "systemId": "B4",
                    "name": "B4"
                },
                {
                    "id": "194",
                    "markId": "5",
                    "systemId": "B5",
                    "name": "B5"
                },
                {
                    "id": "195",
                    "markId": "5",
                    "systemId": "B6",
                    "name": "B6"
                },
                {
                    "id": "196",
                    "markId": "5",
                    "systemId": "B7",
                    "name": "B7"
                },
                {
                    "id": "197",
                    "markId": "5",
                    "systemId": "B8",
                    "name": "B8"
                },
                {
                    "id": "198",
                    "markId": "5",
                    "systemId": "B9",
                    "name": "B9"
                },
                {
                    "id": "199",
                    "markId": "5",
                    "systemId": "C1",
                    "name": "C1"
                },
                {
                    "id": "200",
                    "markId": "5",
                    "systemId": "C2",
                    "name": "C2"
                },
                {
                    "id": "201",
                    "markId": "5",
                    "systemId": "D10",
                    "name": "D10"
                },
                {
                    "id": "202",
                    "markId": "5",
                    "systemId": "D3",
                    "name": "D3"
                },
                {
                    "id": "203",
                    "markId": "5",
                    "systemId": "D4",
                    "name": "D4"
                },
                {
                    "id": "204",
                    "markId": "5",
                    "systemId": "D5",
                    "name": "D5"
                },
                {
                    "id": "205",
                    "markId": "5",
                    "systemId": "ROADSTER",
                    "name": "Roadster"
                },
                {
                    "id": "206",
                    "markId": "5",
                    "systemId": "XD3",
                    "name": "XD3"
                },
                {
                    "id": "207",
                    "markId": "5",
                    "systemId": "XD4",
                    "name": "XD4"
                },
                {
                    "id": "208",
                    "markId": "2",
                    "systemId": "EAGLE",
                    "name": "Eagle"
                },
                {
                    "id": "209",
                    "markId": "2",
                    "systemId": "HORNET",
                    "name": "Hornet"
                },
                {
                    "id": "210",
                    "markId": "6",
                    "systemId": "BULLDOG",
                    "name": "Bulldog"
                },
                {
                    "id": "211",
                    "markId": "6",
                    "systemId": "CYGNET",
                    "name": "Cygnet"
                },
                {
                    "id": "212",
                    "markId": "6",
                    "systemId": "DB_AR1",
                    "name": "DB AR1"
                },
                {
                    "id": "213",
                    "markId": "6",
                    "systemId": "DB11",
                    "name": "DB11"
                },
                {
                    "id": "214",
                    "markId": "6",
                    "systemId": "DB5",
                    "name": "DB5"
                },
                {
                    "id": "215",
                    "markId": "6",
                    "systemId": "DB7",
                    "name": "DB7"
                },
                {
                    "id": "216",
                    "markId": "6",
                    "systemId": "DB9",
                    "name": "DB9"
                },
                {
                    "id": "217",
                    "markId": "6",
                    "systemId": "DBS",
                    "name": "DBS"
                },
                {
                    "id": "218",
                    "markId": "6",
                    "systemId": "DBX",
                    "name": "DBX"
                },
                {
                    "id": "219",
                    "markId": "6",
                    "systemId": "LAGONDA",
                    "name": "Lagonda"
                },
                {
                    "id": "220",
                    "markId": "6",
                    "systemId": "ONE-77",
                    "name": "One-77"
                },
                {
                    "id": "221",
                    "markId": "6",
                    "systemId": "RAPIDE",
                    "name": "Rapide"
                },
                {
                    "id": "222",
                    "markId": "6",
                    "systemId": "TICKFORD_CAPRI",
                    "name": "Tickford Capri"
                },
                {
                    "id": "223",
                    "markId": "6",
                    "systemId": "V12_VANTAGE",
                    "name": "V12 Vantage"
                },
                {
                    "id": "224",
                    "markId": "6",
                    "systemId": "V12_ZAGATO",
                    "name": "V12 Zagato"
                },
                {
                    "id": "225",
                    "markId": "6",
                    "systemId": "V8_VANTAGE",
                    "name": "V8 Vantage"
                },
                {
                    "id": "226",
                    "markId": "6",
                    "systemId": "V8_ZAGATO",
                    "name": "V8 Zagato"
                },
                {
                    "id": "227",
                    "markId": "6",
                    "systemId": "VANQUISH",
                    "name": "Vanquish"
                },
                {
                    "id": "228",
                    "markId": "6",
                    "systemId": "VIRAGE",
                    "name": "Virage"
                },
                {
                    "id": "229",
                    "markId": "7",
                    "systemId": "100",
                    "name": "100"
                },
                {
                    "id": "230",
                    "markId": "7",
                    "systemId": "200",
                    "name": "200"
                },
                {
                    "id": "231",
                    "markId": "7",
                    "systemId": "50",
                    "name": "50"
                },
                {
                    "id": "232",
                    "markId": "7",
                    "systemId": "80",
                    "name": "80"
                },
                {
                    "id": "233",
                    "markId": "7",
                    "systemId": "90",
                    "name": "90"
                },
                {
                    "id": "234",
                    "markId": "7",
                    "systemId": "920",
                    "name": "920"
                },
                {
                    "id": "235",
                    "markId": "7",
                    "systemId": "A1",
                    "name": "A1"
                },
                {
                    "id": "236",
                    "markId": "7",
                    "systemId": "A2",
                    "name": "A2"
                },
                {
                    "id": "237",
                    "markId": "7",
                    "systemId": "A3",
                    "name": "A3"
                },
                {
                    "id": "238",
                    "markId": "7",
                    "systemId": "A4",
                    "name": "A4"
                },
                {
                    "id": "239",
                    "markId": "7",
                    "systemId": "A4_ALLROAD",
                    "name": "A4 allroad"
                },
                {
                    "id": "240",
                    "markId": "7",
                    "systemId": "A5",
                    "name": "A5"
                },
                {
                    "id": "241",
                    "markId": "7",
                    "systemId": "A6",
                    "name": "A6"
                },
                {
                    "id": "242",
                    "markId": "7",
                    "systemId": "A6_ALLROAD",
                    "name": "A6 allroad"
                },
                {
                    "id": "243",
                    "markId": "7",
                    "systemId": "A7",
                    "name": "A7"
                },
                {
                    "id": "244",
                    "markId": "7",
                    "systemId": "A8",
                    "name": "A8"
                },
                {
                    "id": "245",
                    "markId": "7",
                    "systemId": "CABRIOLET",
                    "name": "Cabriolet"
                },
                {
                    "id": "246",
                    "markId": "7",
                    "systemId": "COUPE",
                    "name": "Coupe"
                },
                {
                    "id": "247",
                    "markId": "7",
                    "systemId": "E-TRON",
                    "name": "e-tron"
                },
                {
                    "id": "248",
                    "markId": "7",
                    "systemId": "E-TRON_SPORTBACK",
                    "name": "e-tron Sportback"
                },
                {
                    "id": "249",
                    "markId": "7",
                    "systemId": "NSU_RO_80",
                    "name": "NSU RO 80"
                },
                {
                    "id": "250",
                    "markId": "7",
                    "systemId": "Q2",
                    "name": "Q2"
                },
                {
                    "id": "251",
                    "markId": "7",
                    "systemId": "Q3",
                    "name": "Q3"
                },
                {
                    "id": "252",
                    "markId": "7",
                    "systemId": "Q3_SPORTBACK",
                    "name": "Q3 Sportback"
                },
                {
                    "id": "253",
                    "markId": "7",
                    "systemId": "Q5",
                    "name": "Q5"
                },
                {
                    "id": "254",
                    "markId": "7",
                    "systemId": "Q7",
                    "name": "Q7"
                },
                {
                    "id": "255",
                    "markId": "7",
                    "systemId": "Q8",
                    "name": "Q8"
                },
                {
                    "id": "256",
                    "markId": "7",
                    "systemId": "R8",
                    "name": "R8"
                },
                {
                    "id": "257",
                    "markId": "7",
                    "systemId": "R8_LMP",
                    "name": "R8 LMP"
                },
                {
                    "id": "258",
                    "markId": "7",
                    "systemId": "RS_2",
                    "name": "RS 2"
                },
                {
                    "id": "259",
                    "markId": "7",
                    "systemId": "RS_3",
                    "name": "RS 3"
                },
                {
                    "id": "260",
                    "markId": "7",
                    "systemId": "RS_4",
                    "name": "RS 4"
                },
                {
                    "id": "261",
                    "markId": "7",
                    "systemId": "RS_5",
                    "name": "RS 5"
                },
                {
                    "id": "262",
                    "markId": "7",
                    "systemId": "RS_6",
                    "name": "RS 6"
                },
                {
                    "id": "263",
                    "markId": "7",
                    "systemId": "RS_7",
                    "name": "RS 7"
                },
                {
                    "id": "264",
                    "markId": "7",
                    "systemId": "RS_Q3",
                    "name": "RS Q3"
                },
                {
                    "id": "265",
                    "markId": "7",
                    "systemId": "RS_Q3_SPORTBACK",
                    "name": "RS Q3 Sportback"
                },
                {
                    "id": "266",
                    "markId": "7",
                    "systemId": "RS_Q8",
                    "name": "RS Q8"
                },
                {
                    "id": "267",
                    "markId": "7",
                    "systemId": "S1",
                    "name": "S1"
                },
                {
                    "id": "268",
                    "markId": "7",
                    "systemId": "S2",
                    "name": "S2"
                },
                {
                    "id": "269",
                    "markId": "7",
                    "systemId": "S3",
                    "name": "S3"
                },
                {
                    "id": "270",
                    "markId": "7",
                    "systemId": "S4",
                    "name": "S4"
                },
                {
                    "id": "271",
                    "markId": "7",
                    "systemId": "S5",
                    "name": "S5"
                },
                {
                    "id": "272",
                    "markId": "7",
                    "systemId": "S6",
                    "name": "S6"
                },
                {
                    "id": "273",
                    "markId": "7",
                    "systemId": "S7",
                    "name": "S7"
                },
                {
                    "id": "274",
                    "markId": "7",
                    "systemId": "S8",
                    "name": "S8"
                },
                {
                    "id": "275",
                    "markId": "7",
                    "systemId": "SQ2",
                    "name": "SQ2"
                },
                {
                    "id": "276",
                    "markId": "7",
                    "systemId": "SQ5",
                    "name": "SQ5"
                },
                {
                    "id": "277",
                    "markId": "7",
                    "systemId": "SQ7",
                    "name": "SQ7"
                },
                {
                    "id": "278",
                    "markId": "7",
                    "systemId": "SQ8",
                    "name": "SQ8"
                },
                {
                    "id": "279",
                    "markId": "7",
                    "systemId": "TT",
                    "name": "TT"
                },
                {
                    "id": "280",
                    "markId": "7",
                    "systemId": "TT_RS",
                    "name": "TT RS"
                },
                {
                    "id": "281",
                    "markId": "7",
                    "systemId": "TTS",
                    "name": "TTS"
                },
                {
                    "id": "282",
                    "markId": "7",
                    "systemId": "TYP_R",
                    "name": "Typ R"
                },
                {
                    "id": "283",
                    "markId": "7",
                    "systemId": "V8",
                    "name": "V8"
                },
                {
                    "id": "284",
                    "markId": "8",
                    "systemId": "02(E10)",
                    "name": "02(E10)"
                },
                {
                    "id": "285",
                    "markId": "8",
                    "systemId": "1_SERIES",
                    "name": "1 series"
                },
                {
                    "id": "286",
                    "markId": "8",
                    "systemId": "1M",
                    "name": "1M"
                },
                {
                    "id": "287",
                    "markId": "8",
                    "systemId": "2_SERIES",
                    "name": "2 series"
                },
                {
                    "id": "288",
                    "markId": "8",
                    "systemId": "2_SERIES_ACTIVE_TOURER",
                    "name": "2 series Active Tourer"
                },
                {
                    "id": "289",
                    "markId": "8",
                    "systemId": "2000_C/CS",
                    "name": "2000 C/CS"
                },
                {
                    "id": "290",
                    "markId": "8",
                    "systemId": "3_SERIES",
                    "name": "3 series"
                },
                {
                    "id": "291",
                    "markId": "8",
                    "systemId": "315",
                    "name": "315"
                },
                {
                    "id": "292",
                    "markId": "8",
                    "systemId": "3200",
                    "name": "3200"
                },
                {
                    "id": "293",
                    "markId": "8",
                    "systemId": "321",
                    "name": "321"
                },
                {
                    "id": "294",
                    "markId": "8",
                    "systemId": "326",
                    "name": "326"
                },
                {
                    "id": "295",
                    "markId": "8",
                    "systemId": "327",
                    "name": "327"
                },
                {
                    "id": "296",
                    "markId": "8",
                    "systemId": "340",
                    "name": "340"
                },
                {
                    "id": "297",
                    "markId": "8",
                    "systemId": "4_SERIES",
                    "name": "4 series"
                },
                {
                    "id": "298",
                    "markId": "8",
                    "systemId": "5_SERIES",
                    "name": "5 series"
                },
                {
                    "id": "299",
                    "markId": "8",
                    "systemId": "501",
                    "name": "501"
                },
                {
                    "id": "300",
                    "markId": "8",
                    "systemId": "502",
                    "name": "502"
                },
                {
                    "id": "301",
                    "markId": "8",
                    "systemId": "503",
                    "name": "503"
                },
                {
                    "id": "302",
                    "markId": "8",
                    "systemId": "507",
                    "name": "507"
                },
                {
                    "id": "303",
                    "markId": "8",
                    "systemId": "6_SERIES",
                    "name": "6 series"
                },
                {
                    "id": "304",
                    "markId": "8",
                    "systemId": "600",
                    "name": "600"
                },
                {
                    "id": "305",
                    "markId": "8",
                    "systemId": "7_SERIES",
                    "name": "7 series"
                },
                {
                    "id": "306",
                    "markId": "8",
                    "systemId": "700",
                    "name": "700"
                },
                {
                    "id": "307",
                    "markId": "8",
                    "systemId": "8_SERIES",
                    "name": "8 series"
                },
                {
                    "id": "308",
                    "markId": "8",
                    "systemId": "E3",
                    "name": "E3"
                },
                {
                    "id": "309",
                    "markId": "8",
                    "systemId": "E9",
                    "name": "E9"
                },
                {
                    "id": "310",
                    "markId": "8",
                    "systemId": "I3",
                    "name": "i3"
                },
                {
                    "id": "311",
                    "markId": "8",
                    "systemId": "I8",
                    "name": "i8"
                },
                {
                    "id": "312",
                    "markId": "8",
                    "systemId": "M2",
                    "name": "M2"
                },
                {
                    "id": "313",
                    "markId": "8",
                    "systemId": "M3",
                    "name": "M3"
                },
                {
                    "id": "314",
                    "markId": "8",
                    "systemId": "M4",
                    "name": "M4"
                },
                {
                    "id": "315",
                    "markId": "8",
                    "systemId": "M5",
                    "name": "M5"
                },
                {
                    "id": "316",
                    "markId": "8",
                    "systemId": "M6",
                    "name": "M6"
                },
                {
                    "id": "317",
                    "markId": "8",
                    "systemId": "M8",
                    "name": "M8"
                },
                {
                    "id": "318",
                    "markId": "8",
                    "systemId": "X1",
                    "name": "X1"
                },
                {
                    "id": "319",
                    "markId": "8",
                    "systemId": "X2",
                    "name": "X2"
                },
                {
                    "id": "320",
                    "markId": "8",
                    "systemId": "X3",
                    "name": "X3"
                },
                {
                    "id": "321",
                    "markId": "8",
                    "systemId": "X3_M",
                    "name": "X3 M"
                },
                {
                    "id": "322",
                    "markId": "8",
                    "systemId": "X4",
                    "name": "X4"
                },
                {
                    "id": "323",
                    "markId": "8",
                    "systemId": "X4_M",
                    "name": "X4 M"
                },
                {
                    "id": "324",
                    "markId": "8",
                    "systemId": "X5",
                    "name": "X5"
                },
                {
                    "id": "325",
                    "markId": "8",
                    "systemId": "X5_M",
                    "name": "X5 M"
                },
                {
                    "id": "326",
                    "markId": "8",
                    "systemId": "X6",
                    "name": "X6"
                },
                {
                    "id": "327",
                    "markId": "8",
                    "systemId": "X6_M",
                    "name": "X6 M"
                },
                {
                    "id": "328",
                    "markId": "8",
                    "systemId": "X7",
                    "name": "X7"
                },
                {
                    "id": "329",
                    "markId": "8",
                    "systemId": "Z1",
                    "name": "Z1"
                },
                {
                    "id": "330",
                    "markId": "8",
                    "systemId": "Z3",
                    "name": "Z3"
                },
                {
                    "id": "331",
                    "markId": "8",
                    "systemId": "Z3_M",
                    "name": "Z3 M"
                },
                {
                    "id": "332",
                    "markId": "8",
                    "systemId": "Z4",
                    "name": "Z4"
                },
                {
                    "id": "333",
                    "markId": "8",
                    "systemId": "Z4_M",
                    "name": "Z4 M"
                },
                {
                    "id": "334",
                    "markId": "8",
                    "systemId": "Z8",
                    "name": "Z8"
                },
                {
                    "id": "335",
                    "markId": "9",
                    "systemId": "E6",
                    "name": "E6"
                },
                {
                    "id": "336",
                    "markId": "9",
                    "systemId": "F0",
                    "name": "F0"
                },
                {
                    "id": "337",
                    "markId": "9",
                    "systemId": "F3",
                    "name": "F3"
                },
                {
                    "id": "338",
                    "markId": "9",
                    "systemId": "F5",
                    "name": "F5"
                },
                {
                    "id": "339",
                    "markId": "9",
                    "systemId": "F6",
                    "name": "F6"
                },
                {
                    "id": "340",
                    "markId": "9",
                    "systemId": "F8(S8)",
                    "name": "F8(S8)"
                },
                {
                    "id": "341",
                    "markId": "9",
                    "systemId": "FLYER",
                    "name": "Flyer"
                },
                {
                    "id": "342",
                    "markId": "9",
                    "systemId": "G3",
                    "name": "G3"
                },
                {
                    "id": "343",
                    "markId": "9",
                    "systemId": "G6",
                    "name": "G6"
                },
                {
                    "id": "344",
                    "markId": "9",
                    "systemId": "L3",
                    "name": "L3"
                },
                {
                    "id": "345",
                    "markId": "9",
                    "systemId": "M6",
                    "name": "M6"
                },
                {
                    "id": "346",
                    "markId": "9",
                    "systemId": "S6",
                    "name": "S6"
                },
                {
                    "id": "347",
                    "markId": "10",
                    "systemId": "QUTE",
                    "name": "Qute"
                },
                {
                    "id": "348",
                    "markId": "11",
                    "systemId": "ARNAGE",
                    "name": "Arnage"
                },
                {
                    "id": "349",
                    "markId": "11",
                    "systemId": "AZURE",
                    "name": "Azure"
                },
                {
                    "id": "350",
                    "markId": "11",
                    "systemId": "BENTAYGA",
                    "name": "Bentayga"
                },
                {
                    "id": "351",
                    "markId": "11",
                    "systemId": "BROOKLANDS",
                    "name": "Brooklands"
                },
                {
                    "id": "352",
                    "markId": "11",
                    "systemId": "CONTINENTAL",
                    "name": "Continental"
                },
                {
                    "id": "353",
                    "markId": "11",
                    "systemId": "CONTINENTAL_FLYING_SPUR",
                    "name": "Continental Flying Spur"
                },
                {
                    "id": "354",
                    "markId": "11",
                    "systemId": "CONTINENTAL_GT",
                    "name": "Continental GT"
                },
                {
                    "id": "355",
                    "markId": "11",
                    "systemId": "EIGHT",
                    "name": "Eight"
                },
                {
                    "id": "356",
                    "markId": "11",
                    "systemId": "FLYING_SPUR",
                    "name": "Flying Spur"
                },
                {
                    "id": "357",
                    "markId": "11",
                    "systemId": "MARK_VI",
                    "name": "Mark VI"
                },
                {
                    "id": "358",
                    "markId": "11",
                    "systemId": "MULSANNE",
                    "name": "Mulsanne"
                },
                {
                    "id": "359",
                    "markId": "11",
                    "systemId": "R_TYPE",
                    "name": "R Type"
                },
                {
                    "id": "360",
                    "markId": "11",
                    "systemId": "S",
                    "name": "S"
                },
                {
                    "id": "361",
                    "markId": "11",
                    "systemId": "T-SERIES",
                    "name": "T-Series"
                },
                {
                    "id": "362",
                    "markId": "11",
                    "systemId": "TURBO_R",
                    "name": "Turbo R"
                },
                {
                    "id": "363",
                    "markId": "12",
                    "systemId": "2000",
                    "name": "2000"
                },
                {
                    "id": "364",
                    "markId": "12",
                    "systemId": "HANSA_1100",
                    "name": "Hansa 1100"
                },
                {
                    "id": "365",
                    "markId": "13",
                    "systemId": "FRV(BS2)",
                    "name": "FRV(BS2)"
                },
                {
                    "id": "366",
                    "markId": "13",
                    "systemId": "H230",
                    "name": "H230"
                },
                {
                    "id": "367",
                    "markId": "13",
                    "systemId": "H530",
                    "name": "H530"
                },
                {
                    "id": "368",
                    "markId": "13",
                    "systemId": "M1(BS6)",
                    "name": "M1(BS6)"
                },
                {
                    "id": "369",
                    "markId": "13",
                    "systemId": "M2(BS4)",
                    "name": "M2(BS4)"
                },
                {
                    "id": "370",
                    "markId": "13",
                    "systemId": "M3(BC3)",
                    "name": "M3(BC3)"
                },
                {
                    "id": "371",
                    "markId": "13",
                    "systemId": "V3",
                    "name": "V3"
                },
                {
                    "id": "372",
                    "markId": "13",
                    "systemId": "V5",
                    "name": "V5"
                },
                {
                    "id": "373",
                    "markId": "14",
                    "systemId": "CENTURY",
                    "name": "Century"
                },
                {
                    "id": "374",
                    "markId": "14",
                    "systemId": "ELECTRA",
                    "name": "Electra"
                },
                {
                    "id": "375",
                    "markId": "14",
                    "systemId": "ENCLAVE",
                    "name": "Enclave"
                },
                {
                    "id": "376",
                    "markId": "14",
                    "systemId": "ENCORE",
                    "name": "Encore"
                },
                {
                    "id": "377",
                    "markId": "14",
                    "systemId": "ENVISION",
                    "name": "Envision"
                },
                {
                    "id": "378",
                    "markId": "14",
                    "systemId": "ESTATE_WAGON",
                    "name": "Estate Wagon"
                },
                {
                    "id": "379",
                    "markId": "14",
                    "systemId": "EXCELLE",
                    "name": "Excelle"
                },
                {
                    "id": "380",
                    "markId": "14",
                    "systemId": "GL8",
                    "name": "GL8"
                },
                {
                    "id": "381",
                    "markId": "14",
                    "systemId": "GS",
                    "name": "GS"
                },
                {
                    "id": "382",
                    "markId": "14",
                    "systemId": "LACROSSE",
                    "name": "LaCrosse"
                },
                {
                    "id": "383",
                    "markId": "14",
                    "systemId": "LESABRE",
                    "name": "LeSabre"
                },
                {
                    "id": "384",
                    "markId": "14",
                    "systemId": "LIMITED",
                    "name": "Limited"
                },
                {
                    "id": "385",
                    "markId": "14",
                    "systemId": "LUCERNE",
                    "name": "Lucerne"
                },
                {
                    "id": "386",
                    "markId": "14",
                    "systemId": "PARK_AVENUE",
                    "name": "Park Avenue"
                },
                {
                    "id": "387",
                    "markId": "14",
                    "systemId": "RAINER",
                    "name": "Rainer"
                },
                {
                    "id": "388",
                    "markId": "14",
                    "systemId": "REATTA",
                    "name": "Reatta"
                },
                {
                    "id": "389",
                    "markId": "14",
                    "systemId": "REGAL",
                    "name": "Regal"
                },
                {
                    "id": "390",
                    "markId": "14",
                    "systemId": "RENDEZVOUS",
                    "name": "Rendezvous"
                },
                {
                    "id": "391",
                    "markId": "14",
                    "systemId": "RIVIERA",
                    "name": "Riviera"
                },
                {
                    "id": "392",
                    "markId": "14",
                    "systemId": "ROADMASTER",
                    "name": "Roadmaster"
                },
                {
                    "id": "393",
                    "markId": "14",
                    "systemId": "SKYHAWK",
                    "name": "Skyhawk"
                },
                {
                    "id": "394",
                    "markId": "14",
                    "systemId": "SKYLARK",
                    "name": "Skylark"
                },
                {
                    "id": "395",
                    "markId": "14",
                    "systemId": "SPECIAL",
                    "name": "Special"
                },
                {
                    "id": "396",
                    "markId": "14",
                    "systemId": "SUPER",
                    "name": "Super"
                },
                {
                    "id": "397",
                    "markId": "14",
                    "systemId": "TERRAZA",
                    "name": "Terraza"
                },
                {
                    "id": "398",
                    "markId": "14",
                    "systemId": "VERANO",
                    "name": "Verano"
                },
                {
                    "id": "399",
                    "markId": "14",
                    "systemId": "WILDCAT",
                    "name": "Wildcat"
                },
                {
                    "id": "400",
                    "markId": "15",
                    "systemId": "ALLANTE",
                    "name": "Allante"
                },
                {
                    "id": "401",
                    "markId": "15",
                    "systemId": "ATS",
                    "name": "ATS"
                },
                {
                    "id": "402",
                    "markId": "15",
                    "systemId": "ATS-V",
                    "name": "ATS-V"
                },
                {
                    "id": "403",
                    "markId": "15",
                    "systemId": "BLS",
                    "name": "BLS"
                },
                {
                    "id": "404",
                    "markId": "15",
                    "systemId": "BROUGHAM",
                    "name": "Brougham"
                },
                {
                    "id": "405",
                    "markId": "15",
                    "systemId": "CATERA",
                    "name": "Catera"
                },
                {
                    "id": "406",
                    "markId": "15",
                    "systemId": "CT4",
                    "name": "CT4"
                },
                {
                    "id": "407",
                    "markId": "15",
                    "systemId": "CT4-V",
                    "name": "CT4-V"
                },
                {
                    "id": "408",
                    "markId": "15",
                    "systemId": "CT5",
                    "name": "CT5"
                },
                {
                    "id": "409",
                    "markId": "15",
                    "systemId": "CT5-V",
                    "name": "CT5-V"
                },
                {
                    "id": "410",
                    "markId": "15",
                    "systemId": "CT6",
                    "name": "CT6"
                },
                {
                    "id": "411",
                    "markId": "15",
                    "systemId": "CTS",
                    "name": "CTS"
                },
                {
                    "id": "412",
                    "markId": "15",
                    "systemId": "CTS-V",
                    "name": "CTS-V"
                },
                {
                    "id": "413",
                    "markId": "15",
                    "systemId": "DEVILLE",
                    "name": "DeVille"
                },
                {
                    "id": "414",
                    "markId": "15",
                    "systemId": "DTS",
                    "name": "DTS"
                },
                {
                    "id": "415",
                    "markId": "15",
                    "systemId": "ELDORADO",
                    "name": "Eldorado"
                },
                {
                    "id": "416",
                    "markId": "15",
                    "systemId": "ELR",
                    "name": "ELR"
                },
                {
                    "id": "417",
                    "markId": "15",
                    "systemId": "ESCALADE",
                    "name": "Escalade"
                },
                {
                    "id": "418",
                    "markId": "15",
                    "systemId": "LSE",
                    "name": "LSE"
                },
                {
                    "id": "419",
                    "markId": "15",
                    "systemId": "SERIES_62",
                    "name": "Series 62"
                },
                {
                    "id": "420",
                    "markId": "15",
                    "systemId": "FLEETWOOD",
                    "name": "Fleetwood"
                },
                {
                    "id": "421",
                    "markId": "15",
                    "systemId": "SEVILLE",
                    "name": "Seville"
                },
                {
                    "id": "422",
                    "markId": "15",
                    "systemId": "SIXTY_SPECIAL",
                    "name": "Sixty Special"
                },
                {
                    "id": "423",
                    "markId": "15",
                    "systemId": "SRX",
                    "name": "SRX"
                },
                {
                    "id": "424",
                    "markId": "15",
                    "systemId": "STS",
                    "name": "STS"
                },
                {
                    "id": "425",
                    "markId": "15",
                    "systemId": "XLR",
                    "name": "XLR"
                },
                {
                    "id": "426",
                    "markId": "15",
                    "systemId": "XT4",
                    "name": "XT4"
                },
                {
                    "id": "427",
                    "markId": "15",
                    "systemId": "XT5",
                    "name": "XT5"
                },
                {
                    "id": "428",
                    "markId": "15",
                    "systemId": "XT6",
                    "name": "XT6"
                },
                {
                    "id": "429",
                    "markId": "15",
                    "systemId": "XTS",
                    "name": "XTS"
                },
                {
                    "id": "430",
                    "markId": "16",
                    "systemId": "ALSVIN_V7",
                    "name": "Alsvin V7"
                },
                {
                    "id": "431",
                    "markId": "16",
                    "systemId": "BENNI",
                    "name": "Benni"
                },
                {
                    "id": "432",
                    "markId": "16",
                    "systemId": "CM-8",
                    "name": "CM-8"
                },
                {
                    "id": "433",
                    "markId": "16",
                    "systemId": "CS35",
                    "name": "CS35"
                },
                {
                    "id": "434",
                    "markId": "16",
                    "systemId": "CS35PLUS",
                    "name": "CS35PLUS"
                },
                {
                    "id": "435",
                    "markId": "16",
                    "systemId": "CS55",
                    "name": "CS55"
                },
                {
                    "id": "436",
                    "markId": "16",
                    "systemId": "CS75",
                    "name": "CS75"
                },
                {
                    "id": "437",
                    "markId": "16",
                    "systemId": "CX20",
                    "name": "CX20"
                },
                {
                    "id": "438",
                    "markId": "16",
                    "systemId": "EADO",
                    "name": "Eado"
                },
                {
                    "id": "439",
                    "markId": "16",
                    "systemId": "RAETON",
                    "name": "Raeton"
                },
                {
                    "id": "440",
                    "markId": "16",
                    "systemId": "Z-SHINE",
                    "name": "Z-Shine"
                },
                {
                    "id": "441",
                    "markId": "17",
                    "systemId": "AMULET(A15)",
                    "name": "Amulet(A15)"
                },
                {
                    "id": "442",
                    "markId": "17",
                    "systemId": "ARRIZO_3",
                    "name": "Arrizo 3"
                },
                {
                    "id": "443",
                    "markId": "17",
                    "systemId": "ARRIZO_7",
                    "name": "Arrizo 7"
                },
                {
                    "id": "444",
                    "markId": "17",
                    "systemId": "B13",
                    "name": "B13"
                },
                {
                    "id": "445",
                    "markId": "17",
                    "systemId": "BONUS(A13)",
                    "name": "Bonus(A13)"
                },
                {
                    "id": "446",
                    "markId": "17",
                    "systemId": "BONUS_3(E3/A19)",
                    "name": "Bonus 3(E3/A19)"
                },
                {
                    "id": "447",
                    "markId": "17",
                    "systemId": "CROSSEASTAR(B14)",
                    "name": "CrossEastar(B14)"
                },
                {
                    "id": "448",
                    "markId": "17",
                    "systemId": "FOR A(A21)",
                    "name": "For a(A21)"
                },
                {
                    "id": "449",
                    "markId": "17",
                    "systemId": "INDIS(S18D)",
                    "name": "IndiS(S18D)"
                },
                {
                    "id": "450",
                    "markId": "17",
                    "systemId": "KARRY",
                    "name": "Karry"
                },
                {
                    "id": "451",
                    "markId": "17",
                    "systemId": "KIMO(A1)",
                    "name": "Kimo(A1)"
                },
                {
                    "id": "452",
                    "markId": "17",
                    "systemId": "M11(A3)",
                    "name": "M11(A3)"
                },
                {
                    "id": "453",
                    "markId": "17",
                    "systemId": "ORIENTAL_SON(B11)",
                    "name": "Oriental Son(B11)"
                },
                {
                    "id": "454",
                    "markId": "17",
                    "systemId": "QQ6(S21)",
                    "name": "QQ6(S21)"
                },
                {
                    "id": "455",
                    "markId": "17",
                    "systemId": "QQME",
                    "name": "QQMe"
                },
                {
                    "id": "456",
                    "markId": "17",
                    "systemId": "SWEET(QQ)",
                    "name": "Sweet(QQ)"
                },
                {
                    "id": "457",
                    "markId": "17",
                    "systemId": "TIGGO(T11)",
                    "name": "Tiggo(T11)"
                },
                {
                    "id": "458",
                    "markId": "17",
                    "systemId": "TIGGO_2",
                    "name": "Tiggo 2"
                },
                {
                    "id": "459",
                    "markId": "17",
                    "systemId": "TIGGO_3",
                    "name": "Tiggo 3"
                },
                {
                    "id": "460",
                    "markId": "17",
                    "systemId": "TIGGO_4",
                    "name": "Tiggo 4"
                },
                {
                    "id": "461",
                    "markId": "17",
                    "systemId": "TIGGO_5",
                    "name": "Tiggo 5"
                },
                {
                    "id": "462",
                    "markId": "17",
                    "systemId": "TIGGO_7",
                    "name": "Tiggo 7"
                },
                {
                    "id": "463",
                    "markId": "17",
                    "systemId": "TIGGO_8",
                    "name": "Tiggo 8"
                },
                {
                    "id": "464",
                    "markId": "17",
                    "systemId": "VERY(A13)",
                    "name": "Very(A13)"
                },
                {
                    "id": "465",
                    "markId": "17",
                    "systemId": "WINDCLOUD(A11)",
                    "name": "Windcloud(A11)"
                },
                {
                    "id": "466",
                    "markId": "18",
                    "systemId": "ALERO",
                    "name": "Alero"
                },
                {
                    "id": "467",
                    "markId": "18",
                    "systemId": "ASTRA",
                    "name": "Astra"
                },
                {
                    "id": "468",
                    "markId": "18",
                    "systemId": "ASTRO",
                    "name": "Astro"
                },
                {
                    "id": "469",
                    "markId": "18",
                    "systemId": "AVALANCHE",
                    "name": "Avalanche"
                },
                {
                    "id": "470",
                    "markId": "18",
                    "systemId": "AVEO",
                    "name": "Aveo"
                },
                {
                    "id": "471",
                    "markId": "18",
                    "systemId": "BEL_AIR",
                    "name": "Bel Air"
                },
                {
                    "id": "472",
                    "markId": "18",
                    "systemId": "BERETTA",
                    "name": "Beretta"
                },
                {
                    "id": "473",
                    "markId": "18",
                    "systemId": "BLAZER",
                    "name": "Blazer"
                },
                {
                    "id": "474",
                    "markId": "18",
                    "systemId": "BLAZER_K5",
                    "name": "Blazer K5"
                },
                {
                    "id": "475",
                    "markId": "18",
                    "systemId": "BOLT",
                    "name": "Bolt"
                },
                {
                    "id": "476",
                    "markId": "18",
                    "systemId": "C-10",
                    "name": "C-10"
                },
                {
                    "id": "477",
                    "markId": "18",
                    "systemId": "C/K",
                    "name": "C/K"
                },
                {
                    "id": "478",
                    "markId": "18",
                    "systemId": "CAMARO",
                    "name": "Camaro"
                },
                {
                    "id": "479",
                    "markId": "18",
                    "systemId": "CAPRICE",
                    "name": "Caprice"
                },
                {
                    "id": "480",
                    "markId": "18",
                    "systemId": "CAPTIVA",
                    "name": "Captiva"
                },
                {
                    "id": "481",
                    "markId": "18",
                    "systemId": "CAVALIER",
                    "name": "Cavalier"
                },
                {
                    "id": "482",
                    "markId": "18",
                    "systemId": "CELEBRITY",
                    "name": "Celebrity"
                },
                {
                    "id": "483",
                    "markId": "18",
                    "systemId": "CELTA",
                    "name": "Celta"
                },
                {
                    "id": "484",
                    "markId": "18",
                    "systemId": "CHEVELLE",
                    "name": "Chevelle"
                },
                {
                    "id": "485",
                    "markId": "18",
                    "systemId": "CHEVETTE",
                    "name": "Chevette"
                },
                {
                    "id": "486",
                    "markId": "18",
                    "systemId": "CITATION",
                    "name": "Citation"
                },
                {
                    "id": "487",
                    "markId": "18",
                    "systemId": "COBALT",
                    "name": "Cobalt"
                },
                {
                    "id": "488",
                    "markId": "18",
                    "systemId": "COLORADO",
                    "name": "Colorado"
                },
                {
                    "id": "489",
                    "markId": "18",
                    "systemId": "CORSA",
                    "name": "Corsa"
                },
                {
                    "id": "490",
                    "markId": "18",
                    "systemId": "CORSICA",
                    "name": "Corsica"
                },
                {
                    "id": "491",
                    "markId": "18",
                    "systemId": "CORVAIR",
                    "name": "Corvair"
                },
                {
                    "id": "492",
                    "markId": "18",
                    "systemId": "CORVETTE",
                    "name": "Corvette"
                },
                {
                    "id": "493",
                    "markId": "18",
                    "systemId": "CRUZE",
                    "name": "Cruze"
                },
                {
                    "id": "494",
                    "markId": "18",
                    "systemId": "CRUZE(HR)",
                    "name": "Cruze(HR)"
                },
                {
                    "id": "495",
                    "markId": "18",
                    "systemId": "CSV_CR8",
                    "name": "CSV CR8"
                },
                {
                    "id": "496",
                    "markId": "18",
                    "systemId": "DELUXE",
                    "name": "Deluxe"
                },
                {
                    "id": "497",
                    "markId": "18",
                    "systemId": "EL_CAMINO",
                    "name": "El Camino"
                },
                {
                    "id": "498",
                    "markId": "18",
                    "systemId": "EPICA",
                    "name": "Epica"
                },
                {
                    "id": "499",
                    "markId": "18",
                    "systemId": "EQUINOX",
                    "name": "Equinox"
                },
                {
                    "id": "500",
                    "markId": "18",
                    "systemId": "EVANDA",
                    "name": "Evanda"
                },
                {
                    "id": "501",
                    "markId": "18",
                    "systemId": "EXPRESS",
                    "name": "Express"
                },
                {
                    "id": "502",
                    "markId": "18",
                    "systemId": "FLEETMASTER",
                    "name": "Fleetmaster"
                },
                {
                    "id": "503",
                    "markId": "18",
                    "systemId": "HHR",
                    "name": "HHR"
                },
                {
                    "id": "504",
                    "markId": "18",
                    "systemId": "IMPALA",
                    "name": "Impala"
                },
                {
                    "id": "505",
                    "markId": "18",
                    "systemId": "KALOS",
                    "name": "Kalos"
                },
                {
                    "id": "506",
                    "markId": "18",
                    "systemId": "LACETTI",
                    "name": "Lacetti"
                },
                {
                    "id": "507",
                    "markId": "18",
                    "systemId": "LANOS",
                    "name": "Lanos"
                },
                {
                    "id": "508",
                    "markId": "18",
                    "systemId": "LUMINA",
                    "name": "Lumina"
                },
                {
                    "id": "509",
                    "markId": "18",
                    "systemId": "LUMINA_APV",
                    "name": "Lumina APV"
                },
                {
                    "id": "510",
                    "markId": "18",
                    "systemId": "LUV_D-MAX",
                    "name": "LUV D-MAX"
                },
                {
                    "id": "511",
                    "markId": "18",
                    "systemId": "MALIBU",
                    "name": "Malibu"
                },
                {
                    "id": "512",
                    "markId": "18",
                    "systemId": "MASTER",
                    "name": "Master"
                },
                {
                    "id": "513",
                    "markId": "18",
                    "systemId": "MATIZ",
                    "name": "Matiz"
                },
                {
                    "id": "514",
                    "markId": "18",
                    "systemId": "METRO",
                    "name": "Metro"
                },
                {
                    "id": "515",
                    "markId": "18",
                    "systemId": "MONTE_CARLO",
                    "name": "Monte Carlo"
                },
                {
                    "id": "516",
                    "markId": "18",
                    "systemId": "MONZA",
                    "name": "Monza"
                },
                {
                    "id": "517",
                    "markId": "18",
                    "systemId": "MW",
                    "name": "MW"
                },
                {
                    "id": "518",
                    "markId": "18",
                    "systemId": "NIVA",
                    "name": "Niva"
                },
                {
                    "id": "519",
                    "markId": "18",
                    "systemId": "NOVA",
                    "name": "Nova"
                },
                {
                    "id": "520",
                    "markId": "18",
                    "systemId": "NUBIRA",
                    "name": "Nubira"
                },
                {
                    "id": "521",
                    "markId": "18",
                    "systemId": "OMEGA",
                    "name": "Omega"
                },
                {
                    "id": "522",
                    "markId": "18",
                    "systemId": "ORLANDO",
                    "name": "Orlando"
                },
                {
                    "id": "523",
                    "markId": "18",
                    "systemId": "PRIZM",
                    "name": "Prizm"
                },
                {
                    "id": "524",
                    "markId": "18",
                    "systemId": "REZZO",
                    "name": "Rezzo"
                },
                {
                    "id": "525",
                    "markId": "18",
                    "systemId": "S-10_PICKUP",
                    "name": "S-10 Pickup"
                },
                {
                    "id": "526",
                    "markId": "18",
                    "systemId": "SAIL",
                    "name": "Sail"
                },
                {
                    "id": "527",
                    "markId": "18",
                    "systemId": "SILVERADO",
                    "name": "Silverado"
                },
                {
                    "id": "528",
                    "markId": "18",
                    "systemId": "SONIC",
                    "name": "Sonic"
                },
                {
                    "id": "529",
                    "markId": "18",
                    "systemId": "SPARK",
                    "name": "Spark"
                },
                {
                    "id": "530",
                    "markId": "18",
                    "systemId": "SPECIAL_DELUXE",
                    "name": "Special DeLuxe"
                },
                {
                    "id": "531",
                    "markId": "18",
                    "systemId": "SPIN",
                    "name": "Spin"
                },
                {
                    "id": "532",
                    "markId": "18",
                    "systemId": "SS",
                    "name": "SS"
                },
                {
                    "id": "533",
                    "markId": "18",
                    "systemId": "SSR",
                    "name": "SSR"
                },
                {
                    "id": "534",
                    "markId": "18",
                    "systemId": "STARCRAFT",
                    "name": "Starcraft"
                },
                {
                    "id": "535",
                    "markId": "18",
                    "systemId": "SUBURBAN",
                    "name": "Suburban"
                },
                {
                    "id": "536",
                    "markId": "18",
                    "systemId": "TACUMA",
                    "name": "Tacuma"
                },
                {
                    "id": "537",
                    "markId": "18",
                    "systemId": "TAHOE",
                    "name": "Tahoe"
                },
                {
                    "id": "538",
                    "markId": "18",
                    "systemId": "TAVERA",
                    "name": "Tavera"
                },
                {
                    "id": "539",
                    "markId": "18",
                    "systemId": "TRACKER",
                    "name": "Tracker"
                },
                {
                    "id": "540",
                    "markId": "18",
                    "systemId": "TRAILBLAZER",
                    "name": "TrailBlazer"
                },
                {
                    "id": "541",
                    "markId": "18",
                    "systemId": "TRANS_SPORT",
                    "name": "Trans Sport"
                },
                {
                    "id": "542",
                    "markId": "18",
                    "systemId": "TRAVERSE",
                    "name": "Traverse"
                },
                {
                    "id": "543",
                    "markId": "18",
                    "systemId": "UPLANDER",
                    "name": "Uplander"
                },
                {
                    "id": "544",
                    "markId": "18",
                    "systemId": "VAN",
                    "name": "Van"
                },
                {
                    "id": "545",
                    "markId": "18",
                    "systemId": "VECTRA",
                    "name": "Vectra"
                },
                {
                    "id": "546",
                    "markId": "18",
                    "systemId": "VENTURE",
                    "name": "Venture"
                },
                {
                    "id": "547",
                    "markId": "18",
                    "systemId": "VIVA",
                    "name": "Viva"
                },
                {
                    "id": "548",
                    "markId": "18",
                    "systemId": "VOLT",
                    "name": "Volt"
                },
                {
                    "id": "549",
                    "markId": "18",
                    "systemId": "ZAFIRA",
                    "name": "Zafira"
                },
                {
                    "id": "550",
                    "markId": "19",
                    "systemId": "180",
                    "name": "180"
                },
                {
                    "id": "551",
                    "markId": "19",
                    "systemId": "200",
                    "name": "200"
                },
                {
                    "id": "552",
                    "markId": "19",
                    "systemId": "300",
                    "name": "300"
                },
                {
                    "id": "553",
                    "markId": "19",
                    "systemId": "300_LETTER_SERIES",
                    "name": "300 Letter Series"
                },
                {
                    "id": "554",
                    "markId": "19",
                    "systemId": "300C",
                    "name": "300C"
                },
                {
                    "id": "555",
                    "markId": "19",
                    "systemId": "300M",
                    "name": "300M"
                },
                {
                    "id": "556",
                    "markId": "19",
                    "systemId": "ASPEN",
                    "name": "Aspen"
                },
                {
                    "id": "557",
                    "markId": "19",
                    "systemId": "CIRRUS",
                    "name": "Cirrus"
                },
                {
                    "id": "558",
                    "markId": "19",
                    "systemId": "CONCORDE",
                    "name": "Concorde"
                },
                {
                    "id": "559",
                    "markId": "19",
                    "systemId": "CORDOBA",
                    "name": "Cordoba"
                },
                {
                    "id": "560",
                    "markId": "19",
                    "systemId": "CROSSFIRE",
                    "name": "Crossfire"
                },
                {
                    "id": "561",
                    "markId": "19",
                    "systemId": "DAYTONA",
                    "name": "Daytona"
                },
                {
                    "id": "562",
                    "markId": "19",
                    "systemId": "DYNASTY",
                    "name": "Dynasty"
                },
                {
                    "id": "563",
                    "markId": "19",
                    "systemId": "ES",
                    "name": "ES"
                },
                {
                    "id": "564",
                    "markId": "19",
                    "systemId": "FIFTH_AVENUE",
                    "name": "Fifth Avenue"
                },
                {
                    "id": "565",
                    "markId": "19",
                    "systemId": "IMPERIAL",
                    "name": "Imperial"
                },
                {
                    "id": "566",
                    "markId": "19",
                    "systemId": "IMPERIAL_CROWN",
                    "name": "Imperial Crown"
                },
                {
                    "id": "567",
                    "markId": "19",
                    "systemId": "INTREPID",
                    "name": "Intrepid"
                },
                {
                    "id": "568",
                    "markId": "19",
                    "systemId": "LEBARON",
                    "name": "LeBaron"
                },
                {
                    "id": "569",
                    "markId": "19",
                    "systemId": "LHS",
                    "name": "LHS"
                },
                {
                    "id": "570",
                    "markId": "19",
                    "systemId": "NASSAU",
                    "name": "Nassau"
                },
                {
                    "id": "571",
                    "markId": "19",
                    "systemId": "NEON",
                    "name": "Neon"
                },
                {
                    "id": "572",
                    "markId": "19",
                    "systemId": "NEW_YORKER",
                    "name": "New Yorker"
                },
                {
                    "id": "573",
                    "markId": "19",
                    "systemId": "NEWPORT",
                    "name": "Newport"
                },
                {
                    "id": "574",
                    "markId": "19",
                    "systemId": "PACIFICA",
                    "name": "Pacifica"
                },
                {
                    "id": "575",
                    "markId": "19",
                    "systemId": "PROWLER",
                    "name": "Prowler"
                },
                {
                    "id": "576",
                    "markId": "19",
                    "systemId": "PT_CRUISER",
                    "name": "PT Cruiser"
                },
                {
                    "id": "577",
                    "markId": "19",
                    "systemId": "SARATOGA",
                    "name": "Saratoga"
                },
                {
                    "id": "578",
                    "markId": "19",
                    "systemId": "SEBRING",
                    "name": "Sebring"
                },
                {
                    "id": "579",
                    "markId": "19",
                    "systemId": "STRATUS",
                    "name": "Stratus"
                },
                {
                    "id": "580",
                    "markId": "19",
                    "systemId": "TC_BY_MASERATI",
                    "name": "TC by Maserati"
                },
                {
                    "id": "581",
                    "markId": "19",
                    "systemId": "TOWN&COUNTRY",
                    "name": "Town & Country"
                },
                {
                    "id": "582",
                    "markId": "19",
                    "systemId": "VIPER",
                    "name": "Viper"
                },
                {
                    "id": "583",
                    "markId": "19",
                    "systemId": "VISION",
                    "name": "Vision"
                },
                {
                    "id": "584",
                    "markId": "19",
                    "systemId": "VOYAGER",
                    "name": "Voyager"
                },
                {
                    "id": "585",
                    "markId": "19",
                    "systemId": "WINDSOR",
                    "name": "Windsor"
                },
                {
                    "id": "586",
                    "markId": "20",
                    "systemId": "2_CV",
                    "name": "2 CV"
                },
                {
                    "id": "587",
                    "markId": "20",
                    "systemId": "AMI",
                    "name": "AMI"
                },
                {
                    "id": "588",
                    "markId": "20",
                    "systemId": "AX",
                    "name": "AX"
                },
                {
                    "id": "589",
                    "markId": "20",
                    "systemId": "BERLINGO",
                    "name": "Berlingo"
                },
                {
                    "id": "590",
                    "markId": "20",
                    "systemId": "BX",
                    "name": "BX"
                },
                {
                    "id": "591",
                    "markId": "20",
                    "systemId": "C-CROSSER",
                    "name": "C-Crosser"
                },
                {
                    "id": "592",
                    "markId": "20",
                    "systemId": "C-ELYSEE",
                    "name": "C-Elysee"
                },
                {
                    "id": "593",
                    "markId": "20",
                    "systemId": "C-QUATRE",
                    "name": "C-Quatre"
                },
                {
                    "id": "594",
                    "markId": "20",
                    "systemId": "C-TRIOMPHE",
                    "name": "C-Triomphe"
                },
                {
                    "id": "595",
                    "markId": "20",
                    "systemId": "C-ZERO",
                    "name": "C-ZERO"
                },
                {
                    "id": "596",
                    "markId": "20",
                    "systemId": "C1",
                    "name": "C1"
                },
                {
                    "id": "597",
                    "markId": "20",
                    "systemId": "C2",
                    "name": "C2"
                },
                {
                    "id": "598",
                    "markId": "20",
                    "systemId": "C3",
                    "name": "C3"
                },
                {
                    "id": "599",
                    "markId": "20",
                    "systemId": "C3_AIRCROSS",
                    "name": "C3 Aircross"
                },
                {
                    "id": "600",
                    "markId": "20",
                    "systemId": "C3_PICASSO",
                    "name": "C3 Picasso"
                },
                {
                    "id": "601",
                    "markId": "20",
                    "systemId": "C4",
                    "name": "C4"
                },
                {
                    "id": "602",
                    "markId": "20",
                    "systemId": "C4_AIRCROSS",
                    "name": "C4 Aircross"
                },
                {
                    "id": "603",
                    "markId": "20",
                    "systemId": "C4_CACTUS",
                    "name": "C4 Cactus"
                },
                {
                    "id": "604",
                    "markId": "20",
                    "systemId": "C4_PICASSO",
                    "name": "C4 Picasso"
                },
                {
                    "id": "605",
                    "markId": "20",
                    "systemId": "C4_SPACE_TOURER",
                    "name": "C4 Space Tourer"
                },
                {
                    "id": "606",
                    "markId": "20",
                    "systemId": "C5",
                    "name": "C5"
                },
                {
                    "id": "607",
                    "markId": "20",
                    "systemId": "C5_AIRCROSS",
                    "name": "C5 Aircross"
                },
                {
                    "id": "608",
                    "markId": "20",
                    "systemId": "C6",
                    "name": "C6"
                },
                {
                    "id": "609",
                    "markId": "20",
                    "systemId": "C8",
                    "name": "C8"
                },
                {
                    "id": "610",
                    "markId": "20",
                    "systemId": "CX",
                    "name": "CX"
                },
                {
                    "id": "611",
                    "markId": "20",
                    "systemId": "DS",
                    "name": "DS"
                },
                {
                    "id": "612",
                    "markId": "20",
                    "systemId": "DS3",
                    "name": "DS3"
                },
                {
                    "id": "613",
                    "markId": "20",
                    "systemId": "DS4",
                    "name": "DS4"
                },
                {
                    "id": "614",
                    "markId": "20",
                    "systemId": "DS5",
                    "name": "DS5"
                },
                {
                    "id": "615",
                    "markId": "20",
                    "systemId": "DYANE",
                    "name": "Dyane"
                },
                {
                    "id": "616",
                    "markId": "20",
                    "systemId": "E-MEHARI",
                    "name": "E-Mehari"
                },
                {
                    "id": "617",
                    "markId": "20",
                    "systemId": "EVASION",
                    "name": "Evasion"
                },
                {
                    "id": "618",
                    "markId": "20",
                    "systemId": "GS",
                    "name": "GS"
                },
                {
                    "id": "619",
                    "markId": "20",
                    "systemId": "JUMPY",
                    "name": "Jumpy"
                },
                {
                    "id": "620",
                    "markId": "20",
                    "systemId": "LN",
                    "name": "LN"
                },
                {
                    "id": "621",
                    "markId": "20",
                    "systemId": "NEMO",
                    "name": "Nemo"
                },
                {
                    "id": "622",
                    "markId": "20",
                    "systemId": "SAXO",
                    "name": "Saxo"
                },
                {
                    "id": "623",
                    "markId": "20",
                    "systemId": "SM",
                    "name": "SM"
                },
                {
                    "id": "624",
                    "markId": "20",
                    "systemId": "SPACETOURER",
                    "name": "SpaceTourer"
                },
                {
                    "id": "625",
                    "markId": "20",
                    "systemId": "TRACTION_AVANT",
                    "name": "Traction Avant"
                },
                {
                    "id": "626",
                    "markId": "20",
                    "systemId": "VISA",
                    "name": "Visa"
                },
                {
                    "id": "627",
                    "markId": "20",
                    "systemId": "XSARA",
                    "name": "Xsara"
                },
                {
                    "id": "628",
                    "markId": "20",
                    "systemId": "XANTIA",
                    "name": "Xantia"
                },
                {
                    "id": "629",
                    "markId": "20",
                    "systemId": "XM",
                    "name": "XM"
                },
                {
                    "id": "630",
                    "markId": "20",
                    "systemId": "XSARA_PICASSO",
                    "name": "Xsara Picasso"
                },
                {
                    "id": "631",
                    "markId": "20",
                    "systemId": "ZX",
                    "name": "ZX"
                },
                {
                    "id": "632",
                    "markId": "21",
                    "systemId": "3=6",
                    "name": "3=6"
                },
                {
                    "id": "633",
                    "markId": "22",
                    "systemId": "3",
                    "name": "3"
                },
                {
                    "id": "634",
                    "markId": "22",
                    "systemId": "4",
                    "name": "4"
                },
                {
                    "id": "635",
                    "markId": "23",
                    "systemId": "H3",
                    "name": "H3"
                },
                {
                    "id": "636",
                    "markId": "23",
                    "systemId": "H5",
                    "name": "H5"
                },
                {
                    "id": "637",
                    "markId": "24",
                    "systemId": "1300",
                    "name": "1300"
                },
                {
                    "id": "638",
                    "markId": "24",
                    "systemId": "1310",
                    "name": "1310"
                },
                {
                    "id": "639",
                    "markId": "24",
                    "systemId": "1325",
                    "name": "1325"
                },
                {
                    "id": "640",
                    "markId": "24",
                    "systemId": "1410",
                    "name": "1410"
                },
                {
                    "id": "641",
                    "markId": "24",
                    "systemId": "DOKKER",
                    "name": "Dokker"
                },
                {
                    "id": "642",
                    "markId": "24",
                    "systemId": "DUSTER",
                    "name": "Duster"
                },
                {
                    "id": "643",
                    "markId": "24",
                    "systemId": "LODGY",
                    "name": "Lodgy"
                },
                {
                    "id": "644",
                    "markId": "24",
                    "systemId": "LOGAN",
                    "name": "Logan"
                },
                {
                    "id": "645",
                    "markId": "24",
                    "systemId": "NOVA",
                    "name": "Nova"
                },
                {
                    "id": "646",
                    "markId": "24",
                    "systemId": "PICK-UP",
                    "name": "Pick-Up"
                },
                {
                    "id": "647",
                    "markId": "24",
                    "systemId": "SANDERO",
                    "name": "Sandero"
                },
                {
                    "id": "648",
                    "markId": "24",
                    "systemId": "SOLENZA",
                    "name": "Solenza"
                },
                {
                    "id": "649",
                    "markId": "24",
                    "systemId": "SUPERNOVA",
                    "name": "SuperNova"
                },
                {
                    "id": "650",
                    "markId": "25",
                    "systemId": "ALPHEON",
                    "name": "Alpheon"
                },
                {
                    "id": "651",
                    "markId": "25",
                    "systemId": "ARCADIA",
                    "name": "Arcadia"
                },
                {
                    "id": "652",
                    "markId": "25",
                    "systemId": "CHAIRMAN",
                    "name": "Chairman"
                },
                {
                    "id": "653",
                    "markId": "25",
                    "systemId": "DAMAS",
                    "name": "Damas"
                },
                {
                    "id": "654",
                    "markId": "25",
                    "systemId": "ESPERO",
                    "name": "Espero"
                },
                {
                    "id": "655",
                    "markId": "25",
                    "systemId": "EVANDA",
                    "name": "Evanda"
                },
                {
                    "id": "656",
                    "markId": "25",
                    "systemId": "G2X",
                    "name": "G2X"
                },
                {
                    "id": "657",
                    "markId": "25",
                    "systemId": "GENTRA",
                    "name": "Gentra"
                },
                {
                    "id": "658",
                    "markId": "25",
                    "systemId": "KALOS",
                    "name": "Kalos"
                },
                {
                    "id": "659",
                    "markId": "25",
                    "systemId": "KORANDO",
                    "name": "Korando"
                },
                {
                    "id": "660",
                    "markId": "25",
                    "systemId": "LACETTI",
                    "name": "Lacetti"
                },
                {
                    "id": "661",
                    "markId": "25",
                    "systemId": "LACETTI_PREMIERE",
                    "name": "Lacetti Premiere"
                },
                {
                    "id": "662",
                    "markId": "25",
                    "systemId": "LANOS",
                    "name": "Lanos"
                },
                {
                    "id": "663",
                    "markId": "25",
                    "systemId": "LEGANZA",
                    "name": "Leganza"
                },
                {
                    "id": "664",
                    "markId": "25",
                    "systemId": "LEMANS",
                    "name": "LeMans"
                },
                {
                    "id": "665",
                    "markId": "25",
                    "systemId": "MAGNUS",
                    "name": "Magnus"
                },
                {
                    "id": "666",
                    "markId": "25",
                    "systemId": "MATIZ",
                    "name": "Matiz"
                },
                {
                    "id": "667",
                    "markId": "25",
                    "systemId": "MATIZ_CREATIVE",
                    "name": "Matiz Creative"
                },
                {
                    "id": "668",
                    "markId": "25",
                    "systemId": "MUSSO",
                    "name": "Musso"
                },
                {
                    "id": "669",
                    "markId": "25",
                    "systemId": "NEXIA",
                    "name": "Nexia"
                },
                {
                    "id": "670",
                    "markId": "25",
                    "systemId": "NUBIRA",
                    "name": "Nubira"
                },
                {
                    "id": "671",
                    "markId": "25",
                    "systemId": "PRINCE",
                    "name": "Prince"
                },
                {
                    "id": "672",
                    "markId": "25",
                    "systemId": "RACER",
                    "name": "Racer"
                },
                {
                    "id": "673",
                    "markId": "25",
                    "systemId": "REZZO",
                    "name": "Rezzo"
                },
                {
                    "id": "674",
                    "markId": "25",
                    "systemId": "ROYALE",
                    "name": "Royale"
                },
                {
                    "id": "675",
                    "markId": "25",
                    "systemId": "SENS",
                    "name": "Sens"
                },
                {
                    "id": "676",
                    "markId": "25",
                    "systemId": "TACUMA",
                    "name": "Tacuma"
                },
                {
                    "id": "677",
                    "markId": "25",
                    "systemId": "TICO",
                    "name": "Tico"
                },
                {
                    "id": "678",
                    "markId": "25",
                    "systemId": "TOSCA",
                    "name": "Tosca"
                },
                {
                    "id": "679",
                    "markId": "25",
                    "systemId": "WINSTORM",
                    "name": "Winstorm"
                },
                {
                    "id": "680",
                    "markId": "26",
                    "systemId": "ALTIS",
                    "name": "Altis"
                },
                {
                    "id": "681",
                    "markId": "26",
                    "systemId": "APPLAUSE",
                    "name": "Applause"
                },
                {
                    "id": "682",
                    "markId": "26",
                    "systemId": "ATRAI",
                    "name": "Atrai"
                },
                {
                    "id": "683",
                    "markId": "26",
                    "systemId": "BE-GO",
                    "name": "Be-go"
                },
                {
                    "id": "684",
                    "markId": "26",
                    "systemId": "BEE",
                    "name": "Bee"
                },
                {
                    "id": "685",
                    "markId": "26",
                    "systemId": "BOON",
                    "name": "Boon"
                },
                {
                    "id": "686",
                    "markId": "26",
                    "systemId": "BOON_LUMINAS",
                    "name": "Boon Luminas"
                },
                {
                    "id": "687",
                    "markId": "26",
                    "systemId": "CAST",
                    "name": "Cast"
                },
                {
                    "id": "688",
                    "markId": "26",
                    "systemId": "CERIA",
                    "name": "Ceria"
                },
                {
                    "id": "689",
                    "markId": "26",
                    "systemId": "CHARADE",
                    "name": "Charade"
                },
                {
                    "id": "690",
                    "markId": "26",
                    "systemId": "CHARMANT",
                    "name": "Charmant"
                },
                {
                    "id": "691",
                    "markId": "26",
                    "systemId": "COO",
                    "name": "Coo"
                },
                {
                    "id": "692",
                    "markId": "26",
                    "systemId": "COPEN",
                    "name": "Copen"
                },
                {
                    "id": "693",
                    "markId": "26",
                    "systemId": "CUORE",
                    "name": "Cuore"
                },
                {
                    "id": "694",
                    "markId": "26",
                    "systemId": "DELTA_WAGON",
                    "name": "Delta Wagon"
                },
                {
                    "id": "695",
                    "markId": "26",
                    "systemId": "ESSE",
                    "name": "Esse"
                },
                {
                    "id": "696",
                    "markId": "26",
                    "systemId": "FELLOW",
                    "name": "Fellow"
                },
                {
                    "id": "697",
                    "markId": "26",
                    "systemId": "FEROZA",
                    "name": "Feroza"
                },
                {
                    "id": "698",
                    "markId": "26",
                    "systemId": "GRAN_MOVE",
                    "name": "Gran Move"
                },
                {
                    "id": "699",
                    "markId": "26",
                    "systemId": "HIJET",
                    "name": "Hijet"
                },
                {
                    "id": "700",
                    "markId": "26",
                    "systemId": "LEEZA",
                    "name": "Leeza"
                },
                {
                    "id": "701",
                    "markId": "26",
                    "systemId": "MATERIA",
                    "name": "Materia"
                },
                {
                    "id": "702",
                    "markId": "26",
                    "systemId": "MAX",
                    "name": "MAX"
                },
                {
                    "id": "703",
                    "markId": "26",
                    "systemId": "MEBIUS",
                    "name": "Mebius"
                },
                {
                    "id": "704",
                    "markId": "26",
                    "systemId": "MIDGET",
                    "name": "Midget"
                },
                {
                    "id": "705",
                    "markId": "26",
                    "systemId": "MIRA",
                    "name": "Mira"
                },
                {
                    "id": "706",
                    "markId": "26",
                    "systemId": "MIRA_E:S",
                    "name": "Mira e:S"
                },
                {
                    "id": "707",
                    "markId": "26",
                    "systemId": "MIRA_GINO",
                    "name": "Mira Gino"
                },
                {
                    "id": "708",
                    "markId": "26",
                    "systemId": "MOVE",
                    "name": "Move"
                },
                {
                    "id": "709",
                    "markId": "26",
                    "systemId": "MOVE_CANBUS",
                    "name": "Move Canbus"
                },
                {
                    "id": "710",
                    "markId": "26",
                    "systemId": "MOVE_CONTE",
                    "name": "Move Conte"
                },
                {
                    "id": "711",
                    "markId": "26",
                    "systemId": "MOVE_LATTE",
                    "name": "Move Latte"
                },
                {
                    "id": "712",
                    "markId": "26",
                    "systemId": "NAKED",
                    "name": "Naked"
                },
                {
                    "id": "713",
                    "markId": "26",
                    "systemId": "OPTI",
                    "name": "Opti"
                },
                {
                    "id": "714",
                    "markId": "26",
                    "systemId": "PYZAR",
                    "name": "Pyzar"
                },
                {
                    "id": "715",
                    "markId": "26",
                    "systemId": "ROCKY",
                    "name": "Rocky"
                },
                {
                    "id": "716",
                    "markId": "26",
                    "systemId": "RUGGER",
                    "name": "Rugger"
                },
                {
                    "id": "717",
                    "markId": "26",
                    "systemId": "SIRION",
                    "name": "Sirion"
                },
                {
                    "id": "718",
                    "markId": "26",
                    "systemId": "SONICA",
                    "name": "Sonica"
                },
                {
                    "id": "719",
                    "markId": "26",
                    "systemId": "STORIA",
                    "name": "Storia"
                },
                {
                    "id": "720",
                    "markId": "26",
                    "systemId": "TAFT",
                    "name": "Taft"
                },
                {
                    "id": "721",
                    "markId": "26",
                    "systemId": "TANTO",
                    "name": "Tanto"
                },
                {
                    "id": "722",
                    "markId": "26",
                    "systemId": "TANTO_EXE",
                    "name": "Tanto Exe"
                },
                {
                    "id": "723",
                    "markId": "26",
                    "systemId": "TERIOS",
                    "name": "Terios"
                },
                {
                    "id": "724",
                    "markId": "26",
                    "systemId": "THOR",
                    "name": "Thor"
                },
                {
                    "id": "725",
                    "markId": "26",
                    "systemId": "TREVIS",
                    "name": "Trevis"
                },
                {
                    "id": "726",
                    "markId": "26",
                    "systemId": "WAKE",
                    "name": "Wake"
                },
                {
                    "id": "727",
                    "markId": "26",
                    "systemId": "WILDCAT",
                    "name": "Wildcat"
                },
                {
                    "id": "728",
                    "markId": "26",
                    "systemId": "XENIA",
                    "name": "Xenia"
                },
                {
                    "id": "729",
                    "markId": "26",
                    "systemId": "YRV",
                    "name": "YRV"
                },
                {
                    "id": "730",
                    "markId": "27",
                    "systemId": "DS420",
                    "name": "DS420"
                },
                {
                    "id": "731",
                    "markId": "27",
                    "systemId": "SOVEREIGN",
                    "name": "Sovereign"
                },
                {
                    "id": "732",
                    "markId": "27",
                    "systemId": "SP250",
                    "name": "SP250"
                },
                {
                    "id": "733",
                    "markId": "27",
                    "systemId": "X300",
                    "name": "X300"
                },
                {
                    "id": "734",
                    "markId": "27",
                    "systemId": "X308",
                    "name": "X308"
                },
                {
                    "id": "735",
                    "markId": "27",
                    "systemId": "X350",
                    "name": "X350"
                },
                {
                    "id": "736",
                    "markId": "27",
                    "systemId": "XJ40",
                    "name": "XJ40"
                },
                {
                    "id": "737",
                    "markId": "27",
                    "systemId": "XJS",
                    "name": "XJS"
                },
                {
                    "id": "738",
                    "markId": "28",
                    "systemId": "STRADALE",
                    "name": "Stradale"
                },
                {
                    "id": "739",
                    "markId": "29",
                    "systemId": "240Z",
                    "name": "240Z"
                },
                {
                    "id": "740",
                    "markId": "29",
                    "systemId": "280ZX",
                    "name": "280ZX"
                },
                {
                    "id": "741",
                    "markId": "29",
                    "systemId": "720",
                    "name": "720"
                },
                {
                    "id": "742",
                    "markId": "29",
                    "systemId": "BLUEBIRD",
                    "name": "Bluebird"
                },
                {
                    "id": "743",
                    "markId": "29",
                    "systemId": "CHERRY",
                    "name": "Cherry"
                },
                {
                    "id": "744",
                    "markId": "29",
                    "systemId": "GO",
                    "name": "GO"
                },
                {
                    "id": "745",
                    "markId": "29",
                    "systemId": "GO+",
                    "name": "GO+"
                },
                {
                    "id": "746",
                    "markId": "29",
                    "systemId": "LAUREL",
                    "name": "Laurel"
                },
                {
                    "id": "747",
                    "markId": "29",
                    "systemId": "MI-DO",
                    "name": "mi-DO"
                },
                {
                    "id": "748",
                    "markId": "29",
                    "systemId": "ON-DO",
                    "name": "on-DO"
                },
                {
                    "id": "749",
                    "markId": "29",
                    "systemId": "STANZA",
                    "name": "Stanza"
                },
                {
                    "id": "750",
                    "markId": "29",
                    "systemId": "SUNNY",
                    "name": "Sunny"
                },
                {
                    "id": "751",
                    "markId": "29",
                    "systemId": "URVAN",
                    "name": "Urvan"
                },
                {
                    "id": "752",
                    "markId": "29",
                    "systemId": "VIOLET",
                    "name": "Violet"
                },
                {
                    "id": "753",
                    "markId": "30",
                    "systemId": "BIGUA",
                    "name": "Bigua"
                },
                {
                    "id": "754",
                    "markId": "30",
                    "systemId": "GUARA",
                    "name": "Guara"
                },
                {
                    "id": "755",
                    "markId": "30",
                    "systemId": "LONGCHAMP",
                    "name": "Longchamp"
                },
                {
                    "id": "756",
                    "markId": "30",
                    "systemId": "MANGUSTA",
                    "name": "Mangusta"
                },
                {
                    "id": "757",
                    "markId": "30",
                    "systemId": "PANTERA",
                    "name": "Pantera"
                },
                {
                    "id": "758",
                    "markId": "30",
                    "systemId": "VALLELUNGA",
                    "name": "Vallelunga"
                },
                {
                    "id": "759",
                    "markId": "31",
                    "systemId": "D6",
                    "name": "D6"
                },
                {
                    "id": "760",
                    "markId": "32",
                    "systemId": "ANTELOPE",
                    "name": "Antelope"
                },
                {
                    "id": "761",
                    "markId": "32",
                    "systemId": "COWBOY",
                    "name": "Cowboy"
                },
                {
                    "id": "762",
                    "markId": "32",
                    "systemId": "AURORA",
                    "name": "Aurora"
                },
                {
                    "id": "763",
                    "markId": "32",
                    "systemId": "LAND_CROWN",
                    "name": "Land Crown"
                },
                {
                    "id": "764",
                    "markId": "32",
                    "systemId": "PLUTUS",
                    "name": "Plutus"
                },
                {
                    "id": "765",
                    "markId": "32",
                    "systemId": "SALADIN",
                    "name": "Saladin"
                },
                {
                    "id": "766",
                    "markId": "32",
                    "systemId": "SHUTTLE",
                    "name": "Shuttle"
                },
                {
                    "id": "767",
                    "markId": "33",
                    "systemId": "600",
                    "name": "600"
                },
                {
                    "id": "768",
                    "markId": "33",
                    "systemId": "ARIES",
                    "name": "Aries"
                },
                {
                    "id": "769",
                    "markId": "33",
                    "systemId": "AVENGER",
                    "name": "Avenger"
                },
                {
                    "id": "770",
                    "markId": "33",
                    "systemId": "CALIBER",
                    "name": "Caliber"
                },
                {
                    "id": "771",
                    "markId": "33",
                    "systemId": "CARAVAN",
                    "name": "Caravan"
                },
                {
                    "id": "772",
                    "markId": "33",
                    "systemId": "CHALLENGER",
                    "name": "Challenger"
                },
                {
                    "id": "773",
                    "markId": "33",
                    "systemId": "CHARGER",
                    "name": "Charger"
                },
                {
                    "id": "774",
                    "markId": "33",
                    "systemId": "CHARGER_DAYTONA",
                    "name": "Charger Daytona"
                },
                {
                    "id": "775",
                    "markId": "33",
                    "systemId": "COLT",
                    "name": "Colt"
                },
                {
                    "id": "776",
                    "markId": "33",
                    "systemId": "CUSTOM_ROYAL",
                    "name": "Custom Royal"
                },
                {
                    "id": "777",
                    "markId": "33",
                    "systemId": "D/W_SERIES",
                    "name": "D/W Series"
                },
                {
                    "id": "778",
                    "markId": "33",
                    "systemId": "D8",
                    "name": "D8"
                },
                {
                    "id": "779",
                    "markId": "33",
                    "systemId": "DAKOTA",
                    "name": "Dakota"
                },
                {
                    "id": "780",
                    "markId": "33",
                    "systemId": "DART",
                    "name": "Dart"
                },
                {
                    "id": "781",
                    "markId": "33",
                    "systemId": "DAYTONA",
                    "name": "Daytona"
                },
                {
                    "id": "782",
                    "markId": "33",
                    "systemId": "DIPLOMAT",
                    "name": "Diplomat"
                },
                {
                    "id": "783",
                    "markId": "33",
                    "systemId": "DURANGO",
                    "name": "Durango"
                },
                {
                    "id": "784",
                    "markId": "33",
                    "systemId": "DYNASTY",
                    "name": "Dynasty"
                },
                {
                    "id": "785",
                    "markId": "33",
                    "systemId": "INTREPID",
                    "name": "Intrepid"
                },
                {
                    "id": "786",
                    "markId": "33",
                    "systemId": "JOURNEY",
                    "name": "Journey"
                },
                {
                    "id": "787",
                    "markId": "33",
                    "systemId": "LANCER",
                    "name": "Lancer"
                },
                {
                    "id": "788",
                    "markId": "33",
                    "systemId": "MAGNUM",
                    "name": "Magnum"
                },
                {
                    "id": "789",
                    "markId": "33",
                    "systemId": "MAYFAIR",
                    "name": "Mayfair"
                },
                {
                    "id": "790",
                    "markId": "33",
                    "systemId": "MONACO",
                    "name": "Monaco"
                },
                {
                    "id": "791",
                    "markId": "33",
                    "systemId": "NEON",
                    "name": "Neon"
                },
                {
                    "id": "792",
                    "markId": "33",
                    "systemId": "NITRO",
                    "name": "Nitro"
                },
                {
                    "id": "793",
                    "markId": "33",
                    "systemId": "OMNI",
                    "name": "Omni"
                },
                {
                    "id": "794",
                    "markId": "33",
                    "systemId": "RAIDER",
                    "name": "Raider"
                },
                {
                    "id": "795",
                    "markId": "33",
                    "systemId": "RAM",
                    "name": "RAM"
                },
                {
                    "id": "796",
                    "markId": "33",
                    "systemId": "RAMCHARGER",
                    "name": "Ramcharger"
                },
                {
                    "id": "797",
                    "markId": "33",
                    "systemId": "SHADOW",
                    "name": "Shadow"
                },
                {
                    "id": "798",
                    "markId": "33",
                    "systemId": "SPIRIT",
                    "name": "Spirit"
                },
                {
                    "id": "799",
                    "markId": "33",
                    "systemId": "STEALTH",
                    "name": "Stealth"
                },
                {
                    "id": "800",
                    "markId": "33",
                    "systemId": "STRATUS",
                    "name": "Stratus"
                },
                {
                    "id": "801",
                    "markId": "33",
                    "systemId": "VIPER",
                    "name": "Viper"
                },
                {
                    "id": "802",
                    "markId": "33",
                    "systemId": "WC_SERIES",
                    "name": "WC Series"
                },
                {
                    "id": "803",
                    "markId": "34",
                    "systemId": "370",
                    "name": "370"
                },
                {
                    "id": "804",
                    "markId": "34",
                    "systemId": "580",
                    "name": "580"
                },
                {
                    "id": "805",
                    "markId": "34",
                    "systemId": "A30",
                    "name": "A30"
                },
                {
                    "id": "806",
                    "markId": "34",
                    "systemId": "A9",
                    "name": "A9"
                },
                {
                    "id": "807",
                    "markId": "34",
                    "systemId": "AX7",
                    "name": "AX7"
                },
                {
                    "id": "808",
                    "markId": "34",
                    "systemId": "H30_CROSS",
                    "name": "H30 Cross"
                },
                {
                    "id": "809",
                    "markId": "34",
                    "systemId": "MPV",
                    "name": "MPV"
                },
                {
                    "id": "810",
                    "markId": "34",
                    "systemId": "OTING",
                    "name": "Oting"
                },
                {
                    "id": "811",
                    "markId": "34",
                    "systemId": "RICH",
                    "name": "Rich"
                },
                {
                    "id": "812",
                    "markId": "34",
                    "systemId": "S30",
                    "name": "S30"
                },
                {
                    "id": "813",
                    "markId": "35",
                    "systemId": "ASSOL",
                    "name": "Assol"
                },
                {
                    "id": "814",
                    "markId": "35",
                    "systemId": "KONDOR",
                    "name": "Kondor"
                },
                {
                    "id": "815",
                    "markId": "35",
                    "systemId": "ORION",
                    "name": "Orion"
                },
                {
                    "id": "816",
                    "markId": "36",
                    "systemId": "PREMIER",
                    "name": "Premier"
                },
                {
                    "id": "817",
                    "markId": "36",
                    "systemId": "SUMMIT",
                    "name": "Summit"
                },
                {
                    "id": "818",
                    "markId": "36",
                    "systemId": "TALON",
                    "name": "Talon"
                },
                {
                    "id": "819",
                    "markId": "36",
                    "systemId": "VISION",
                    "name": "Vision"
                },
                {
                    "id": "820",
                    "markId": "36",
                    "systemId": "VISTA",
                    "name": "Vista"
                },
                {
                    "id": "821",
                    "markId": "37",
                    "systemId": "SERIES_IV",
                    "name": "Series IV"
                },
                {
                    "id": "822",
                    "markId": "37",
                    "systemId": "SERIES_V",
                    "name": "Series V"
                },
                {
                    "id": "823",
                    "markId": "38",
                    "systemId": "BESTURN_B50",
                    "name": "Bestrun B50"
                },
                {
                    "id": "824",
                    "markId": "38",
                    "systemId": "BESTRUN_B70",
                    "name": "Bestrun B70"
                },
                {
                    "id": "825",
                    "markId": "38",
                    "systemId": "BESTRUN_X40",
                    "name": "Bestrun X40"
                },
                {
                    "id": "826",
                    "markId": "38",
                    "systemId": "BESTRUN_X80",
                    "name": "Bestrun X80"
                },
                {
                    "id": "827",
                    "markId": "38",
                    "systemId": "D60",
                    "name": "D60"
                },
                {
                    "id": "828",
                    "markId": "38",
                    "systemId": "JINN",
                    "name": "Jinn"
                },
                {
                    "id": "829",
                    "markId": "38",
                    "systemId": "OLEY",
                    "name": "Oley"
                },
                {
                    "id": "830",
                    "markId": "38",
                    "systemId": "V2",
                    "name": "V2"
                },
                {
                    "id": "831",
                    "markId": "38",
                    "systemId": "V5",
                    "name": "V5"
                },
                {
                    "id": "832",
                    "markId": "38",
                    "systemId": "VITA",
                    "name": "Vita"
                },
                {
                    "id": "833",
                    "markId": "39",
                    "systemId": "250_GTO",
                    "name": "250_GTO"
                },
                {
                    "id": "834",
                    "markId": "39",
                    "systemId": "328",
                    "name": "328"
                },
                {
                    "id": "835",
                    "markId": "39",
                    "systemId": "348",
                    "name": "348"
                },
                {
                    "id": "836",
                    "markId": "39",
                    "systemId": "360",
                    "name": "360"
                },
                {
                    "id": "837",
                    "markId": "39",
                    "systemId": "400",
                    "name": "400"
                },
                {
                    "id": "838",
                    "markId": "39",
                    "systemId": "412",
                    "name": "412"
                },
                {
                    "id": "839",
                    "markId": "39",
                    "systemId": "456",
                    "name": "456"
                },
                {
                    "id": "840",
                    "markId": "39",
                    "systemId": "458",
                    "name": "458"
                },
                {
                    "id": "841",
                    "markId": "39",
                    "systemId": "488",
                    "name": "488"
                },
                {
                    "id": "842",
                    "markId": "39",
                    "systemId": "512_BB",
                    "name": "512 BB"
                },
                {
                    "id": "843",
                    "markId": "39",
                    "systemId": "512_M",
                    "name": "512 M"
                },
                {
                    "id": "844",
                    "markId": "39",
                    "systemId": "512_TR",
                    "name": "512 TR"
                },
                {
                    "id": "845",
                    "markId": "39",
                    "systemId": "550",
                    "name": "550"
                },
                {
                    "id": "846",
                    "markId": "39",
                    "systemId": "575M",
                    "name": "575M"
                },
                {
                    "id": "847",
                    "markId": "39",
                    "systemId": "599",
                    "name": "599"
                },
                {
                    "id": "848",
                    "markId": "39",
                    "systemId": "612",
                    "name": "612"
                },
                {
                    "id": "849",
                    "markId": "39",
                    "systemId": "812",
                    "name": "812"
                },
                {
                    "id": "850",
                    "markId": "39",
                    "systemId": "CALIFORNIA",
                    "name": "California"
                },
                {
                    "id": "851",
                    "markId": "39",
                    "systemId": "DINO_206_GT",
                    "name": "Dino 206 GT"
                },
                {
                    "id": "852",
                    "markId": "39",
                    "systemId": "DINO_208/308_GT4",
                    "name": "Dino 208/308 GT"
                },
                {
                    "id": "853",
                    "markId": "39",
                    "systemId": "DINO_246_GT",
                    "name": "Dino 246 GT"
                },
                {
                    "id": "854",
                    "markId": "39",
                    "systemId": "ENZO",
                    "name": "Enzo"
                },
                {
                    "id": "855",
                    "markId": "39",
                    "systemId": "F12BERLINETTA",
                    "name": "F12Berlinetta"
                },
                {
                    "id": "856",
                    "markId": "39",
                    "systemId": "F355",
                    "name": "F355"
                },
                {
                    "id": "857",
                    "markId": "39",
                    "systemId": "F40",
                    "name": "F40"
                },
                {
                    "id": "858",
                    "markId": "39",
                    "systemId": "F430",
                    "name": "F430"
                },
                {
                    "id": "859",
                    "markId": "39",
                    "systemId": "F50",
                    "name": "F50"
                },
                {
                    "id": "860",
                    "markId": "39",
                    "systemId": "F8",
                    "name": "F8"
                },
                {
                    "id": "861",
                    "markId": "39",
                    "systemId": "FF",
                    "name": "FF"
                },
                {
                    "id": "862",
                    "markId": "39",
                    "systemId": "FXX_K",
                    "name": "FXX K"
                },
                {
                    "id": "863",
                    "markId": "39",
                    "systemId": "GTC4LUSSO",
                    "name": "GTC4Lusso"
                },
                {
                    "id": "864",
                    "markId": "39",
                    "systemId": "LAFERRARI",
                    "name": "LaFerrari"
                },
                {
                    "id": "865",
                    "markId": "39",
                    "systemId": "MONDIAL",
                    "name": "Mondial"
                },
                {
                    "id": "866",
                    "markId": "39",
                    "systemId": "MONZA_SP",
                    "name": "Monza SP"
                },
                {
                    "id": "867",
                    "markId": "39",
                    "systemId": "PORTOFINO",
                    "name": "Portofino"
                },
                {
                    "id": "868",
                    "markId": "39",
                    "systemId": "ROMA",
                    "name": "Roma"
                },
                {
                    "id": "869",
                    "markId": "39",
                    "systemId": "SF90_STRADALE",
                    "name": "SF90 Stradale"
                },
                {
                    "id": "870",
                    "markId": "39",
                    "systemId": "TESTAROSSA",
                    "name": "Testarossa"
                },
                {
                    "id": "871",
                    "markId": "40",
                    "systemId": "124",
                    "name": "124"
                },
                {
                    "id": "872",
                    "markId": "40",
                    "systemId": "124_SPIDER",
                    "name": "124 Spider"
                },
                {
                    "id": "873",
                    "markId": "40",
                    "systemId": "124_SPORT_SPIDER",
                    "name": "124 Sport Spider"
                },
                {
                    "id": "874",
                    "markId": "40",
                    "systemId": "125",
                    "name": "125"
                },
                {
                    "id": "875",
                    "markId": "40",
                    "systemId": "126",
                    "name": "126"
                },
                {
                    "id": "876",
                    "markId": "40",
                    "systemId": "127",
                    "name": "127"
                },
                {
                    "id": "877",
                    "markId": "40",
                    "systemId": "128",
                    "name": "128"
                },
                {
                    "id": "878",
                    "markId": "40",
                    "systemId": "130",
                    "name": "130"
                },
                {
                    "id": "879",
                    "markId": "40",
                    "systemId": "131",
                    "name": "131"
                },
                {
                    "id": "880",
                    "markId": "40",
                    "systemId": "132",
                    "name": "132"
                },
                {
                    "id": "881",
                    "markId": "40",
                    "systemId": "238",
                    "name": "238"
                },
                {
                    "id": "882",
                    "markId": "40",
                    "systemId": "500",
                    "name": "500"
                },
                {
                    "id": "883",
                    "markId": "40",
                    "systemId": "500L",
                    "name": "500L"
                },
                {
                    "id": "884",
                    "markId": "40",
                    "systemId": "500X",
                    "name": "500X"
                },
                {
                    "id": "885",
                    "markId": "40",
                    "systemId": "508",
                    "name": "508"
                },
                {
                    "id": "886",
                    "markId": "40",
                    "systemId": "600",
                    "name": "600"
                },
                {
                    "id": "887",
                    "markId": "40",
                    "systemId": "900T",
                    "name": "900T"
                },
                {
                    "id": "888",
                    "markId": "40",
                    "systemId": "ALBEA",
                    "name": "Albea"
                },
                {
                    "id": "889",
                    "markId": "40",
                    "systemId": "ARGENTA",
                    "name": "Argenta"
                },
                {
                    "id": "890",
                    "markId": "40",
                    "systemId": "BARCHETTA",
                    "name": "Barchetta"
                },
                {
                    "id": "891",
                    "markId": "40",
                    "systemId": "BRAVA",
                    "name": "Brava"
                },
                {
                    "id": "892",
                    "markId": "40",
                    "systemId": "BRAVO",
                    "name": "Bravo"
                },
                {
                    "id": "893",
                    "markId": "40",
                    "systemId": "CINQUECENTO",
                    "name": "cinquecento"
                },
                {
                    "id": "894",
                    "markId": "40",
                    "systemId": "COUPE",
                    "name": "Coupe"
                },
                {
                    "id": "895",
                    "markId": "40",
                    "systemId": "CROMA",
                    "name": "Croma"
                },
                {
                    "id": "896",
                    "markId": "40",
                    "systemId": "DOBLO",
                    "name": "Doblo"
                },
                {
                    "id": "897",
                    "markId": "40",
                    "systemId": "DUNA",
                    "name": "Duna"
                },
                {
                    "id": "898",
                    "markId": "40",
                    "systemId": "FIORINO",
                    "name": "Fiorino"
                },
                {
                    "id": "899",
                    "markId": "40",
                    "systemId": "FREEMONT",
                    "name": "Freemont"
                },
                {
                    "id": "900",
                    "markId": "40",
                    "systemId": "FULLBACK",
                    "name": "Fullback"
                },
                {
                    "id": "901",
                    "markId": "40",
                    "systemId": "IDEA",
                    "name": "Idea"
                },
                {
                    "id": "902",
                    "markId": "40",
                    "systemId": "LINEA",
                    "name": "Linea"
                },
                {
                    "id": "903",
                    "markId": "40",
                    "systemId": "MAREA",
                    "name": "Marea"
                },
                {
                    "id": "904",
                    "markId": "40",
                    "systemId": "MULTIPLA",
                    "name": "Multipla"
                },
                {
                    "id": "905",
                    "markId": "40",
                    "systemId": "PALIO",
                    "name": "Palio"
                },
                {
                    "id": "906",
                    "markId": "40",
                    "systemId": "PANDA",
                    "name": "Panda"
                },
                {
                    "id": "907",
                    "markId": "40",
                    "systemId": "PUNTO",
                    "name": "Punto"
                },
                {
                    "id": "908",
                    "markId": "40",
                    "systemId": "QUBO",
                    "name": "Qubo"
                },
                {
                    "id": "909",
                    "markId": "40",
                    "systemId": "REGATA",
                    "name": "Regata"
                },
                {
                    "id": "910",
                    "markId": "40",
                    "systemId": "RITMO",
                    "name": "Ritmo"
                },
                {
                    "id": "911",
                    "markId": "40",
                    "systemId": "SCUDO",
                    "name": "Scudo"
                },
                {
                    "id": "912",
                    "markId": "40",
                    "systemId": "SEDICI",
                    "name": "Sedici"
                },
                {
                    "id": "913",
                    "markId": "40",
                    "systemId": "SEICENTO",
                    "name": "Seicento"
                },
                {
                    "id": "914",
                    "markId": "40",
                    "systemId": "SIENA",
                    "name": "Siena"
                },
                {
                    "id": "915",
                    "markId": "40",
                    "systemId": "STILO",
                    "name": "Stilo"
                },
                {
                    "id": "916",
                    "markId": "40",
                    "systemId": "STRADA",
                    "name": "Strada"
                },
                {
                    "id": "917",
                    "markId": "40",
                    "systemId": "TEMPRA",
                    "name": "Tempra"
                },
                {
                    "id": "918",
                    "markId": "40",
                    "systemId": "TIPO",
                    "name": "Tipo"
                },
                {
                    "id": "919",
                    "markId": "40",
                    "systemId": "ULYSSE",
                    "name": "Ulysse"
                },
                {
                    "id": "920",
                    "markId": "40",
                    "systemId": "UNO",
                    "name": "Uno"
                },
                {
                    "id": "921",
                    "markId": "40",
                    "systemId": "X_1/9",
                    "name": "X 1/9"
                },
                {
                    "id": "922",
                    "markId": "41",
                    "systemId": "AEROSTAR",
                    "name": "Aerostar"
                },
                {
                    "id": "923",
                    "markId": "41",
                    "systemId": "ASPIRE",
                    "name": "Aspire"
                },
                {
                    "id": "924",
                    "markId": "41",
                    "systemId": "B-MAX",
                    "name": "B-MAX"
                },
                {
                    "id": "925",
                    "markId": "41",
                    "systemId": "BRONCO",
                    "name": "Bronco"
                },
                {
                    "id": "926",
                    "markId": "41",
                    "systemId": "BRONCO-II",
                    "name": "Bronco-II"
                },
                {
                    "id": "927",
                    "markId": "41",
                    "systemId": "C-MAX",
                    "name": "C-MAX"
                },
                {
                    "id": "928",
                    "markId": "41",
                    "systemId": "CAPRI",
                    "name": "Capri"
                },
                {
                    "id": "929",
                    "markId": "41",
                    "systemId": "CONSUL",
                    "name": "Consul"
                },
                {
                    "id": "930",
                    "markId": "41",
                    "systemId": "CONTOUR",
                    "name": "Contour"
                },
                {
                    "id": "931",
                    "markId": "41",
                    "systemId": "CORTINA",
                    "name": "Cortina"
                },
                {
                    "id": "932",
                    "markId": "41",
                    "systemId": "COUGAR",
                    "name": "Cougar"
                },
                {
                    "id": "933",
                    "markId": "41",
                    "systemId": "CROWN_VICTORIA",
                    "name": "Crown Victoria"
                },
                {
                    "id": "934",
                    "markId": "41",
                    "systemId": "CUSTOM",
                    "name": "Custom"
                },
                {
                    "id": "935",
                    "markId": "41",
                    "systemId": "ECONOLINE",
                    "name": "Econoline"
                },
                {
                    "id": "936",
                    "markId": "41",
                    "systemId": "ECOSPORT",
                    "name": "EcoSport"
                },
                {
                    "id": "937",
                    "markId": "41",
                    "systemId": "EDGE",
                    "name": "Edge"
                },
                {
                    "id": "938",
                    "markId": "41",
                    "systemId": "ESCAPE",
                    "name": "Escape"
                },
                {
                    "id": "939",
                    "markId": "41",
                    "systemId": "ESCORT",
                    "name": "Escort"
                },
                {
                    "id": "940",
                    "markId": "41",
                    "systemId": "EVEREST",
                    "name": "Everest"
                },
                {
                    "id": "941",
                    "markId": "41",
                    "systemId": "EXCURSION",
                    "name": "Excursion"
                },
                {
                    "id": "942",
                    "markId": "41",
                    "systemId": "EXPEDITION",
                    "name": "Expedition"
                },
                {
                    "id": "943",
                    "markId": "41",
                    "systemId": "EXPLORER",
                    "name": "Explorer"
                },
                {
                    "id": "944",
                    "markId": "41",
                    "systemId": "EXPLORER_SPORT_TRAC",
                    "name": "Explorer Sport Trac"
                },
                {
                    "id": "945",
                    "markId": "41",
                    "systemId": "F-150",
                    "name": "F-150"
                },
                {
                    "id": "946",
                    "markId": "41",
                    "systemId": "FAIRLANE",
                    "name": "Fairlane"
                },
                {
                    "id": "947",
                    "markId": "41",
                    "systemId": "FAIRMONT",
                    "name": "Fairmont"
                },
                {
                    "id": "948",
                    "markId": "41",
                    "systemId": "FALCON",
                    "name": "Falcon"
                },
                {
                    "id": "949",
                    "markId": "41",
                    "systemId": "FESTIVA",
                    "name": "Festiva"
                },
                {
                    "id": "950",
                    "markId": "41",
                    "systemId": "FIESTA",
                    "name": "Fiesta"
                },
                {
                    "id": "951",
                    "markId": "41",
                    "systemId": "FIESTA_ST",
                    "name": "Fiesta ST"
                },
                {
                    "id": "952",
                    "markId": "41",
                    "systemId": "FIVE_HUNDRED",
                    "name": "Five Hundred"
                },
                {
                    "id": "953",
                    "markId": "41",
                    "systemId": "FLEX",
                    "name": "Flex"
                },
                {
                    "id": "954",
                    "markId": "41",
                    "systemId": "FOCUS",
                    "name": "Focus"
                },
                {
                    "id": "955",
                    "markId": "41",
                    "systemId": "FOCUS_RS",
                    "name": "Focus RS"
                },
                {
                    "id": "956",
                    "markId": "41",
                    "systemId": "FOCUS_ST",
                    "name": "Focus ST"
                },
                {
                    "id": "957",
                    "markId": "41",
                    "systemId": "FREDA",
                    "name": "Freda"
                },
                {
                    "id": "958",
                    "markId": "41",
                    "systemId": "FREESTAR",
                    "name": "Freestar"
                },
                {
                    "id": "959",
                    "markId": "41",
                    "systemId": "FREESTYLE",
                    "name": "Freestyle"
                },
                {
                    "id": "960",
                    "markId": "41",
                    "systemId": "FUSION",
                    "name": "Fusion"
                },
                {
                    "id": "961",
                    "markId": "41",
                    "systemId": "GALAXIE",
                    "name": "Galaxie"
                },
                {
                    "id": "962",
                    "markId": "41",
                    "systemId": "GALAXY",
                    "name": "Galaxy"
                },
                {
                    "id": "963",
                    "markId": "41",
                    "systemId": "GPA",
                    "name": "GPA"
                },
                {
                    "id": "964",
                    "markId": "41",
                    "systemId": "GRANADA",
                    "name": "Granada"
                },
                {
                    "id": "965",
                    "markId": "41",
                    "systemId": "GT",
                    "name": "GT"
                },
                {
                    "id": "966",
                    "markId": "41",
                    "systemId": "GT40",
                    "name": "GT40"
                },
                {
                    "id": "967",
                    "markId": "41",
                    "systemId": "IKON",
                    "name": "Ikon"
                },
                {
                    "id": "968",
                    "markId": "41",
                    "systemId": "IXION",
                    "name": "Ixion"
                },
                {
                    "id": "969",
                    "markId": "41",
                    "systemId": "KA",
                    "name": "KA"
                },
                {
                    "id": "970",
                    "markId": "41",
                    "systemId": "KUGA",
                    "name": "Kuga"
                },
                {
                    "id": "971",
                    "markId": "41",
                    "systemId": "LASER",
                    "name": "Laser"
                },
                {
                    "id": "972",
                    "markId": "41",
                    "systemId": "LTD_CROWN_VICTORIA",
                    "name": "LTD Crown Victoria"
                },
                {
                    "id": "973",
                    "markId": "41",
                    "systemId": "M151",
                    "name": "M151"
                },
                {
                    "id": "974",
                    "markId": "41",
                    "systemId": "MAINLINE",
                    "name": "Mainline"
                },
                {
                    "id": "975",
                    "markId": "41",
                    "systemId": "MAVERICK",
                    "name": "Maverick"
                },
                {
                    "id": "976",
                    "markId": "41",
                    "systemId": "MODEL_A",
                    "name": "Model A"
                },
                {
                    "id": "977",
                    "markId": "41",
                    "systemId": "MODEL_T",
                    "name": "Model T"
                },
                {
                    "id": "978",
                    "markId": "41",
                    "systemId": "MONDEO",
                    "name": "Mondeo"
                },
                {
                    "id": "979",
                    "markId": "41",
                    "systemId": "MONDEO_ST",
                    "name": "Mondeo ST"
                },
                {
                    "id": "980",
                    "markId": "41",
                    "systemId": "MUSTANG",
                    "name": "Mustang"
                },
                {
                    "id": "981",
                    "markId": "41",
                    "systemId": "MUSTANG_MACH-E",
                    "name": "Mustang Mach-E"
                },
                {
                    "id": "982",
                    "markId": "41",
                    "systemId": "ORION",
                    "name": "Orion"
                },
                {
                    "id": "983",
                    "markId": "41",
                    "systemId": "PROBE",
                    "name": "Probe"
                },
                {
                    "id": "984",
                    "markId": "41",
                    "systemId": "PUMA",
                    "name": "Puma"
                },
                {
                    "id": "985",
                    "markId": "41",
                    "systemId": "RANCHERO",
                    "name": "Ranchero"
                },
                {
                    "id": "986",
                    "markId": "41",
                    "systemId": "RANGER",
                    "name": "Ranger"
                },
                {
                    "id": "987",
                    "markId": "41",
                    "systemId": "S-MAX",
                    "name": "S-MAX"
                },
                {
                    "id": "988",
                    "markId": "41",
                    "systemId": "SCORPIO",
                    "name": "Scorpio"
                },
                {
                    "id": "989",
                    "markId": "41",
                    "systemId": "SIERRA",
                    "name": "Sierra"
                },
                {
                    "id": "990",
                    "markId": "41",
                    "systemId": "SPECTRON",
                    "name": "Spectron"
                },
                {
                    "id": "991",
                    "markId": "41",
                    "systemId": "TAUNUS",
                    "name": "Taunus"
                },
                {
                    "id": "992",
                    "markId": "41",
                    "systemId": "TAURUS",
                    "name": "Taurus"
                },
                {
                    "id": "993",
                    "markId": "41",
                    "systemId": "TAURUS_X",
                    "name": "Taurus X"
                },
                {
                    "id": "994",
                    "markId": "41",
                    "systemId": "TELSTAR",
                    "name": "Telstar"
                },
                {
                    "id": "995",
                    "markId": "41",
                    "systemId": "TEMPO",
                    "name": "Tempo"
                },
                {
                    "id": "996",
                    "markId": "41",
                    "systemId": "TERRITORY",
                    "name": "Territory"
                },
                {
                    "id": "997",
                    "markId": "41",
                    "systemId": "THUNDERBIRD",
                    "name": "Thunderbird"
                },
                {
                    "id": "998",
                    "markId": "41",
                    "systemId": "TORINO",
                    "name": "Torino"
                },
                {
                    "id": "999",
                    "markId": "41",
                    "systemId": "TOURNEO_CONNECT",
                    "name": "Tourneo Connect"
                },
                {
                    "id": "1000",
                    "markId": "41",
                    "systemId": "TOURNEO_COURIER",
                    "name": "Tourneo Courier"
                },
                {
                    "id": "1001",
                    "markId": "41",
                    "systemId": "TOURNEO_CUSTOM",
                    "name": "Tourneo Custom"
                },
                {
                    "id": "1002",
                    "markId": "41",
                    "systemId": "V8",
                    "name": "V8"
                },
                {
                    "id": "1003",
                    "markId": "41",
                    "systemId": "WINDSTAR",
                    "name": "Windstar"
                },
                {
                    "id": "1004",
                    "markId": "41",
                    "systemId": "ZEPHYR",
                    "name": "Zephyr"
                },
                {
                    "id": "1005",
                    "markId": "42",
                    "systemId": "MIDI",
                    "name": "Midi"
                },
                {
                    "id": "1006",
                    "markId": "42",
                    "systemId": "SAUVANA",
                    "name": "Sauvana"
                },
                {
                    "id": "1007",
                    "markId": "42",
                    "systemId": "TUNLAND",
                    "name": "Tunland"
                },
                {
                    "id": "1008",
                    "markId": "43",
                    "systemId": "GS8",
                    "name": "GS8"
                },
                {
                    "id": "1009",
                    "markId": "44",
                    "systemId": "100",
                    "name": "100"
                },
                {
                    "id": "1010",
                    "markId": "44",
                    "systemId": "ACADIA",
                    "name": "Acadia"
                },
                {
                    "id": "1011",
                    "markId": "44",
                    "systemId": "CANYON",
                    "name": "Canyon"
                },
                {
                    "id": "1012",
                    "markId": "44",
                    "systemId": "ENVOY",
                    "name": "Envoy"
                },
                {
                    "id": "1013",
                    "markId": "44",
                    "systemId": "JIMMY",
                    "name": "Jimmy"
                },
                {
                    "id": "1014",
                    "markId": "44",
                    "systemId": "SAFARI",
                    "name": "Safari"
                },
                {
                    "id": "1015",
                    "markId": "44",
                    "systemId": "SAVANA",
                    "name": "Savana"
                },
                {
                    "id": "1016",
                    "markId": "44",
                    "systemId": "SIERRA",
                    "name": "Sierra"
                },
                {
                    "id": "1017",
                    "markId": "44",
                    "systemId": "SONOMA",
                    "name": "Sonoma"
                },
                {
                    "id": "1018",
                    "markId": "44",
                    "systemId": "SUBURBAN",
                    "name": "Suburban"
                },
                {
                    "id": "1019",
                    "markId": "44",
                    "systemId": "SYCLONE",
                    "name": "Syclone"
                },
                {
                    "id": "1020",
                    "markId": "44",
                    "systemId": "TERRAIN",
                    "name": "Terrain"
                },
                {
                    "id": "1021",
                    "markId": "44",
                    "systemId": "TYPHOON",
                    "name": "Typhoon"
                },
                {
                    "id": "1022",
                    "markId": "44",
                    "systemId": "VANDURA",
                    "name": "Vandura"
                },
                {
                    "id": "1023",
                    "markId": "44",
                    "systemId": "YUKON",
                    "name": "Yukon"
                },
                {
                    "id": "1024",
                    "markId": "45",
                    "systemId": "ATLAS",
                    "name": "Atlas"
                },
                {
                    "id": "1025",
                    "markId": "45",
                    "systemId": "BEAUTY_LEOPARD",
                    "name": "Beauty Leopard"
                },
                {
                    "id": "1026",
                    "markId": "45",
                    "systemId": "CK(OTAKA)",
                    "name": "CK(Otaka)"
                },
                {
                    "id": "1027",
                    "markId": "45",
                    "systemId": "COOLRAY",
                    "name": "Coolray"
                },
                {
                    "id": "1028",
                    "markId": "45",
                    "systemId": "EMGRAND_7",
                    "name": "Emgrand 7"
                },
                {
                    "id": "1029",
                    "markId": "45",
                    "systemId": "EMGRAND_EC7",
                    "name": "Emgrand EC7"
                },
                {
                    "id": "1030",
                    "markId": "45",
                    "systemId": "EMGRAND_EC8",
                    "name": "Emgrand EC8"
                },
                {
                    "id": "1031",
                    "markId": "45",
                    "systemId": "EMGRAND_GT",
                    "name": "Emgrand GT"
                },
                {
                    "id": "1032",
                    "markId": "45",
                    "systemId": "EMGRAND_X7",
                    "name": "Emgrand X7"
                },
                {
                    "id": "1033",
                    "markId": "45",
                    "systemId": "FC(VISION)",
                    "name": "FC(Vision)"
                },
                {
                    "id": "1034",
                    "markId": "45",
                    "systemId": "GC6",
                    "name": "GC6"
                },
                {
                    "id": "1035",
                    "markId": "45",
                    "systemId": "GC9",
                    "name": "GC9"
                },
                {
                    "id": "1036",
                    "markId": "45",
                    "systemId": "GS",
                    "name": "GS"
                },
                {
                    "id": "1037",
                    "markId": "45",
                    "systemId": "HAOQING",
                    "name": "Haoqing"
                },
                {
                    "id": "1038",
                    "markId": "45",
                    "systemId": "LC_(PANDA)",
                    "name": "LC (Panda)"
                },
                {
                    "id": "1039",
                    "markId": "45",
                    "systemId": "LC_(PANDA)_CROSS",
                    "name": "LC (Panda) Cross"
                },
                {
                    "id": "1040",
                    "markId": "45",
                    "systemId": "MK",
                    "name": "MK"
                },
                {
                    "id": "1041",
                    "markId": "45",
                    "systemId": "MK_CROSS",
                    "name": "MK Cross"
                },
                {
                    "id": "1042",
                    "markId": "45",
                    "systemId": "MR",
                    "name": "MR"
                },
                {
                    "id": "1043",
                    "markId": "45",
                    "systemId": "SC7",
                    "name": "SC7"
                },
                {
                    "id": "1044",
                    "markId": "45",
                    "systemId": "TX4",
                    "name": "TX4"
                },
                {
                    "id": "2754",
                    "markId": "45",
                    "systemId": "TUGELLA",
                    "name": "Tugella"
                },
                {
                    "id": "1045",
                    "markId": "46",
                    "systemId": "G70",
                    "name": "G70"
                },
                {
                    "id": "1046",
                    "markId": "46",
                    "systemId": "G80",
                    "name": "G80"
                },
                {
                    "id": "1047",
                    "markId": "46",
                    "systemId": "G90",
                    "name": "G90"
                },
                {
                    "id": "1048",
                    "markId": "46",
                    "systemId": "GV80",
                    "name": "GV80"
                },
                {
                    "id": "1049",
                    "markId": "47",
                    "systemId": "COOLBEAR",
                    "name": "Coolbear"
                },
                {
                    "id": "1050",
                    "markId": "47",
                    "systemId": "COWRY",
                    "name": "Cowry(V80)"
                },
                {
                    "id": "1051",
                    "markId": "47",
                    "systemId": "DEER",
                    "name": "Deer"
                },
                {
                    "id": "1052",
                    "markId": "47",
                    "systemId": "FLORID",
                    "name": "Florid"
                },
                {
                    "id": "1053",
                    "markId": "47",
                    "systemId": "HOVER",
                    "name": "Hover"
                },
                {
                    "id": "1054",
                    "markId": "47",
                    "systemId": "HOVER_H3",
                    "name": "Hover H3"
                },
                {
                    "id": "1055",
                    "markId": "47",
                    "systemId": "HOVER_H5",
                    "name": "Hover H5"
                },
                {
                    "id": "1056",
                    "markId": "47",
                    "systemId": "HOVER_H6",
                    "name": "Hover H6"
                },
                {
                    "id": "1057",
                    "markId": "47",
                    "systemId": "HOVER_M1",
                    "name": "Hover M1(Peri 4x4)"
                },
                {
                    "id": "1058",
                    "markId": "47",
                    "systemId": "HOVER_M2",
                    "name": "Hover M2"
                },
                {
                    "id": "1059",
                    "markId": "47",
                    "systemId": "HOVER_M4",
                    "name": "Hover M4"
                },
                {
                    "id": "1060",
                    "markId": "47",
                    "systemId": "HOVER_Pi",
                    "name": "Hover Pi"
                },
                {
                    "id": "1061",
                    "markId": "47",
                    "systemId": "PEGASUS",
                    "name": "Pegasus"
                },
                {
                    "id": "1062",
                    "markId": "47",
                    "systemId": "PERI",
                    "name": "Peri"
                },
                {
                    "id": "1063",
                    "markId": "47",
                    "systemId": "SAFE",
                    "name": "Safe"
                },
                {
                    "id": "1064",
                    "markId": "47",
                    "systemId": "SAILOR",
                    "name": "Sailor"
                },
                {
                    "id": "1065",
                    "markId": "47",
                    "systemId": "SING_RUV",
                    "name": "Sing RUV"
                },
                {
                    "id": "1066",
                    "markId": "47",
                    "systemId": "SOCOOL",
                    "name": "Socool"
                },
                {
                    "id": "1067",
                    "markId": "47",
                    "systemId": "VOLEEX_C10",
                    "name": "Voleex C10(Phenom)"
                },
                {
                    "id": "1068",
                    "markId": "47",
                    "systemId": "VOLEEX_C30",
                    "name": "Voleex C30"
                },
                {
                    "id": "1069",
                    "markId": "47",
                    "systemId": "WINGLE",
                    "name": "Wingle"
                },
                {
                    "id": "1070",
                    "markId": "48",
                    "systemId": "BRIO",
                    "name": "Brio"
                },
                {
                    "id": "1071",
                    "markId": "48",
                    "systemId": "PRINCIP",
                    "name": "Princip"
                },
                {
                    "id": "1072",
                    "markId": "48",
                    "systemId": "SAIBAO",
                    "name": "Saibao"
                },
                {
                    "id": "1073",
                    "markId": "48",
                    "systemId": "SIGMA",
                    "name": "Sigma"
                },
                {
                    "id": "1074",
                    "markId": "48",
                    "systemId": "SIMBO",
                    "name": "Simbo"
                },
                {
                    "id": "1075",
                    "markId": "49",
                    "systemId": "2",
                    "name": "2"
                },
                {
                    "id": "1076",
                    "markId": "49",
                    "systemId": "3",
                    "name": "3"
                },
                {
                    "id": "1077",
                    "markId": "49",
                    "systemId": "7",
                    "name": "7"
                },
                {
                    "id": "1078",
                    "markId": "49",
                    "systemId": "FAMILY",
                    "name": "Family"
                },
                {
                    "id": "1079",
                    "markId": "49",
                    "systemId": "FAMILY_F7",
                    "name": "Family F7"
                },
                {
                    "id": "1080",
                    "markId": "49",
                    "systemId": "FREEMA",
                    "name": "Freema"
                },
                {
                    "id": "1081",
                    "markId": "49",
                    "systemId": "M3",
                    "name": "M3"
                },
                {
                    "id": "1082",
                    "markId": "49",
                    "systemId": "S5",
                    "name": "S5"
                },
                {
                    "id": "1083",
                    "markId": "50",
                    "systemId": "F7",
                    "name": "F7"
                },
                {
                    "id": "1084",
                    "markId": "50",
                    "systemId": "F7x",
                    "name": "F7x"
                },
                {
                    "id": "1085",
                    "markId": "50",
                    "systemId": "H2",
                    "name": "H2"
                },
                {
                    "id": "1086",
                    "markId": "50",
                    "systemId": "H6",
                    "name": "H6"
                },
                {
                    "id": "1087",
                    "markId": "50",
                    "systemId": "H6_COUPE",
                    "name": "H6 Coupe"
                },
                {
                    "id": "1088",
                    "markId": "50",
                    "systemId": "H8",
                    "name": "H8"
                },
                {
                    "id": "1089",
                    "markId": "50",
                    "systemId": "H9",
                    "name": "H9"
                },
                {
                    "id": "1090",
                    "markId": "51",
                    "systemId": "B21",
                    "name": "B21"
                },
                {
                    "id": "1091",
                    "markId": "51",
                    "systemId": "BOLIGER",
                    "name": "Boliger"
                },
                {
                    "id": "1092",
                    "markId": "51",
                    "systemId": "LAVILLE",
                    "name": "Laville"
                },
                {
                    "id": "1093",
                    "markId": "52",
                    "systemId": "TYP_154",
                    "name": "Typ 154"
                },
                {
                    "id": "1094",
                    "markId": "53",
                    "systemId": "145",
                    "name": "145"
                },
                {
                    "id": "1095",
                    "markId": "53",
                    "systemId": "ACCORD",
                    "name": "Accord"
                },
                {
                    "id": "1096",
                    "markId": "53",
                    "systemId": "ACTY",
                    "name": "Acty"
                },
                {
                    "id": "1097",
                    "markId": "53",
                    "systemId": "AIRWAVE",
                    "name": "Airwave"
                },
                {
                    "id": "1098",
                    "markId": "53",
                    "systemId": "ASCOT",
                    "name": "Ascot"
                },
                {
                    "id": "1099",
                    "markId": "53",
                    "systemId": "ASCOT_INNOVA",
                    "name": "Ascot Innova"
                },
                {
                    "id": "1100",
                    "markId": "53",
                    "systemId": "AVANCIER",
                    "name": "Avancier"
                },
                {
                    "id": "1101",
                    "markId": "53",
                    "systemId": "BALLADE",
                    "name": "Ballade"
                },
                {
                    "id": "1102",
                    "markId": "53",
                    "systemId": "BEAT",
                    "name": "Beat"
                },
                {
                    "id": "1103",
                    "markId": "53",
                    "systemId": "BRIO",
                    "name": "Brio"
                },
                {
                    "id": "1104",
                    "markId": "53",
                    "systemId": "CAPA",
                    "name": "Capa"
                },
                {
                    "id": "1105",
                    "markId": "53",
                    "systemId": "CITY",
                    "name": "City"
                },
                {
                    "id": "1106",
                    "markId": "53",
                    "systemId": "CIVIC",
                    "name": "Civic"
                },
                {
                    "id": "1107",
                    "markId": "53",
                    "systemId": "CIVIC_FERIO",
                    "name": "Civic Ferio"
                },
                {
                    "id": "1108",
                    "markId": "53",
                    "systemId": "CIVIC_TYPE_R",
                    "name": "Civic Type R"
                },
                {
                    "id": "1109",
                    "markId": "53",
                    "systemId": "CONCERTO",
                    "name": "Concerto"
                },
                {
                    "id": "1110",
                    "markId": "53",
                    "systemId": "CR-V",
                    "name": "CR-V"
                },
                {
                    "id": "1111",
                    "markId": "53",
                    "systemId": "CR-X",
                    "name": "CR-X"
                },
                {
                    "id": "1112",
                    "markId": "53",
                    "systemId": "CR-Z",
                    "name": "CR-Z"
                },
                {
                    "id": "1113",
                    "markId": "53",
                    "systemId": "CROSSROAD",
                    "name": "Crossroad"
                },
                {
                    "id": "1114",
                    "markId": "53",
                    "systemId": "CROSSTOUR",
                    "name": "Crosstour"
                },
                {
                    "id": "1115",
                    "markId": "53",
                    "systemId": "DOMANI",
                    "name": "Domani"
                },
                {
                    "id": "1116",
                    "markId": "53",
                    "systemId": "EDIX",
                    "name": "Edix"
                },
                {
                    "id": "1117",
                    "markId": "53",
                    "systemId": "ELEMENT",
                    "name": "Element"
                },
                {
                    "id": "1118",
                    "markId": "53",
                    "systemId": "ELYSION",
                    "name": "Elysion"
                },
                {
                    "id": "1119",
                    "markId": "53",
                    "systemId": "FCX_CLARITY",
                    "name": "FCX Clarity"
                },
                {
                    "id": "1120",
                    "markId": "53",
                    "systemId": "FIT",
                    "name": "Fit"
                },
                {
                    "id": "1121",
                    "markId": "53",
                    "systemId": "FIT_ARIA",
                    "name": "Fit Aria"
                },
                {
                    "id": "1122",
                    "markId": "53",
                    "systemId": "FIT_SHUTTLE",
                    "name": "Fit Shuttle"
                },
                {
                    "id": "1123",
                    "markId": "53",
                    "systemId": "FR-V",
                    "name": "FR-V"
                },
                {
                    "id": "1124",
                    "markId": "53",
                    "systemId": "FREED",
                    "name": "Freed"
                },
                {
                    "id": "1125",
                    "markId": "53",
                    "systemId": "GRACE",
                    "name": "Grace"
                },
                {
                    "id": "1126",
                    "markId": "53",
                    "systemId": "HORIZON",
                    "name": "Horizon"
                },
                {
                    "id": "1127",
                    "markId": "53",
                    "systemId": "HR-V",
                    "name": "HR-V"
                },
                {
                    "id": "1128",
                    "markId": "53",
                    "systemId": "INSIGHT",
                    "name": "Insight"
                },
                {
                    "id": "1129",
                    "markId": "53",
                    "systemId": "INSPIRE",
                    "name": "Inspire"
                },
                {
                    "id": "1130",
                    "markId": "53",
                    "systemId": "INTEGRA",
                    "name": "Integra"
                },
                {
                    "id": "1131",
                    "markId": "53",
                    "systemId": "INTEGRA_SJ",
                    "name": "Integra SJ"
                },
                {
                    "id": "1132",
                    "markId": "53",
                    "systemId": "JADE",
                    "name": "Jade"
                },
                {
                    "id": "1133",
                    "markId": "53",
                    "systemId": "JAZZ",
                    "name": "Jazz"
                },
                {
                    "id": "1134",
                    "markId": "53",
                    "systemId": "LAGREAT",
                    "name": "Lagreat"
                },
                {
                    "id": "1135",
                    "markId": "53",
                    "systemId": "LEGEND",
                    "name": "Legend"
                },
                {
                    "id": "1136",
                    "markId": "53",
                    "systemId": "LIFE",
                    "name": "Life"
                },
                {
                    "id": "1137",
                    "markId": "53",
                    "systemId": "LOGO",
                    "name": "Logo"
                },
                {
                    "id": "1138",
                    "markId": "53",
                    "systemId": "MDX",
                    "name": "MDX"
                },
                {
                    "id": "1139",
                    "markId": "53",
                    "systemId": "MOBILIO",
                    "name": "Mobilio"
                },
                {
                    "id": "1140",
                    "markId": "53",
                    "systemId": "MOBILIO_SPIKE",
                    "name": "Mobilio Spike"
                },
                {
                    "id": "1141",
                    "markId": "53",
                    "systemId": "N-BOX",
                    "name": "N-BOX"
                },
                {
                    "id": "1142",
                    "markId": "53",
                    "systemId": "N-BOX_SLASH",
                    "name": "N-BOX Slash"
                },
                {
                    "id": "1143",
                    "markId": "53",
                    "systemId": "N-ONE",
                    "name": "N-ONE"
                },
                {
                    "id": "1144",
                    "markId": "53",
                    "systemId": "N-WGN",
                    "name": "N-WGN"
                },
                {
                    "id": "1145",
                    "markId": "53",
                    "systemId": "N360",
                    "name": "N360"
                },
                {
                    "id": "1146",
                    "markId": "53",
                    "systemId": "NSX",
                    "name": "NSX"
                },
                {
                    "id": "1147",
                    "markId": "53",
                    "systemId": "ODYSSEY",
                    "name": "Odyssey"
                },
                {
                    "id": "1148",
                    "markId": "53",
                    "systemId": "ORTHIA",
                    "name": "Otrhia"
                },
                {
                    "id": "1149",
                    "markId": "53",
                    "systemId": "PARTNER",
                    "name": "Partner"
                },
                {
                    "id": "1150",
                    "markId": "53",
                    "systemId": "PASSPORT",
                    "name": "Passport"
                },
                {
                    "id": "1151",
                    "markId": "53",
                    "systemId": "PILOT",
                    "name": "Pilot"
                },
                {
                    "id": "1152",
                    "markId": "53",
                    "systemId": "PRELUDE",
                    "name": "Prelude"
                },
                {
                    "id": "1153",
                    "markId": "53",
                    "systemId": "QUINT",
                    "name": "Quint"
                },
                {
                    "id": "1154",
                    "markId": "53",
                    "systemId": "RAFAGA",
                    "name": "Rafaga"
                },
                {
                    "id": "1155",
                    "markId": "53",
                    "systemId": "RIDGELINE",
                    "name": "Ridgeline"
                },
                {
                    "id": "1156",
                    "markId": "53",
                    "systemId": "S-MX",
                    "name": "S-MX"
                },
                {
                    "id": "1157",
                    "markId": "53",
                    "systemId": "S2000",
                    "name": "S2000"
                },
                {
                    "id": "1158",
                    "markId": "53",
                    "systemId": "S500",
                    "name": "S500"
                },
                {
                    "id": "1159",
                    "markId": "53",
                    "systemId": "S600",
                    "name": "S600"
                },
                {
                    "id": "1160",
                    "markId": "53",
                    "systemId": "S660",
                    "name": "S660"
                },
                {
                    "id": "1161",
                    "markId": "53",
                    "systemId": "SABER",
                    "name": "Saber"
                },
                {
                    "id": "1162",
                    "markId": "53",
                    "systemId": "SHUTTLE",
                    "name": "Shuttle"
                },
                {
                    "id": "1163",
                    "markId": "53",
                    "systemId": "STEPWGN",
                    "name": "Stepwgn"
                },
                {
                    "id": "1164",
                    "markId": "53",
                    "systemId": "STREAM",
                    "name": "Stream"
                },
                {
                    "id": "1165",
                    "markId": "53",
                    "systemId": "STREET",
                    "name": "Street"
                },
                {
                    "id": "1166",
                    "markId": "53",
                    "systemId": "{{2330}}''{{2331}}",
                    "name": "{{2332}}''{{2333}}"
                },
                {
                    "id": "1167",
                    "markId": "53",
                    "systemId": "TODAY",
                    "name": "Today"
                },
                {
                    "id": "1168",
                    "markId": "53",
                    "systemId": "TORNEO",
                    "name": "Torneo"
                },
                {
                    "id": "1169",
                    "markId": "53",
                    "systemId": "VAMOS",
                    "name": "Vamos"
                },
                {
                    "id": "1170",
                    "markId": "53",
                    "systemId": "VEZEL",
                    "name": "Vezel"
                },
                {
                    "id": "1171",
                    "markId": "53",
                    "systemId": "VIGOR",
                    "name": "Vigor"
                },
                {
                    "id": "1172",
                    "markId": "53",
                    "systemId": "Z",
                    "name": "Z"
                },
                {
                    "id": "1173",
                    "markId": "53",
                    "systemId": "ZEST",
                    "name": "Zest"
                },
                {
                    "id": "1174",
                    "markId": "55",
                    "systemId": "ACCENT",
                    "name": "Accent"
                },
                {
                    "id": "1175",
                    "markId": "55",
                    "systemId": "ASLAN",
                    "name": "Aslan"
                },
                {
                    "id": "1176",
                    "markId": "55",
                    "systemId": "ATOS",
                    "name": "Atos"
                },
                {
                    "id": "1177",
                    "markId": "55",
                    "systemId": "AVANTE",
                    "name": "Avante"
                },
                {
                    "id": "1178",
                    "markId": "55",
                    "systemId": "AZERA",
                    "name": "Azera"
                },
                {
                    "id": "1179",
                    "markId": "55",
                    "systemId": "CENTENNIAL",
                    "name": "Centennial"
                },
                {
                    "id": "1180",
                    "markId": "55",
                    "systemId": "CLICK",
                    "name": "Click"
                },
                {
                    "id": "1181",
                    "markId": "55",
                    "systemId": "COUPE",
                    "name": "Coupe"
                },
                {
                    "id": "1182",
                    "markId": "55",
                    "systemId": "CRETA",
                    "name": "Creta"
                },
                {
                    "id": "1183",
                    "markId": "55",
                    "systemId": "DYNASTY",
                    "name": "Dynasty"
                },
                {
                    "id": "1184",
                    "markId": "55",
                    "systemId": "ELANTRA",
                    "name": "Elantra"
                },
                {
                    "id": "1185",
                    "markId": "55",
                    "systemId": "ENTOURAGE",
                    "name": "Entourage"
                },
                {
                    "id": "1186",
                    "markId": "55",
                    "systemId": "EON",
                    "name": "EON"
                },
                {
                    "id": "1187",
                    "markId": "55",
                    "systemId": "EQUUS",
                    "name": "Equus"
                },
                {
                    "id": "1188",
                    "markId": "55",
                    "systemId": "EXCEL",
                    "name": "Excel"
                },
                {
                    "id": "1189",
                    "markId": "55",
                    "systemId": "GALLOPER",
                    "name": "Galloper"
                },
                {
                    "id": "1190",
                    "markId": "55",
                    "systemId": "GENESIS",
                    "name": "Genesis"
                },
                {
                    "id": "1191",
                    "markId": "55",
                    "systemId": "GENESIS_COUPE",
                    "name": "Genesis Coupe"
                },
                {
                    "id": "1192",
                    "markId": "55",
                    "systemId": "GETZ",
                    "name": "Getz"
                },
                {
                    "id": "1193",
                    "markId": "55",
                    "systemId": "GRACE",
                    "name": "Grace"
                },
                {
                    "id": "1194",
                    "markId": "55",
                    "systemId": "GRAND_STAREX",
                    "name": "Grand Starex"
                },
                {
                    "id": "1195",
                    "markId": "55",
                    "systemId": "GRANDEUR",
                    "name": "Grandeur"
                },
                {
                    "id": "1196",
                    "markId": "55",
                    "systemId": "H-1",
                    "name": "H-1"
                },
                {
                    "id": "1197",
                    "markId": "55",
                    "systemId": "H200",
                    "name": "H200"
                },
                {
                    "id": "1198",
                    "markId": "55",
                    "systemId": "I10",
                    "name": "i10"
                },
                {
                    "id": "1199",
                    "markId": "55",
                    "systemId": "I20",
                    "name": "i20"
                },
                {
                    "id": "1200",
                    "markId": "55",
                    "systemId": "I30",
                    "name": "i30"
                },
                {
                    "id": "1201",
                    "markId": "55",
                    "systemId": "I30_N",
                    "name": "i30 N"
                },
                {
                    "id": "1202",
                    "markId": "55",
                    "systemId": "I40",
                    "name": "i40"
                },
                {
                    "id": "1203",
                    "markId": "55",
                    "systemId": "IONIQ",
                    "name": "IONIQ"
                },
                {
                    "id": "1204",
                    "markId": "55",
                    "systemId": "IX20",
                    "name": "ix20"
                },
                {
                    "id": "1205",
                    "markId": "55",
                    "systemId": "IX35",
                    "name": "ix35"
                },
                {
                    "id": "1206",
                    "markId": "55",
                    "systemId": "IX55",
                    "name": "ix55"
                },
                {
                    "id": "1207",
                    "markId": "55",
                    "systemId": "KONA",
                    "name": "Kona"
                },
                {
                    "id": "1208",
                    "markId": "55",
                    "systemId": "LANTRA",
                    "name": "Lantra"
                },
                {
                    "id": "1209",
                    "markId": "55",
                    "systemId": "LAVITA",
                    "name": "Lavita"
                },
                {
                    "id": "1210",
                    "markId": "55",
                    "systemId": "MARCIA",
                    "name": "Marcia"
                },
                {
                    "id": "1211",
                    "markId": "55",
                    "systemId": "MATRIX",
                    "name": "Matrix"
                },
                {
                    "id": "1212",
                    "markId": "55",
                    "systemId": "MAXCRUZ",
                    "name": "Maxcruz"
                },
                {
                    "id": "1213",
                    "markId": "55",
                    "systemId": "PALISADE",
                    "name": "Palisade"
                },
                {
                    "id": "1214",
                    "markId": "55",
                    "systemId": "PONY",
                    "name": "Pony"
                },
                {
                    "id": "1215",
                    "markId": "55",
                    "systemId": "SANTA_FE",
                    "name": "Santa Fe"
                },
                {
                    "id": "1216",
                    "markId": "55",
                    "systemId": "SANTAMO",
                    "name": "Santamo"
                },
                {
                    "id": "1217",
                    "markId": "55",
                    "systemId": "SCOUPE",
                    "name": "Scoupe"
                },
                {
                    "id": "1218",
                    "markId": "55",
                    "systemId": "SOLARIS",
                    "name": "Solaris"
                },
                {
                    "id": "1219",
                    "markId": "55",
                    "systemId": "SONATA",
                    "name": "Sonata"
                },
                {
                    "id": "1220",
                    "markId": "55",
                    "systemId": "STAREX",
                    "name": "Starex"
                },
                {
                    "id": "1221",
                    "markId": "55",
                    "systemId": "STELLAR",
                    "name": "Stellar"
                },
                {
                    "id": "1222",
                    "markId": "55",
                    "systemId": "TERRACAN",
                    "name": "Terracan"
                },
                {
                    "id": "1223",
                    "markId": "55",
                    "systemId": "TIBURON",
                    "name": "Tiburon"
                },
                {
                    "id": "1224",
                    "markId": "55",
                    "systemId": "TRAJET",
                    "name": "Trajet"
                },
                {
                    "id": "1225",
                    "markId": "55",
                    "systemId": "TUCSON",
                    "name": "Tucson"
                },
                {
                    "id": "1226",
                    "markId": "55",
                    "systemId": "TUSCANI",
                    "name": "Tuscani"
                },
                {
                    "id": "1227",
                    "markId": "55",
                    "systemId": "VELOSTER",
                    "name": "Veloster"
                },
                {
                    "id": "1228",
                    "markId": "55",
                    "systemId": "VENUE",
                    "name": "Venue"
                },
                {
                    "id": "1229",
                    "markId": "55",
                    "systemId": "VERACRUZ",
                    "name": "Veracruz"
                },
                {
                    "id": "1230",
                    "markId": "55",
                    "systemId": "VERNA",
                    "name": "Verna"
                },
                {
                    "id": "1231",
                    "markId": "55",
                    "systemId": "XG",
                    "name": "XG"
                },
                {
                    "id": "1232",
                    "markId": "54",
                    "systemId": "H1",
                    "name": "H1"
                },
                {
                    "id": "1233",
                    "markId": "54",
                    "systemId": "H2",
                    "name": "H2"
                },
                {
                    "id": "1234",
                    "markId": "54",
                    "systemId": "H3",
                    "name": "H3"
                },
                {
                    "id": "1235",
                    "markId": "56",
                    "systemId": "EX",
                    "name": "EX"
                },
                {
                    "id": "1236",
                    "markId": "56",
                    "systemId": "FX",
                    "name": "FX"
                },
                {
                    "id": "1237",
                    "markId": "56",
                    "systemId": "G",
                    "name": "G"
                },
                {
                    "id": "1238",
                    "markId": "56",
                    "systemId": "I",
                    "name": "I"
                },
                {
                    "id": "1239",
                    "markId": "56",
                    "systemId": "J",
                    "name": "J"
                },
                {
                    "id": "1240",
                    "markId": "56",
                    "systemId": "JX",
                    "name": "JX"
                },
                {
                    "id": "1241",
                    "markId": "56",
                    "systemId": "M",
                    "name": "M"
                },
                {
                    "id": "1242",
                    "markId": "56",
                    "systemId": "Q",
                    "name": "Q"
                },
                {
                    "id": "1243",
                    "markId": "56",
                    "systemId": "Q30",
                    "name": "Q30"
                },
                {
                    "id": "1244",
                    "markId": "56",
                    "systemId": "Q40",
                    "name": "Q40"
                },
                {
                    "id": "1245",
                    "markId": "56",
                    "systemId": "Q50",
                    "name": "Q50"
                },
                {
                    "id": "1246",
                    "markId": "56",
                    "systemId": "Q60",
                    "name": "Q60"
                },
                {
                    "id": "1247",
                    "markId": "56",
                    "systemId": "Q70",
                    "name": "Q70"
                },
                {
                    "id": "1248",
                    "markId": "56",
                    "systemId": "QX30",
                    "name": "QX30"
                },
                {
                    "id": "1249",
                    "markId": "56",
                    "systemId": "QX4",
                    "name": "QX4"
                },
                {
                    "id": "1250",
                    "markId": "56",
                    "systemId": "QX50",
                    "name": "QX50"
                },
                {
                    "id": "1251",
                    "markId": "56",
                    "systemId": "QX56",
                    "name": "QX56"
                },
                {
                    "id": "1252",
                    "markId": "56",
                    "systemId": "QX60",
                    "name": "QX60"
                },
                {
                    "id": "1253",
                    "markId": "56",
                    "systemId": "QX70",
                    "name": "QX70"
                },
                {
                    "id": "1254",
                    "markId": "56",
                    "systemId": "QX80",
                    "name": "QX80"
                },
                {
                    "id": "1255",
                    "markId": "57",
                    "systemId": "DENA",
                    "name": "Dena"
                },
                {
                    "id": "1256",
                    "markId": "57",
                    "systemId": "PAYKAN",
                    "name": "Paykan"
                },
                {
                    "id": "1257",
                    "markId": "57",
                    "systemId": "RUNNA",
                    "name": "Runna"
                },
                {
                    "id": "1258",
                    "markId": "57",
                    "systemId": "SAHRA",
                    "name": "Sahra"
                },
                {
                    "id": "1259",
                    "markId": "57",
                    "systemId": "SAMAND",
                    "name": "Samand"
                },
                {
                    "id": "1260",
                    "markId": "57",
                    "systemId": "SARIR",
                    "name": "Sarir"
                },
                {
                    "id": "1261",
                    "markId": "57",
                    "systemId": "SOREN",
                    "name": "Soren"
                },
                {
                    "id": "1262",
                    "markId": "58",
                    "systemId": "117",
                    "name": "117"
                },
                {
                    "id": "1263",
                    "markId": "58",
                    "systemId": "AMIGO",
                    "name": "Amigo"
                },
                {
                    "id": "1264",
                    "markId": "58",
                    "systemId": "ASCENDER",
                    "name": "Ascender"
                },
                {
                    "id": "1265",
                    "markId": "58",
                    "systemId": "ASKA",
                    "name": "Aska"
                },
                {
                    "id": "1266",
                    "markId": "58",
                    "systemId": "AXIOM",
                    "name": "Axiom"
                },
                {
                    "id": "1267",
                    "markId": "58",
                    "systemId": "BELLETT",
                    "name": "Bellett"
                },
                {
                    "id": "1268",
                    "markId": "58",
                    "systemId": "BIGHORN",
                    "name": "Bighorn"
                },
                {
                    "id": "1269",
                    "markId": "58",
                    "systemId": "D-MAX",
                    "name": "D-MAX"
                },
                {
                    "id": "1270",
                    "markId": "58",
                    "systemId": "FARGO",
                    "name": "Fargo"
                },
                {
                    "id": "1271",
                    "markId": "58",
                    "systemId": "FARGO_FILLY",
                    "name": "Fargo Filly"
                },
                {
                    "id": "1272",
                    "markId": "58",
                    "systemId": "FLORIAN",
                    "name": "Florian"
                },
                {
                    "id": "1273",
                    "markId": "58",
                    "systemId": "GEMINI",
                    "name": "Gemini"
                },
                {
                    "id": "1274",
                    "markId": "58",
                    "systemId": "HOMBRE",
                    "name": "Hombre"
                },
                {
                    "id": "1275",
                    "markId": "58",
                    "systemId": "IMPULSE",
                    "name": "Impulse"
                },
                {
                    "id": "1276",
                    "markId": "58",
                    "systemId": "KB",
                    "name": "KB"
                },
                {
                    "id": "1277",
                    "markId": "58",
                    "systemId": "MU",
                    "name": "MU"
                },
                {
                    "id": "1278",
                    "markId": "58",
                    "systemId": "MU-7",
                    "name": "MU-7"
                },
                {
                    "id": "1279",
                    "markId": "58",
                    "systemId": "MU-X",
                    "name": "MU-X"
                },
                {
                    "id": "1280",
                    "markId": "58",
                    "systemId": "PIAZZA",
                    "name": "Piazza"
                },
                {
                    "id": "1281",
                    "markId": "58",
                    "systemId": "RODEO",
                    "name": "Rodeo"
                },
                {
                    "id": "1282",
                    "markId": "58",
                    "systemId": "STYLUS",
                    "name": "Stylus"
                },
                {
                    "id": "1283",
                    "markId": "58",
                    "systemId": "TF(PICKUP)",
                    "name": "TF(Pickup)"
                },
                {
                    "id": "1284",
                    "markId": "58",
                    "systemId": "TROOPER",
                    "name": "Trooper"
                },
                {
                    "id": "1285",
                    "markId": "58",
                    "systemId": "VEHICROSS",
                    "name": "VehiCross"
                },
                {
                    "id": "1286",
                    "markId": "58",
                    "systemId": "WIZARD",
                    "name": "Wizard"
                },
                {
                    "id": "1287",
                    "markId": "59",
                    "systemId": "IEV7S",
                    "name": "iEV7S"
                },
                {
                    "id": "1288",
                    "markId": "59",
                    "systemId": "J2",
                    "name": "J2"
                },
                {
                    "id": "1289",
                    "markId": "59",
                    "systemId": "J3",
                    "name": "J3"
                },
                {
                    "id": "1290",
                    "markId": "59",
                    "systemId": "J4",
                    "name": "J4"
                },
                {
                    "id": "1291",
                    "markId": "59",
                    "systemId": "J5",
                    "name": "J5"
                },
                {
                    "id": "1292",
                    "markId": "59",
                    "systemId": "J6",
                    "name": "J6"
                },
                {
                    "id": "1293",
                    "markId": "59",
                    "systemId": "J7",
                    "name": "J7"
                },
                {
                    "id": "1294",
                    "markId": "59",
                    "systemId": "M1",
                    "name": "M1"
                },
                {
                    "id": "1295",
                    "markId": "59",
                    "systemId": "M5",
                    "name": "M5"
                },
                {
                    "id": "1296",
                    "markId": "59",
                    "systemId": "S1",
                    "name": "S1"
                },
                {
                    "id": "1297",
                    "markId": "59",
                    "systemId": "S3",
                    "name": "S3"
                },
                {
                    "id": "1298",
                    "markId": "59",
                    "systemId": "S5",
                    "name": "S5"
                },
                {
                    "id": "1299",
                    "markId": "59",
                    "systemId": "T6",
                    "name": "T6"
                },
                {
                    "id": "1300",
                    "markId": "60",
                    "systemId": "BAODIAN",
                    "name": "Baodian"
                },
                {
                    "id": "1301",
                    "markId": "61",
                    "systemId": "E-PACE",
                    "name": "E-Pace"
                },
                {
                    "id": "1302",
                    "markId": "61",
                    "systemId": "E-TYPE",
                    "name": "E-Type"
                },
                {
                    "id": "1303",
                    "markId": "61",
                    "systemId": "F-PACE",
                    "name": "F-Pace"
                },
                {
                    "id": "1304",
                    "markId": "61",
                    "systemId": "F-TYPE",
                    "name": "F-Type"
                },
                {
                    "id": "1305",
                    "markId": "61",
                    "systemId": "I-PACE",
                    "name": "I-Pace"
                },
                {
                    "id": "1306",
                    "markId": "61",
                    "systemId": "MARK_2",
                    "name": "Mark 2"
                },
                {
                    "id": "1307",
                    "markId": "61",
                    "systemId": "MARK_IX",
                    "name": "Mark IX"
                },
                {
                    "id": "1308",
                    "markId": "61",
                    "systemId": "S-TYPE",
                    "name": "S-Type"
                },
                {
                    "id": "1309",
                    "markId": "61",
                    "systemId": "X-TYPE",
                    "name": "X-Type"
                },
                {
                    "id": "1310",
                    "markId": "61",
                    "systemId": "XE",
                    "name": "XE"
                },
                {
                    "id": "1311",
                    "markId": "61",
                    "systemId": "XF",
                    "name": "XF"
                },
                {
                    "id": "1312",
                    "markId": "61",
                    "systemId": "XFR",
                    "name": "XFR"
                },
                {
                    "id": "1313",
                    "markId": "61",
                    "systemId": "XJ",
                    "name": "XJ"
                },
                {
                    "id": "1314",
                    "markId": "61",
                    "systemId": "XJ220",
                    "name": "XJ220"
                },
                {
                    "id": "1315",
                    "markId": "61",
                    "systemId": "XJR",
                    "name": "XJR"
                },
                {
                    "id": "1316",
                    "markId": "61",
                    "systemId": "XJS",
                    "name": "XJS"
                },
                {
                    "id": "1317",
                    "markId": "61",
                    "systemId": "XK",
                    "name": "XK"
                },
                {
                    "id": "1318",
                    "markId": "61",
                    "systemId": "XKR",
                    "name": "XKR"
                },
                {
                    "id": "1319",
                    "markId": "62",
                    "systemId": "CHEROKEE",
                    "name": "Cherokee"
                },
                {
                    "id": "1320",
                    "markId": "62",
                    "systemId": "CJ",
                    "name": "CJ"
                },
                {
                    "id": "1321",
                    "markId": "62",
                    "systemId": "COMMANDER",
                    "name": "Commander"
                },
                {
                    "id": "1322",
                    "markId": "62",
                    "systemId": "COMPASS",
                    "name": "Compass"
                },
                {
                    "id": "1323",
                    "markId": "62",
                    "systemId": "GLADIATOR",
                    "name": "Gladiator"
                },
                {
                    "id": "1324",
                    "markId": "62",
                    "systemId": "GRAND_CHEROKEE",
                    "name": "Grand Cherokee"
                },
                {
                    "id": "1325",
                    "markId": "62",
                    "systemId": "GRAND_WAGONEER",
                    "name": "Grand Wagoneer"
                },
                {
                    "id": "1326",
                    "markId": "62",
                    "systemId": "LIBERTY",
                    "name": "Liberty"
                },
                {
                    "id": "1327",
                    "markId": "62",
                    "systemId": "LIBERTY(PATRIOT)",
                    "name": "Liberty(Patriot)"
                },
                {
                    "id": "1328",
                    "markId": "62",
                    "systemId": "RENEGADE",
                    "name": "Renegade"
                },
                {
                    "id": "1329",
                    "markId": "62",
                    "systemId": "WRANGLER",
                    "name": "Wrangler"
                },
                {
                    "id": "1330",
                    "markId": "63",
                    "systemId": "AVELLA",
                    "name": "Avella"
                },
                {
                    "id": "1331",
                    "markId": "63",
                    "systemId": "BORREGO",
                    "name": "Borrego"
                },
                {
                    "id": "1332",
                    "markId": "63",
                    "systemId": "CADENZA",
                    "name": "Cadenza"
                },
                {
                    "id": "1333",
                    "markId": "63",
                    "systemId": "CAPITAL",
                    "name": "Capital"
                },
                {
                    "id": "1334",
                    "markId": "63",
                    "systemId": "CARENS",
                    "name": "Carens"
                },
                {
                    "id": "1335",
                    "markId": "63",
                    "systemId": "CARNIVAL",
                    "name": "Carnival"
                },
                {
                    "id": "1336",
                    "markId": "63",
                    "systemId": "CARSTAR",
                    "name": "Carstar"
                },
                {
                    "id": "1337",
                    "markId": "63",
                    "systemId": "CEED",
                    "name": "Ceed"
                },
                {
                    "id": "1338",
                    "markId": "63",
                    "systemId": "CEED_GT",
                    "name": "Ceed GT"
                },
                {
                    "id": "1339",
                    "markId": "63",
                    "systemId": "CERATO",
                    "name": "Cerato"
                },
                {
                    "id": "1340",
                    "markId": "63",
                    "systemId": "CLARUS",
                    "name": "Clarus"
                },
                {
                    "id": "1341",
                    "markId": "63",
                    "systemId": "CONCORD",
                    "name": "Concord"
                },
                {
                    "id": "1342",
                    "markId": "63",
                    "systemId": "ELAN",
                    "name": "Elan"
                },
                {
                    "id": "1343",
                    "markId": "63",
                    "systemId": "ENTERPRISE",
                    "name": "Enterprise"
                },
                {
                    "id": "1344",
                    "markId": "63",
                    "systemId": "FORTE",
                    "name": "Forte"
                },
                {
                    "id": "1345",
                    "markId": "63",
                    "systemId": "JOICE",
                    "name": "Joice"
                },
                {
                    "id": "1346",
                    "markId": "63",
                    "systemId": "K3",
                    "name": "K3"
                },
                {
                    "id": "1347",
                    "markId": "63",
                    "systemId": "K5",
                    "name": "K5"
                },
                {
                    "id": "1348",
                    "markId": "63",
                    "systemId": "K7",
                    "name": "K7"
                },
                {
                    "id": "1349",
                    "markId": "63",
                    "systemId": "K9",
                    "name": "K9"
                },
                {
                    "id": "1350",
                    "markId": "63",
                    "systemId": "K900",
                    "name": "K900"
                },
                {
                    "id": "1351",
                    "markId": "63",
                    "systemId": "LOTZE",
                    "name": "Lotze"
                },
                {
                    "id": "1352",
                    "markId": "63",
                    "systemId": "MAGENTIS",
                    "name": "Magentis"
                },
                {
                    "id": "1353",
                    "markId": "63",
                    "systemId": "MENTOR",
                    "name": "Mentor"
                },
                {
                    "id": "1354",
                    "markId": "63",
                    "systemId": "MOHAVE",
                    "name": "Mohave"
                },
                {
                    "id": "1355",
                    "markId": "63",
                    "systemId": "MORNING",
                    "name": "Morning"
                },
                {
                    "id": "1356",
                    "markId": "63",
                    "systemId": "NIRO",
                    "name": "Niro"
                },
                {
                    "id": "1357",
                    "markId": "63",
                    "systemId": "OPIRUS",
                    "name": "Opirus"
                },
                {
                    "id": "1358",
                    "markId": "63",
                    "systemId": "OPTIMA",
                    "name": "Optima"
                },
                {
                    "id": "1359",
                    "markId": "63",
                    "systemId": "PICANTO",
                    "name": "Picanto"
                },
                {
                    "id": "1360",
                    "markId": "63",
                    "systemId": "POTENTIA",
                    "name": "Potentia"
                },
                {
                    "id": "1361",
                    "markId": "63",
                    "systemId": "PREGIO",
                    "name": "Pregio"
                },
                {
                    "id": "1362",
                    "markId": "63",
                    "systemId": "PRIDE",
                    "name": "Pride"
                },
                {
                    "id": "1363",
                    "markId": "63",
                    "systemId": "PROCEED",
                    "name": "Proceed"
                },
                {
                    "id": "1364",
                    "markId": "63",
                    "systemId": "QUANLIMA",
                    "name": "Quanlima"
                },
                {
                    "id": "1365",
                    "markId": "63",
                    "systemId": "QUORIS",
                    "name": "Quoris"
                },
                {
                    "id": "1366",
                    "markId": "63",
                    "systemId": "RAY",
                    "name": "Ray"
                },
                {
                    "id": "1367",
                    "markId": "63",
                    "systemId": "RETONA",
                    "name": "Retona"
                },
                {
                    "id": "1368",
                    "markId": "63",
                    "systemId": "RIO",
                    "name": "Rio"
                },
                {
                    "id": "1369",
                    "markId": "63",
                    "systemId": "SEDONA",
                    "name": "Sedona"
                },
                {
                    "id": "1370",
                    "markId": "63",
                    "systemId": "SELTOS",
                    "name": "Seltos"
                },
                {
                    "id": "1371",
                    "markId": "63",
                    "systemId": "SEPHIA",
                    "name": "Sephia"
                },
                {
                    "id": "1372",
                    "markId": "63",
                    "systemId": "SHUMA",
                    "name": "Shuma"
                },
                {
                    "id": "1373",
                    "markId": "63",
                    "systemId": "SORENTO",
                    "name": "Sorento"
                },
                {
                    "id": "1374",
                    "markId": "63",
                    "systemId": "SOUL",
                    "name": "Soul"
                },
                {
                    "id": "1375",
                    "markId": "63",
                    "systemId": "SOUL_EV",
                    "name": "Soul EV"
                },
                {
                    "id": "1376",
                    "markId": "63",
                    "systemId": "SPECTRA",
                    "name": "Spectra"
                },
                {
                    "id": "1377",
                    "markId": "63",
                    "systemId": "SPORTAGE",
                    "name": "Sportage"
                },
                {
                    "id": "1378",
                    "markId": "63",
                    "systemId": "STINGER",
                    "name": "Stinger"
                },
                {
                    "id": "1379",
                    "markId": "63",
                    "systemId": "STONIC",
                    "name": "Stonic"
                },
                {
                    "id": "1380",
                    "markId": "63",
                    "systemId": "TELLURIDE",
                    "name": "Telluride"
                },
                {
                    "id": "1381",
                    "markId": "63",
                    "systemId": "TOWNER",
                    "name": "Towner"
                },
                {
                    "id": "1382",
                    "markId": "63",
                    "systemId": "VENGA",
                    "name": "Venga"
                },
                {
                    "id": "1383",
                    "markId": "63",
                    "systemId": "VISTO",
                    "name": "Visto"
                },
                {
                    "id": "1384",
                    "markId": "63",
                    "systemId": "X-TREK",
                    "name": "X-Trek"
                },
                {
                    "id": "1385",
                    "markId": "63",
                    "systemId": "XCEED",
                    "name": "Xceed"
                },
                {
                    "id": "1386",
                    "markId": "64",
                    "systemId": "1111",
                    "name": "1111 Ока"
                },
                {
                    "id": "1387",
                    "markId": "64",
                    "systemId": "2101",
                    "name": "2101"
                },
                {
                    "id": "1388",
                    "markId": "64",
                    "systemId": "2102",
                    "name": "2102"
                },
                {
                    "id": "1389",
                    "markId": "64",
                    "systemId": "2103",
                    "name": "2103"
                },
                {
                    "id": "1390",
                    "markId": "64",
                    "systemId": "2104",
                    "name": "2104"
                },
                {
                    "id": "1391",
                    "markId": "64",
                    "systemId": "2105",
                    "name": "2105"
                },
                {
                    "id": "1392",
                    "markId": "64",
                    "systemId": "2106",
                    "name": "2106"
                },
                {
                    "id": "1393",
                    "markId": "64",
                    "systemId": "2107",
                    "name": "2107"
                },
                {
                    "id": "1394",
                    "markId": "64",
                    "systemId": "2108",
                    "name": "2108"
                },
                {
                    "id": "1395",
                    "markId": "64",
                    "systemId": "2109",
                    "name": "2109"
                },
                {
                    "id": "1396",
                    "markId": "64",
                    "systemId": "21099",
                    "name": "21099"
                },
                {
                    "id": "1397",
                    "markId": "64",
                    "systemId": "2110",
                    "name": "2110"
                },
                {
                    "id": "1398",
                    "markId": "64",
                    "systemId": "2111",
                    "name": "2111"
                },
                {
                    "id": "1399",
                    "markId": "64",
                    "systemId": "2112",
                    "name": "2112"
                },
                {
                    "id": "1400",
                    "markId": "64",
                    "systemId": "2113",
                    "name": "2113"
                },
                {
                    "id": "1401",
                    "markId": "64",
                    "systemId": "2114",
                    "name": "2114"
                },
                {
                    "id": "1402",
                    "markId": "64",
                    "systemId": "2115",
                    "name": "2115"
                },
                {
                    "id": "1403",
                    "markId": "64",
                    "systemId": "2120",
                    "name": "2120 (Надежда)"
                },
                {
                    "id": "1404",
                    "markId": "64",
                    "systemId": "2121",
                    "name": "2121(4x4)"
                },
                {
                    "id": "1405",
                    "markId": "64",
                    "systemId": "2123",
                    "name": "2123"
                },
                {
                    "id": "1406",
                    "markId": "64",
                    "systemId": "2129",
                    "name": "2129"
                },
                {
                    "id": "1407",
                    "markId": "64",
                    "systemId": "2131",
                    "name": "2131(4x4)"
                },
                {
                    "id": "1408",
                    "markId": "64",
                    "systemId": "2328",
                    "name": "2328"
                },
                {
                    "id": "1409",
                    "markId": "64",
                    "systemId": "2329",
                    "name": "2329"
                },
                {
                    "id": "1410",
                    "markId": "64",
                    "systemId": "EL_LADA",
                    "name": "EL Lada"
                },
                {
                    "id": "1411",
                    "markId": "64",
                    "systemId": "GRANTA",
                    "name": "Granta"
                },
                {
                    "id": "1412",
                    "markId": "64",
                    "systemId": "KALINA",
                    "name": "Kalina"
                },
                {
                    "id": "1413",
                    "markId": "64",
                    "systemId": "LARGUS",
                    "name": "Largus"
                },
                {
                    "id": "1414",
                    "markId": "64",
                    "systemId": "PRIORA",
                    "name": "Priora"
                },
                {
                    "id": "1415",
                    "markId": "64",
                    "systemId": "REVOLUTION",
                    "name": "Revolution"
                },
                {
                    "id": "1416",
                    "markId": "64",
                    "systemId": "VESTA",
                    "name": "Vesta"
                },
                {
                    "id": "1417",
                    "markId": "64",
                    "systemId": "XRAY",
                    "name": "XRAY"
                },
                {
                    "id": "1418",
                    "markId": "65",
                    "systemId": "350/400_GT",
                    "name": "350/400 GT"
                },
                {
                    "id": "1419",
                    "markId": "65",
                    "systemId": "AVENTADOR",
                    "name": "Aventador"
                },
                {
                    "id": "1420",
                    "markId": "65",
                    "systemId": "CENTENARIO",
                    "name": "Centenario"
                },
                {
                    "id": "1421",
                    "markId": "65",
                    "systemId": "COUNTACH",
                    "name": "Countach"
                },
                {
                    "id": "1422",
                    "markId": "65",
                    "systemId": "DIABLO",
                    "name": "Diablo"
                },
                {
                    "id": "1423",
                    "markId": "65",
                    "systemId": "EGOISTA",
                    "name": "Egoista"
                },
                {
                    "id": "1424",
                    "markId": "65",
                    "systemId": "ESPADA",
                    "name": "Espada"
                },
                {
                    "id": "1425",
                    "markId": "65",
                    "systemId": "GALLARDO",
                    "name": "Gallardo"
                },
                {
                    "id": "1426",
                    "markId": "65",
                    "systemId": "HURACAN",
                    "name": "Huracan"
                },
                {
                    "id": "1427",
                    "markId": "65",
                    "systemId": "ISLERO",
                    "name": "Islero"
                },
                {
                    "id": "1428",
                    "markId": "65",
                    "systemId": "JALPA",
                    "name": "Jalpa"
                },
                {
                    "id": "1429",
                    "markId": "65",
                    "systemId": "JARAMA",
                    "name": "Jarama"
                },
                {
                    "id": "1430",
                    "markId": "65",
                    "systemId": "LM001",
                    "name": "LM001"
                },
                {
                    "id": "1431",
                    "markId": "65",
                    "systemId": "LM002",
                    "name": "LM002"
                },
                {
                    "id": "1432",
                    "markId": "65",
                    "systemId": "MIURA",
                    "name": "Miura"
                },
                {
                    "id": "1433",
                    "markId": "65",
                    "systemId": "MURCIELAGO",
                    "name": "Murcielago"
                },
                {
                    "id": "1434",
                    "markId": "65",
                    "systemId": "REVENTON",
                    "name": "Reventon"
                },
                {
                    "id": "1435",
                    "markId": "65",
                    "systemId": "SESTO_ELEMENTO",
                    "name": "Sesto Elemento"
                },
                {
                    "id": "1436",
                    "markId": "65",
                    "systemId": "SILHOUETTE",
                    "name": "Silhouette"
                },
                {
                    "id": "1437",
                    "markId": "65",
                    "systemId": "URRACO",
                    "name": "Urraco"
                },
                {
                    "id": "1438",
                    "markId": "65",
                    "systemId": "URUS",
                    "name": "Urus"
                },
                {
                    "id": "1439",
                    "markId": "65",
                    "systemId": "VENENO",
                    "name": "Veneno"
                },
                {
                    "id": "1440",
                    "markId": "66",
                    "systemId": "A_112",
                    "name": "A 112"
                },
                {
                    "id": "1441",
                    "markId": "66",
                    "systemId": "APPIA",
                    "name": "Appia"
                },
                {
                    "id": "1442",
                    "markId": "66",
                    "systemId": "AURELIA",
                    "name": "Aurelia"
                },
                {
                    "id": "1443",
                    "markId": "66",
                    "systemId": "BETA",
                    "name": "Beta"
                },
                {
                    "id": "1444",
                    "markId": "66",
                    "systemId": "DEDRA",
                    "name": "Dedra"
                },
                {
                    "id": "1445",
                    "markId": "66",
                    "systemId": "DELTA",
                    "name": "Delta"
                },
                {
                    "id": "1446",
                    "markId": "66",
                    "systemId": "FLAMINIA",
                    "name": "Flaminia"
                },
                {
                    "id": "1447",
                    "markId": "66",
                    "systemId": "FLAVIA",
                    "name": "Flavia"
                },
                {
                    "id": "1448",
                    "markId": "66",
                    "systemId": "FULVIA",
                    "name": "Fulvia"
                },
                {
                    "id": "1449",
                    "markId": "66",
                    "systemId": "GAMMA",
                    "name": "Gamma"
                },
                {
                    "id": "1450",
                    "markId": "66",
                    "systemId": "HYENA",
                    "name": "Hyena"
                },
                {
                    "id": "1451",
                    "markId": "66",
                    "systemId": "KAPPA",
                    "name": "Kappa"
                },
                {
                    "id": "1452",
                    "markId": "66",
                    "systemId": "LAMBDA",
                    "name": "Lambda"
                },
                {
                    "id": "1453",
                    "markId": "66",
                    "systemId": "LYBRA",
                    "name": "Lybra"
                },
                {
                    "id": "1454",
                    "markId": "66",
                    "systemId": "MONTE_CARLO",
                    "name": "Monte Carlo"
                },
                {
                    "id": "1455",
                    "markId": "66",
                    "systemId": "MUSA",
                    "name": "Musa"
                },
                {
                    "id": "1456",
                    "markId": "66",
                    "systemId": "PHEDRA",
                    "name": "Phedra"
                },
                {
                    "id": "1457",
                    "markId": "66",
                    "systemId": "PRISMA",
                    "name": "Prisma"
                },
                {
                    "id": "1458",
                    "markId": "66",
                    "systemId": "RALLY_037",
                    "name": "Rally 037"
                },
                {
                    "id": "1459",
                    "markId": "66",
                    "systemId": "STRATOS",
                    "name": "Stratos"
                },
                {
                    "id": "1460",
                    "markId": "66",
                    "systemId": "THEMA",
                    "name": "Thema"
                },
                {
                    "id": "1461",
                    "markId": "66",
                    "systemId": "THESIS",
                    "name": "Thesis"
                },
                {
                    "id": "1462",
                    "markId": "66",
                    "systemId": "TREVI",
                    "name": "Trevi"
                },
                {
                    "id": "1463",
                    "markId": "66",
                    "systemId": "VOYAGER",
                    "name": "Voyager"
                },
                {
                    "id": "1464",
                    "markId": "66",
                    "systemId": "Y10",
                    "name": "Y10"
                },
                {
                    "id": "1465",
                    "markId": "66",
                    "systemId": "YPSILON",
                    "name": "Ypsilon"
                },
                {
                    "id": "1466",
                    "markId": "66",
                    "systemId": "ZETA",
                    "name": "Zeta"
                },
                {
                    "id": "1467",
                    "markId": "67",
                    "systemId": "DEFENDER",
                    "name": "Defender"
                },
                {
                    "id": "1468",
                    "markId": "67",
                    "systemId": "DISCOVERY",
                    "name": "Discovery"
                },
                {
                    "id": "1469",
                    "markId": "67",
                    "systemId": "DISCOVERY_SPORT",
                    "name": "Discovery Sport"
                },
                {
                    "id": "1470",
                    "markId": "67",
                    "systemId": "FREELANDER",
                    "name": "Freelander"
                },
                {
                    "id": "1471",
                    "markId": "67",
                    "systemId": "RANGE_ROVER",
                    "name": "Range Rover"
                },
                {
                    "id": "1472",
                    "markId": "67",
                    "systemId": "RANGE_ROVER_EVOQUE",
                    "name": "Range Rover Evoque"
                },
                {
                    "id": "1473",
                    "markId": "67",
                    "systemId": "RANGE_ROVER_SPORT",
                    "name": "Range Rover Sport"
                },
                {
                    "id": "1474",
                    "markId": "67",
                    "systemId": "RANGE_ROVER_VELAR",
                    "name": "Range Rover Velar"
                },
                {
                    "id": "1475",
                    "markId": "67",
                    "systemId": "SERIES_I",
                    "name": "Series I"
                },
                {
                    "id": "1476",
                    "markId": "67",
                    "systemId": "SERIES_II",
                    "name": "Series II"
                },
                {
                    "id": "1477",
                    "markId": "67",
                    "systemId": "SERIES_III",
                    "name": "Series III"
                },
                {
                    "id": "1478",
                    "markId": "69",
                    "systemId": "BREEZ(520)",
                    "name": "Breez(520)"
                },
                {
                    "id": "1479",
                    "markId": "69",
                    "systemId": "CEBRIUM(720)",
                    "name": "Cebrium(720)"
                },
                {
                    "id": "1480",
                    "markId": "69",
                    "systemId": "CELLIYA(530)",
                    "name": "Celliya(530)"
                },
                {
                    "id": "1481",
                    "markId": "69",
                    "systemId": "MURMAN(820)",
                    "name": "Murman(820)"
                },
                {
                    "id": "1482",
                    "markId": "69",
                    "systemId": "MYWAY",
                    "name": "Myway"
                },
                {
                    "id": "1483",
                    "markId": "69",
                    "systemId": "SMILY",
                    "name": "Smily"
                },
                {
                    "id": "1484",
                    "markId": "69",
                    "systemId": "SOLANO",
                    "name": "Solano"
                },
                {
                    "id": "1485",
                    "markId": "69",
                    "systemId": "X50",
                    "name": "X50"
                },
                {
                    "id": "1486",
                    "markId": "69",
                    "systemId": "X60",
                    "name": "X60"
                },
                {
                    "id": "1487",
                    "markId": "69",
                    "systemId": "X70",
                    "name": "X70"
                },
                {
                    "id": "1488",
                    "markId": "70",
                    "systemId": "AVIATOR",
                    "name": "Aviator"
                },
                {
                    "id": "1489",
                    "markId": "70",
                    "systemId": "BLACKWOOD",
                    "name": "Blackwood"
                },
                {
                    "id": "1490",
                    "markId": "70",
                    "systemId": "CAPRI",
                    "name": "Capri"
                },
                {
                    "id": "1491",
                    "markId": "70",
                    "systemId": "CONTINENTAL",
                    "name": "Continental"
                },
                {
                    "id": "1492",
                    "markId": "70",
                    "systemId": "CORSAIR",
                    "name": "Corsair"
                },
                {
                    "id": "1493",
                    "markId": "70",
                    "systemId": "LS",
                    "name": "LS"
                },
                {
                    "id": "1494",
                    "markId": "70",
                    "systemId": "MARK_III",
                    "name": "Mark III"
                },
                {
                    "id": "1495",
                    "markId": "70",
                    "systemId": "MARK_IV",
                    "name": "Mark IV"
                },
                {
                    "id": "1496",
                    "markId": "70",
                    "systemId": "MARK_LT",
                    "name": "Mark LT"
                },
                {
                    "id": "1497",
                    "markId": "70",
                    "systemId": "MARK_VII",
                    "name": "Mark VII"
                },
                {
                    "id": "1498",
                    "markId": "70",
                    "systemId": "MARK_VIII",
                    "name": "Mark VIII"
                },
                {
                    "id": "1499",
                    "markId": "70",
                    "systemId": "MKC",
                    "name": "MKC"
                },
                {
                    "id": "1500",
                    "markId": "70",
                    "systemId": "MKS",
                    "name": "MKS"
                },
                {
                    "id": "1501",
                    "markId": "70",
                    "systemId": "MKT",
                    "name": "MKT"
                },
                {
                    "id": "1502",
                    "markId": "70",
                    "systemId": "MKX",
                    "name": "MKX"
                },
                {
                    "id": "1503",
                    "markId": "70",
                    "systemId": "MKZ",
                    "name": "MKZ"
                },
                {
                    "id": "1504",
                    "markId": "70",
                    "systemId": "NAUTILUS",
                    "name": "Nautilus"
                },
                {
                    "id": "1505",
                    "markId": "70",
                    "systemId": "NAVIGATOR",
                    "name": "Navigator"
                },
                {
                    "id": "1506",
                    "markId": "70",
                    "systemId": "PREMIERE",
                    "name": "Premiere"
                },
                {
                    "id": "1507",
                    "markId": "70",
                    "systemId": "TOWN_CAR",
                    "name": "Town Car"
                },
                {
                    "id": "1508",
                    "markId": "71",
                    "systemId": "LUXGEN5",
                    "name": "Luxgen5"
                },
                {
                    "id": "1509",
                    "markId": "71",
                    "systemId": "LUXGEN7_MPV",
                    "name": "Luxgen7 MPV"
                },
                {
                    "id": "1510",
                    "markId": "71",
                    "systemId": "LUXGEN7_SUV",
                    "name": "Luxgen7 SUV"
                },
                {
                    "id": "1511",
                    "markId": "71",
                    "systemId": "U6_TURBO",
                    "name": "U6_Turbo"
                },
                {
                    "id": "1512",
                    "markId": "71",
                    "systemId": "U7_TURBO",
                    "name": "U7 Turbo"
                },
                {
                    "id": "1513",
                    "markId": "72",
                    "systemId": "3",
                    "name": "3"
                },
                {
                    "id": "1514",
                    "markId": "72",
                    "systemId": "350",
                    "name": "350"
                },
                {
                    "id": "1515",
                    "markId": "72",
                    "systemId": "5",
                    "name": "5"
                },
                {
                    "id": "1516",
                    "markId": "72",
                    "systemId": "550",
                    "name": "550"
                },
                {
                    "id": "1517",
                    "markId": "72",
                    "systemId": "6",
                    "name": "6"
                },
                {
                    "id": "1518",
                    "markId": "72",
                    "systemId": "750",
                    "name": "750"
                },
                {
                    "id": "1519",
                    "markId": "72",
                    "systemId": "F",
                    "name": "F"
                },
                {
                    "id": "1520",
                    "markId": "72",
                    "systemId": "GS",
                    "name": "GS"
                },
                {
                    "id": "1521",
                    "markId": "72",
                    "systemId": "MGA",
                    "name": "MGA"
                },
                {
                    "id": "1522",
                    "markId": "72",
                    "systemId": "MGB",
                    "name": "MGB"
                },
                {
                    "id": "1523",
                    "markId": "72",
                    "systemId": "MAESTRO",
                    "name": "Maestro"
                },
                {
                    "id": "1524",
                    "markId": "72",
                    "systemId": "METRO",
                    "name": "Metro                                "
                },
                {
                    "id": "1525",
                    "markId": "72",
                    "systemId": "MIDGET",
                    "name": "Midget"
                },
                {
                    "id": "1526",
                    "markId": "72",
                    "systemId": "MONTEGO",
                    "name": "Montego"
                },
                {
                    "id": "1527",
                    "markId": "72",
                    "systemId": "RV8",
                    "name": "RV8"
                },
                {
                    "id": "1528",
                    "markId": "72",
                    "systemId": "TD_MIDGET",
                    "name": "TD Midget"
                },
                {
                    "id": "1529",
                    "markId": "72",
                    "systemId": "TF",
                    "name": "TF"
                },
                {
                    "id": "1530",
                    "markId": "72",
                    "systemId": "XPOWER_SV",
                    "name": "Xpower SV"
                },
                {
                    "id": "1531",
                    "markId": "72",
                    "systemId": "ZR",
                    "name": "ZR"
                },
                {
                    "id": "1532",
                    "markId": "72",
                    "systemId": "ZS",
                    "name": "ZS"
                },
                {
                    "id": "1533",
                    "markId": "72",
                    "systemId": "ZT",
                    "name": "ZT"
                },
                {
                    "id": "1534",
                    "markId": "73",
                    "systemId": "CABRIO",
                    "name": "Cabrio"
                },
                {
                    "id": "1535",
                    "markId": "73",
                    "systemId": "CLUBMAN",
                    "name": "Clubman"
                },
                {
                    "id": "1536",
                    "markId": "73",
                    "systemId": "COUNTRYMAN",
                    "name": "Countryman"
                },
                {
                    "id": "1537",
                    "markId": "73",
                    "systemId": "COUPE",
                    "name": "Coupe"
                },
                {
                    "id": "1538",
                    "markId": "73",
                    "systemId": "HATCH",
                    "name": "Hatch"
                },
                {
                    "id": "1539",
                    "markId": "73",
                    "systemId": "PACEMAN",
                    "name": "Paceman"
                },
                {
                    "id": "1540",
                    "markId": "73",
                    "systemId": "ROADSTER",
                    "name": "Roadster"
                },
                {
                    "id": "1541",
                    "markId": "74",
                    "systemId": "ARMADA",
                    "name": "Armada"
                },
                {
                    "id": "1542",
                    "markId": "74",
                    "systemId": "BOLERO",
                    "name": "Bolero"
                },
                {
                    "id": "1543",
                    "markId": "74",
                    "systemId": "CJ-3",
                    "name": "CJ-3"
                },
                {
                    "id": "1544",
                    "markId": "74",
                    "systemId": "CL",
                    "name": "CL"
                },
                {
                    "id": "1545",
                    "markId": "74",
                    "systemId": "COMMANDER",
                    "name": "Commander"
                },
                {
                    "id": "1546",
                    "markId": "74",
                    "systemId": "MM",
                    "name": "MM"
                },
                {
                    "id": "1547",
                    "markId": "74",
                    "systemId": "MARSHAL",
                    "name": "Marshal"
                },
                {
                    "id": "1548",
                    "markId": "74",
                    "systemId": "NC_640_DP",
                    "name": "NC 640 DP"
                },
                {
                    "id": "1549",
                    "markId": "74",
                    "systemId": "SCORPIO",
                    "name": "Scorpio"
                },
                {
                    "id": "1550",
                    "markId": "74",
                    "systemId": "VERITO",
                    "name": "Verito"
                },
                {
                    "id": "1551",
                    "markId": "74",
                    "systemId": "VOYAGER",
                    "name": "Voyager"
                },
                {
                    "id": "1552",
                    "markId": "74",
                    "systemId": "XYLO",
                    "name": "Xylo"
                },
                {
                    "id": "1553",
                    "markId": "75",
                    "systemId": "228",
                    "name": "228"
                },
                {
                    "id": "1554",
                    "markId": "75",
                    "systemId": "3200_GT",
                    "name": "3200 GT"
                },
                {
                    "id": "1555",
                    "markId": "75",
                    "systemId": "420",
                    "name": "420"
                },
                {
                    "id": "1556",
                    "markId": "75",
                    "systemId": "4200_GT",
                    "name": "4200 GT"
                },
                {
                    "id": "1557",
                    "markId": "75",
                    "systemId": "BARCHETTA_STRADALE",
                    "name": "Barchetta Stradale"
                },
                {
                    "id": "1558",
                    "markId": "75",
                    "systemId": "BITURBO",
                    "name": "Biturbo"
                },
                {
                    "id": "1559",
                    "markId": "75",
                    "systemId": "BORA",
                    "name": "Bora"
                },
                {
                    "id": "1560",
                    "markId": "75",
                    "systemId": "CHUBASCO",
                    "name": "Chubasco"
                },
                {
                    "id": "1561",
                    "markId": "75",
                    "systemId": "GHIBLI",
                    "name": "Ghibli"
                },
                {
                    "id": "1562",
                    "markId": "75",
                    "systemId": "GRANTURISMO",
                    "name": "GranTurismo"
                },
                {
                    "id": "1563",
                    "markId": "75",
                    "systemId": "INDY",
                    "name": "Indy"
                },
                {
                    "id": "1564",
                    "markId": "75",
                    "systemId": "KARIF",
                    "name": "Karif"
                },
                {
                    "id": "1565",
                    "markId": "75",
                    "systemId": "KHAMSIN",
                    "name": "Khamsin"
                },
                {
                    "id": "1566",
                    "markId": "75",
                    "systemId": "KYALAMI",
                    "name": "Kyalami"
                },
                {
                    "id": "1567",
                    "markId": "75",
                    "systemId": "LEVANTE",
                    "name": "Levante"
                },
                {
                    "id": "1568",
                    "markId": "75",
                    "systemId": "MC12",
                    "name": "MC12"
                },
                {
                    "id": "1569",
                    "markId": "75",
                    "systemId": "MERAK",
                    "name": "Merak"
                },
                {
                    "id": "1570",
                    "markId": "75",
                    "systemId": "MEXICO",
                    "name": "Mexico"
                },
                {
                    "id": "1571",
                    "markId": "75",
                    "systemId": "QUATTROPORTE",
                    "name": "Quattroporte"
                },
                {
                    "id": "1572",
                    "markId": "75",
                    "systemId": "ROYALE",
                    "name": "Royale"
                },
                {
                    "id": "1573",
                    "markId": "75",
                    "systemId": "SHAMAL",
                    "name": "Shamal"
                },
                {
                    "id": "1574",
                    "markId": "76",
                    "systemId": "57",
                    "name": "57"
                },
                {
                    "id": "1575",
                    "markId": "76",
                    "systemId": "62",
                    "name": "62"
                },
                {
                    "id": "1576",
                    "markId": "76",
                    "systemId": "EXELERO",
                    "name": "Exelero"
                },
                {
                    "id": "1577",
                    "markId": "77",
                    "systemId": "1000",
                    "name": "1000"
                },
                {
                    "id": "1578",
                    "markId": "77",
                    "systemId": "121",
                    "name": "121"
                },
                {
                    "id": "1579",
                    "markId": "77",
                    "systemId": "1300",
                    "name": "1300"
                },
                {
                    "id": "1580",
                    "markId": "77",
                    "systemId": "2",
                    "name": "2"
                },
                {
                    "id": "1581",
                    "markId": "77",
                    "systemId": "3",
                    "name": "3"
                },
                {
                    "id": "1582",
                    "markId": "77",
                    "systemId": "3_MPS",
                    "name": "3 MPS"
                },
                {
                    "id": "1583",
                    "markId": "77",
                    "systemId": "323",
                    "name": "323"
                },
                {
                    "id": "1584",
                    "markId": "77",
                    "systemId": "5",
                    "name": "5"
                },
                {
                    "id": "1585",
                    "markId": "77",
                    "systemId": "6",
                    "name": "6"
                },
                {
                    "id": "1586",
                    "markId": "77",
                    "systemId": "6_MPS",
                    "name": "6 MPS"
                },
                {
                    "id": "1587",
                    "markId": "77",
                    "systemId": "616",
                    "name": "616"
                },
                {
                    "id": "1588",
                    "markId": "77",
                    "systemId": "626",
                    "name": "626"
                },
                {
                    "id": "1589",
                    "markId": "77",
                    "systemId": "818",
                    "name": "818"
                },
                {
                    "id": "1590",
                    "markId": "77",
                    "systemId": "929",
                    "name": "929"
                },
                {
                    "id": "1591",
                    "markId": "77",
                    "systemId": "AZ-1",
                    "name": "AZ-1"
                },
                {
                    "id": "1592",
                    "markId": "77",
                    "systemId": "AZ-OFFROAD",
                    "name": "AZ-Offroad"
                },
                {
                    "id": "1593",
                    "markId": "77",
                    "systemId": "AZ-WAGON",
                    "name": "AZ-Wagon"
                },
                {
                    "id": "1594",
                    "markId": "77",
                    "systemId": "ATENZA",
                    "name": "Atenza"
                },
                {
                    "id": "1595",
                    "markId": "77",
                    "systemId": "AUTOZAM_AZ_3",
                    "name": "Autozam AZ-3"
                },
                {
                    "id": "1596",
                    "markId": "77",
                    "systemId": "AXELA",
                    "name": "Axela"
                },
                {
                    "id": "1597",
                    "markId": "77",
                    "systemId": "B-SERIES",
                    "name": "B-SERIES"
                },
                {
                    "id": "1598",
                    "markId": "77",
                    "systemId": "BT-50",
                    "name": "BT-50"
                },
                {
                    "id": "1599",
                    "markId": "77",
                    "systemId": "BIANTE",
                    "name": "Biante"
                },
                {
                    "id": "1600",
                    "markId": "77",
                    "systemId": "BONGO",
                    "name": "Bongo"
                },
                {
                    "id": "1601",
                    "markId": "77",
                    "systemId": "BONGO_FRIENDEE",
                    "name": "Bongo Friendee"
                },
                {
                    "id": "1602",
                    "markId": "77",
                    "systemId": "CX-3",
                    "name": "CX-3"
                },
                {
                    "id": "1603",
                    "markId": "77",
                    "systemId": "CX-30",
                    "name": "CX-30"
                },
                {
                    "id": "1604",
                    "markId": "77",
                    "systemId": "CX-5",
                    "name": "CX-5"
                },
                {
                    "id": "1605",
                    "markId": "77",
                    "systemId": "CX-7",
                    "name": "CX-7"
                },
                {
                    "id": "1606",
                    "markId": "77",
                    "systemId": "CX-8",
                    "name": "CX-8"
                },
                {
                    "id": "1607",
                    "markId": "77",
                    "systemId": "CX-9",
                    "name": "CX-9"
                },
                {
                    "id": "1608",
                    "markId": "77",
                    "systemId": "CAPELLA",
                    "name": "Capella"
                },
                {
                    "id": "1609",
                    "markId": "77",
                    "systemId": "CAROL",
                    "name": "Carol"
                },
                {
                    "id": "1610",
                    "markId": "77",
                    "systemId": "CHANTEZ",
                    "name": "Chantez"
                },
                {
                    "id": "1611",
                    "markId": "77",
                    "systemId": "COSMO",
                    "name": "Cosmo"
                },
                {
                    "id": "1612",
                    "markId": "77",
                    "systemId": "DEMIO",
                    "name": "Demio"
                },
                {
                    "id": "1613",
                    "markId": "77",
                    "systemId": "EFINI_MS-6",
                    "name": "Efini MS-6"
                },
                {
                    "id": "1614",
                    "markId": "77",
                    "systemId": "EFINI_MS-8",
                    "name": "Efini MS-8"
                },
                {
                    "id": "1615",
                    "markId": "77",
                    "systemId": "EFINI_MS-9",
                    "name": "Efini MS-9"
                },
                {
                    "id": "1616",
                    "markId": "77",
                    "systemId": "ETUDE",
                    "name": "Etude"
                },
                {
                    "id": "1617",
                    "markId": "77",
                    "systemId": "EUNOS_100",
                    "name": "Eunos 100"
                },
                {
                    "id": "1618",
                    "markId": "77",
                    "systemId": "EUNOS_300",
                    "name": "Eunos 300"
                },
                {
                    "id": "1619",
                    "markId": "77",
                    "systemId": "EUNOS_500",
                    "name": "Eunos 500"
                },
                {
                    "id": "1620",
                    "markId": "77",
                    "systemId": "EUNOS_COSMO",
                    "name": "Eunos Cosmo"
                },
                {
                    "id": "1621",
                    "markId": "77",
                    "systemId": "FAMILIA",
                    "name": "Familia"
                },
                {
                    "id": "1622",
                    "markId": "77",
                    "systemId": "FLAIR",
                    "name": "Flair"
                },
                {
                    "id": "1623",
                    "markId": "77",
                    "systemId": "FLAIR_CROSSOVER",
                    "name": "Flair Crossover"
                },
                {
                    "id": "1624",
                    "markId": "77",
                    "systemId": "FLAIR_WAGON",
                    "name": "Flair Wagon"
                },
                {
                    "id": "1625",
                    "markId": "77",
                    "systemId": "LANTIS",
                    "name": "Lantis"
                },
                {
                    "id": "1626",
                    "markId": "77",
                    "systemId": "LAPUTA",
                    "name": "Laputa"
                },
                {
                    "id": "1627",
                    "markId": "77",
                    "systemId": "LUCE",
                    "name": "Luce"
                },
                {
                    "id": "1628",
                    "markId": "77",
                    "systemId": "MPV",
                    "name": "MPV"
                },
                {
                    "id": "1629",
                    "markId": "77",
                    "systemId": "MX-3",
                    "name": "MX-3"
                },
                {
                    "id": "1630",
                    "markId": "77",
                    "systemId": "MX-5",
                    "name": "MX-5"
                },
                {
                    "id": "1631",
                    "markId": "77",
                    "systemId": "MX-6",
                    "name": "MX-6"
                },
                {
                    "id": "1632",
                    "markId": "77",
                    "systemId": "MILLENIA",
                    "name": "Millenia"
                },
                {
                    "id": "1633",
                    "markId": "77",
                    "systemId": "NAVAJO",
                    "name": "Navajo"
                },
                {
                    "id": "1634",
                    "markId": "77",
                    "systemId": "PERSONA",
                    "name": "Persona"
                },
                {
                    "id": "1635",
                    "markId": "77",
                    "systemId": "PREMACY",
                    "name": "Premacy"
                },
                {
                    "id": "1636",
                    "markId": "77",
                    "systemId": "PROCEED",
                    "name": "Proceed"
                },
                {
                    "id": "1637",
                    "markId": "77",
                    "systemId": "PROCEED_LEVANTE",
                    "name": "Proceed Levante"
                },
                {
                    "id": "1638",
                    "markId": "77",
                    "systemId": "PROCEED_MARVIE",
                    "name": "Proceed Marvie"
                },
                {
                    "id": "1639",
                    "markId": "77",
                    "systemId": "PROTÉGÉ",
                    "name": "Protégé"
                },
                {
                    "id": "1640",
                    "markId": "77",
                    "systemId": "R360",
                    "name": "R360"
                },
                {
                    "id": "1641",
                    "markId": "77",
                    "systemId": "RX-7",
                    "name": "RX-7"
                },
                {
                    "id": "1642",
                    "markId": "77",
                    "systemId": "RX-8",
                    "name": "RX-8"
                },
                {
                    "id": "1643",
                    "markId": "77",
                    "systemId": "REVUE",
                    "name": "Revue"
                },
                {
                    "id": "1644",
                    "markId": "77",
                    "systemId": "ROADSTER",
                    "name": "Roadster"
                },
                {
                    "id": "1645",
                    "markId": "77",
                    "systemId": "SCRUM",
                    "name": "Scrum"
                },
                {
                    "id": "1646",
                    "markId": "77",
                    "systemId": "SENTIA",
                    "name": "Sentia"
                },
                {
                    "id": "1647",
                    "markId": "77",
                    "systemId": "SPIANO",
                    "name": "Spiano"
                },
                {
                    "id": "1648",
                    "markId": "77",
                    "systemId": "TRIBUTE",
                    "name": "Tribute"
                },
                {
                    "id": "1649",
                    "markId": "77",
                    "systemId": "VERISA",
                    "name": "Verisa"
                },
                {
                    "id": "1650",
                    "markId": "77",
                    "systemId": "XEDOS_6",
                    "name": "Xedos 6"
                },
                {
                    "id": "1651",
                    "markId": "77",
                    "systemId": "XEDOS_9",
                    "name": "Xedos 9"
                },
                {
                    "id": "1652",
                    "markId": "78",
                    "systemId": "540C",
                    "name": "540C"
                },
                {
                    "id": "1653",
                    "markId": "78",
                    "systemId": "570GT",
                    "name": "570GT"
                },
                {
                    "id": "1654",
                    "markId": "78",
                    "systemId": "570S",
                    "name": "570S"
                },
                {
                    "id": "1655",
                    "markId": "78",
                    "systemId": "600LT",
                    "name": "600LT"
                },
                {
                    "id": "1656",
                    "markId": "78",
                    "systemId": "650S",
                    "name": "650S"
                },
                {
                    "id": "1657",
                    "markId": "78",
                    "systemId": "675LT",
                    "name": "675LT"
                },
                {
                    "id": "1658",
                    "markId": "78",
                    "systemId": "720S",
                    "name": "720S"
                },
                {
                    "id": "1659",
                    "markId": "78",
                    "systemId": "F1",
                    "name": "F1"
                },
                {
                    "id": "1660",
                    "markId": "78",
                    "systemId": "GT",
                    "name": "GT"
                },
                {
                    "id": "1661",
                    "markId": "78",
                    "systemId": "MP4-12C",
                    "name": "MP4-12C"
                },
                {
                    "id": "1662",
                    "markId": "78",
                    "systemId": "P1",
                    "name": "P1"
                },
                {
                    "id": "1663",
                    "markId": "78",
                    "systemId": "SENNA",
                    "name": "Senna"
                },
                {
                    "id": "1664",
                    "markId": "79",
                    "systemId": "190",
                    "name": "190(W201)"
                },
                {
                    "id": "1665",
                    "markId": "79",
                    "systemId": "190_SL",
                    "name": "190 SL"
                },
                {
                    "id": "1666",
                    "markId": "79",
                    "systemId": "A-CLASS",
                    "name": "A-Класс"
                },
                {
                    "id": "1667",
                    "markId": "79",
                    "systemId": "A-CLASS_AMG",
                    "name": "A-Класс AMG"
                },
                {
                    "id": "1668",
                    "markId": "79",
                    "systemId": "AMG_GT",
                    "name": "AMG GT"
                },
                {
                    "id": "1669",
                    "markId": "79",
                    "systemId": "B-CLASS",
                    "name": "B-Класс"
                },
                {
                    "id": "1670",
                    "markId": "79",
                    "systemId": "C-CLASS",
                    "name": "C-Класс"
                },
                {
                    "id": "1671",
                    "markId": "79",
                    "systemId": "C-CLASS_AMG",
                    "name": "C-Класс AMG"
                },
                {
                    "id": "1672",
                    "markId": "79",
                    "systemId": "CL-CLASS",
                    "name": "CL-Класс"
                },
                {
                    "id": "1673",
                    "markId": "79",
                    "systemId": "CL-CLASS_AMG",
                    "name": "CL-Класс AMG"
                },
                {
                    "id": "1674",
                    "markId": "79",
                    "systemId": "CLA",
                    "name": "CLA"
                },
                {
                    "id": "1675",
                    "markId": "79",
                    "systemId": "CLA_AMG",
                    "name": "CLA AMG"
                },
                {
                    "id": "1676",
                    "markId": "79",
                    "systemId": "CLC-CLASS",
                    "name": "CLC-Класс"
                },
                {
                    "id": "1677",
                    "markId": "79",
                    "systemId": "CLK-CLASS",
                    "name": "CLK-Класс"
                },
                {
                    "id": "1678",
                    "markId": "79",
                    "systemId": "CLK-CLASS_AMG",
                    "name": "CLK-Класс AMG"
                },
                {
                    "id": "1679",
                    "markId": "79",
                    "systemId": "CLS",
                    "name": "CLS"
                },
                {
                    "id": "1680",
                    "markId": "79",
                    "systemId": "CLS_AMG",
                    "name": "CLS AMG"
                },
                {
                    "id": "1681",
                    "markId": "79",
                    "systemId": "CITAN",
                    "name": "Citan"
                },
                {
                    "id": "1682",
                    "markId": "79",
                    "systemId": "E-CLASS",
                    "name": "E-Класс"
                },
                {
                    "id": "1683",
                    "markId": "79",
                    "systemId": "E-CLASS_AMG",
                    "name": "E-Класс AMG"
                },
                {
                    "id": "1684",
                    "markId": "79",
                    "systemId": "EQC",
                    "name": "EQC"
                },
                {
                    "id": "1685",
                    "markId": "79",
                    "systemId": "G-CLASS",
                    "name": "G-Класс"
                },
                {
                    "id": "1686",
                    "markId": "79",
                    "systemId": "G-CLASS_AMG",
                    "name": "G-Класс AMG"
                },
                {
                    "id": "1687",
                    "markId": "79",
                    "systemId": "G-CLASS_AMG_6X6",
                    "name": "G-Класс AMG 6x6"
                },
                {
                    "id": "1688",
                    "markId": "79",
                    "systemId": "GL-CLASS",
                    "name": "GL-Класс"
                },
                {
                    "id": "1689",
                    "markId": "79",
                    "systemId": "GL-CLASS_AMG",
                    "name": "GL-Класс AMG"
                },
                {
                    "id": "1690",
                    "markId": "79",
                    "systemId": "GLA",
                    "name": "GLA"
                },
                {
                    "id": "1691",
                    "markId": "79",
                    "systemId": "GLA_AMG",
                    "name": "GLA AMG"
                },
                {
                    "id": "1692",
                    "markId": "79",
                    "systemId": "GLB",
                    "name": "GLB"
                },
                {
                    "id": "1693",
                    "markId": "79",
                    "systemId": "GLB_AMG",
                    "name": "GLB AMG"
                },
                {
                    "id": "1694",
                    "markId": "79",
                    "systemId": "GLC",
                    "name": "GLC"
                },
                {
                    "id": "1695",
                    "markId": "79",
                    "systemId": "GLC_AMG",
                    "name": "GLC AMG"
                },
                {
                    "id": "1696",
                    "markId": "79",
                    "systemId": "GLC_COUPE",
                    "name": "GLC Coupe"
                },
                {
                    "id": "1697",
                    "markId": "79",
                    "systemId": "GLC_COUPE_AMG",
                    "name": "GLC Coupe AMG"
                },
                {
                    "id": "1698",
                    "markId": "79",
                    "systemId": "GLE",
                    "name": "GLE"
                },
                {
                    "id": "1699",
                    "markId": "79",
                    "systemId": "GLE_AMG",
                    "name": "GLE AMG"
                },
                {
                    "id": "1700",
                    "markId": "79",
                    "systemId": "GLE_COUPE",
                    "name": "GLE Coupe"
                },
                {
                    "id": "1701",
                    "markId": "79",
                    "systemId": "GLE_COUPE_AMG",
                    "name": "GLE Coupe AMG"
                },
                {
                    "id": "1702",
                    "markId": "79",
                    "systemId": "GLK-CLASS",
                    "name": "GLK-Класс"
                },
                {
                    "id": "1703",
                    "markId": "79",
                    "systemId": "GLS",
                    "name": "GLS"
                },
                {
                    "id": "1704",
                    "markId": "79",
                    "systemId": "GLS_AMG",
                    "name": "GLS AMG"
                },
                {
                    "id": "1705",
                    "markId": "79",
                    "systemId": "M-CLASS",
                    "name": "M-Класс"
                },
                {
                    "id": "1706",
                    "markId": "79",
                    "systemId": "M-CLASS_AMG",
                    "name": "M-Класс AMG"
                },
                {
                    "id": "1707",
                    "markId": "79",
                    "systemId": "MAYBACH_G650_LANDAULET",
                    "name": "Maybach G 650 Landaulet"
                },
                {
                    "id": "1708",
                    "markId": "79",
                    "systemId": "MAYBACH_GLS",
                    "name": "Maybach GLS"
                },
                {
                    "id": "1709",
                    "markId": "79",
                    "systemId": "MAYBACH_S-CLASS",
                    "name": "Maybach S-Класс"
                },
                {
                    "id": "1710",
                    "markId": "79",
                    "systemId": "R-CLASS",
                    "name": "R-Класс"
                },
                {
                    "id": "1711",
                    "markId": "79",
                    "systemId": "R-CLASS_AMG",
                    "name": "R-Класс AMG"
                },
                {
                    "id": "1712",
                    "markId": "79",
                    "systemId": "S-CLASS",
                    "name": "S-Класс"
                },
                {
                    "id": "1713",
                    "markId": "79",
                    "systemId": "S-CLASS_AMG",
                    "name": "S-Класс AMG"
                },
                {
                    "id": "1714",
                    "markId": "79",
                    "systemId": "SL-CLASS",
                    "name": "SL-Класс"
                },
                {
                    "id": "1715",
                    "markId": "79",
                    "systemId": "SL-CLASS_AMG",
                    "name": "SL-Класс AMG"
                },
                {
                    "id": "1716",
                    "markId": "79",
                    "systemId": "SLC",
                    "name": "SLC"
                },
                {
                    "id": "1717",
                    "markId": "79",
                    "systemId": "SLC_AMG",
                    "name": "SLC AMG"
                },
                {
                    "id": "1718",
                    "markId": "79",
                    "systemId": "SLK-CLASS",
                    "name": "SLK-Класс"
                },
                {
                    "id": "1719",
                    "markId": "79",
                    "systemId": "SLK-CLASS_AMG",
                    "name": "SLK-Класс AMG"
                },
                {
                    "id": "1720",
                    "markId": "79",
                    "systemId": "SLR_MCLAREN",
                    "name": "SLR McLaren"
                },
                {
                    "id": "1721",
                    "markId": "79",
                    "systemId": "SLS_AMG",
                    "name": "SLS AMG"
                },
                {
                    "id": "1722",
                    "markId": "79",
                    "systemId": "SIMPLEX",
                    "name": "Simplex"
                },
                {
                    "id": "1723",
                    "markId": "79",
                    "systemId": "V-CLASS",
                    "name": "V-Класс"
                },
                {
                    "id": "1724",
                    "markId": "79",
                    "systemId": "VANEO",
                    "name": "Vaneo"
                },
                {
                    "id": "1725",
                    "markId": "79",
                    "systemId": "VIANO",
                    "name": "Viano"
                },
                {
                    "id": "1726",
                    "markId": "79",
                    "systemId": "VITO",
                    "name": "Vito"
                },
                {
                    "id": "1727",
                    "markId": "79",
                    "systemId": "W100",
                    "name": "W100"
                },
                {
                    "id": "1728",
                    "markId": "79",
                    "systemId": "W105",
                    "name": "W105"
                },
                {
                    "id": "1729",
                    "markId": "79",
                    "systemId": "W108",
                    "name": "W108"
                },
                {
                    "id": "1730",
                    "markId": "79",
                    "systemId": "W110",
                    "name": "W110"
                },
                {
                    "id": "1731",
                    "markId": "79",
                    "systemId": "W111",
                    "name": "W111"
                },
                {
                    "id": "1732",
                    "markId": "79",
                    "systemId": "W114",
                    "name": "W114"
                },
                {
                    "id": "1733",
                    "markId": "79",
                    "systemId": "W115",
                    "name": "W115"
                },
                {
                    "id": "1734",
                    "markId": "79",
                    "systemId": "W120",
                    "name": "W120"
                },
                {
                    "id": "1735",
                    "markId": "79",
                    "systemId": "W121",
                    "name": "W121"
                },
                {
                    "id": "1736",
                    "markId": "79",
                    "systemId": "W123",
                    "name": "W123"
                },
                {
                    "id": "1737",
                    "markId": "79",
                    "systemId": "W124",
                    "name": "W124"
                },
                {
                    "id": "1738",
                    "markId": "79",
                    "systemId": "W128",
                    "name": "W128"
                },
                {
                    "id": "1739",
                    "markId": "79",
                    "systemId": "W136",
                    "name": "W136"
                },
                {
                    "id": "1740",
                    "markId": "79",
                    "systemId": "W142",
                    "name": "W142"
                },
                {
                    "id": "1741",
                    "markId": "79",
                    "systemId": "W186",
                    "name": "W186"
                },
                {
                    "id": "1742",
                    "markId": "79",
                    "systemId": "W188",
                    "name": "W188"
                },
                {
                    "id": "1743",
                    "markId": "79",
                    "systemId": "W189",
                    "name": "W189"
                },
                {
                    "id": "1744",
                    "markId": "79",
                    "systemId": "W191",
                    "name": "W191"
                },
                {
                    "id": "1745",
                    "markId": "79",
                    "systemId": "W29",
                    "name": "W29"
                },
                {
                    "id": "1746",
                    "markId": "79",
                    "systemId": "X-CLASS",
                    "name": "X-Класс"
                },
                {
                    "id": "1747",
                    "markId": "80",
                    "systemId": "CAPRI",
                    "name": "Capri"
                },
                {
                    "id": "1748",
                    "markId": "80",
                    "systemId": "COLONY_PARK",
                    "name": "Colony Park"
                },
                {
                    "id": "1749",
                    "markId": "80",
                    "systemId": "COUGAR",
                    "name": "Cougar"
                },
                {
                    "id": "1750",
                    "markId": "80",
                    "systemId": "EIGHT",
                    "name": "Eight"
                },
                {
                    "id": "1751",
                    "markId": "80",
                    "systemId": "GRAND_MARQUIS",
                    "name": "Grand Marquis"
                },
                {
                    "id": "1752",
                    "markId": "80",
                    "systemId": "MARAUDER",
                    "name": "Marauder"
                },
                {
                    "id": "1753",
                    "markId": "80",
                    "systemId": "MARINER",
                    "name": "Mariner"
                },
                {
                    "id": "1754",
                    "markId": "80",
                    "systemId": "MARQUIS",
                    "name": "Marquis"
                },
                {
                    "id": "1755",
                    "markId": "80",
                    "systemId": "MILAN",
                    "name": "Milan"
                },
                {
                    "id": "1756",
                    "markId": "80",
                    "systemId": "MONTEGO",
                    "name": "Montego"
                },
                {
                    "id": "1757",
                    "markId": "80",
                    "systemId": "MONTEREY",
                    "name": "Monterey"
                },
                {
                    "id": "1758",
                    "markId": "80",
                    "systemId": "MOUNTAINEER",
                    "name": "Mountaineer"
                },
                {
                    "id": "1759",
                    "markId": "80",
                    "systemId": "MYSTIQUE",
                    "name": "Mystique"
                },
                {
                    "id": "1760",
                    "markId": "80",
                    "systemId": "SABLE",
                    "name": "Sable"
                },
                {
                    "id": "1761",
                    "markId": "80",
                    "systemId": "TOPAZ",
                    "name": "Topaz"
                },
                {
                    "id": "1762",
                    "markId": "80",
                    "systemId": "TRACER",
                    "name": "Tracer"
                },
                {
                    "id": "1763",
                    "markId": "80",
                    "systemId": "VILLAGER",
                    "name": "Villager"
                },
                {
                    "id": "1764",
                    "markId": "81",
                    "systemId": "METROCAB_I",
                    "name": "Metrocab I"
                },
                {
                    "id": "1765",
                    "markId": "81",
                    "systemId": "METROCAB_II",
                    "name": "Metrocab II"
                },
                {
                    "id": "1766",
                    "markId": "82",
                    "systemId": "3000_GT",
                    "name": "3000 GT"
                },
                {
                    "id": "1767",
                    "markId": "82",
                    "systemId": "500",
                    "name": "500"
                },
                {
                    "id": "1768",
                    "markId": "82",
                    "systemId": "ASX",
                    "name": "ASX"
                },
                {
                    "id": "1769",
                    "markId": "82",
                    "systemId": "AIRTREK",
                    "name": "Airtrek"
                },
                {
                    "id": "1770",
                    "markId": "82",
                    "systemId": "ASPIRE",
                    "name": "Aspire"
                },
                {
                    "id": "1771",
                    "markId": "82",
                    "systemId": "ATTRAGE",
                    "name": "Attrage"
                },
                {
                    "id": "1772",
                    "markId": "82",
                    "systemId": "BRAVO",
                    "name": "Bravo"
                },
                {
                    "id": "1773",
                    "markId": "82",
                    "systemId": "CARISMA",
                    "name": "Carisma"
                },
                {
                    "id": "1774",
                    "markId": "82",
                    "systemId": "CELESTE",
                    "name": "Celeste"
                },
                {
                    "id": "1775",
                    "markId": "82",
                    "systemId": "CHALLENGER",
                    "name": "Challenger"
                },
                {
                    "id": "1776",
                    "markId": "82",
                    "systemId": "CHARIOT",
                    "name": "Chariot"
                },
                {
                    "id": "1777",
                    "markId": "82",
                    "systemId": "COLT",
                    "name": "Colt"
                },
                {
                    "id": "1778",
                    "markId": "82",
                    "systemId": "CORDIA",
                    "name": "Cordia"
                },
                {
                    "id": "1779",
                    "markId": "82",
                    "systemId": "DEBONAIR",
                    "name": "Debonair"
                },
                {
                    "id": "1780",
                    "markId": "82",
                    "systemId": "DELICA",
                    "name": "Delica"
                },
                {
                    "id": "1781",
                    "markId": "82",
                    "systemId": "DELICA_D:2",
                    "name": "Delica D:2"
                },
                {
                    "id": "1782",
                    "markId": "82",
                    "systemId": "DELICA_D:3",
                    "name": "Delica D:3"
                },
                {
                    "id": "1783",
                    "markId": "82",
                    "systemId": "DELICA_D:5",
                    "name": "Delica D:5"
                },
                {
                    "id": "1784",
                    "markId": "82",
                    "systemId": "DIAMANTE",
                    "name": "Diamante"
                },
                {
                    "id": "1785",
                    "markId": "82",
                    "systemId": "DIGNITY",
                    "name": "Dignity"
                },
                {
                    "id": "1786",
                    "markId": "82",
                    "systemId": "DINGO",
                    "name": "Dingo"
                },
                {
                    "id": "1787",
                    "markId": "82",
                    "systemId": "DION",
                    "name": "Dion"
                },
                {
                    "id": "1788",
                    "markId": "82",
                    "systemId": "ECLIPSE",
                    "name": "Eclipse"
                },
                {
                    "id": "1789",
                    "markId": "82",
                    "systemId": "ECLIPSE_CROSS",
                    "name": "Eclipse Cross"
                },
                {
                    "id": "1790",
                    "markId": "82",
                    "systemId": "EMERAUDE",
                    "name": "Emeraude"
                },
                {
                    "id": "1791",
                    "markId": "82",
                    "systemId": "ENDEAVOR",
                    "name": "Endeavor"
                },
                {
                    "id": "1792",
                    "markId": "82",
                    "systemId": "ETERNA",
                    "name": "Eterna"
                },
                {
                    "id": "1793",
                    "markId": "82",
                    "systemId": "FTO",
                    "name": "FTO"
                },
                {
                    "id": "1794",
                    "markId": "82",
                    "systemId": "FREECA",
                    "name": "Freeca"
                },
                {
                    "id": "1795",
                    "markId": "82",
                    "systemId": "GTO",
                    "name": "GTO"
                },
                {
                    "id": "1796",
                    "markId": "82",
                    "systemId": "GALANT",
                    "name": "Galant"
                },
                {
                    "id": "1797",
                    "markId": "82",
                    "systemId": "GALANT_FORTIS",
                    "name": "Galant Fortis"
                },
                {
                    "id": "1798",
                    "markId": "82",
                    "systemId": "GRANDIS",
                    "name": "Grandis"
                },
                {
                    "id": "1799",
                    "markId": "82",
                    "systemId": "JEEP_J",
                    "name": "Jeep J"
                },
                {
                    "id": "1800",
                    "markId": "82",
                    "systemId": "L200",
                    "name": "L200"
                },
                {
                    "id": "1801",
                    "markId": "82",
                    "systemId": "L300",
                    "name": "L300"
                },
                {
                    "id": "1802",
                    "markId": "82",
                    "systemId": "L400",
                    "name": "L400"
                },
                {
                    "id": "1803",
                    "markId": "82",
                    "systemId": "LANCER",
                    "name": "Lancer"
                },
                {
                    "id": "1804",
                    "markId": "82",
                    "systemId": "LANCER_CARGO",
                    "name": "Lancer Cargo"
                },
                {
                    "id": "1805",
                    "markId": "82",
                    "systemId": "LANCER_EVOLUTION",
                    "name": "Lancer Evolution"
                },
                {
                    "id": "1806",
                    "markId": "82",
                    "systemId": "LANCER_RALLIART",
                    "name": "Lancer Raillart"
                },
                {
                    "id": "1807",
                    "markId": "82",
                    "systemId": "LEGNUM",
                    "name": "Legnum"
                },
                {
                    "id": "1808",
                    "markId": "82",
                    "systemId": "LIBERO",
                    "name": "Libero"
                },
                {
                    "id": "1809",
                    "markId": "82",
                    "systemId": "MINICA",
                    "name": "Minica"
                },
                {
                    "id": "1810",
                    "markId": "82",
                    "systemId": "MINICAB",
                    "name": "Minicab"
                },
                {
                    "id": "1811",
                    "markId": "82",
                    "systemId": "MIRAGE",
                    "name": "Mirage"
                },
                {
                    "id": "1812",
                    "markId": "82",
                    "systemId": "MONTERO",
                    "name": "Montero"
                },
                {
                    "id": "1813",
                    "markId": "82",
                    "systemId": "MONTERO_SPORT",
                    "name": "Montero Sport"
                },
                {
                    "id": "1814",
                    "markId": "82",
                    "systemId": "OUTLANDER",
                    "name": "Outlander"
                },
                {
                    "id": "1815",
                    "markId": "82",
                    "systemId": "PAJERO",
                    "name": "Pajero"
                },
                {
                    "id": "1816",
                    "markId": "82",
                    "systemId": "PAJERO_JUNIOR",
                    "name": "Pajero Junior"
                },
                {
                    "id": "1817",
                    "markId": "82",
                    "systemId": "PAJERO_MINI",
                    "name": "Pajero Mini"
                },
                {
                    "id": "1818",
                    "markId": "82",
                    "systemId": "PAJERO_PININ",
                    "name": "Pajero Pinin"
                },
                {
                    "id": "1819",
                    "markId": "82",
                    "systemId": "PAJERO_SPORT",
                    "name": "Pajero Sport"
                },
                {
                    "id": "1820",
                    "markId": "82",
                    "systemId": "PAJERO_IO",
                    "name": "Pajero iO"
                },
                {
                    "id": "1821",
                    "markId": "82",
                    "systemId": "PISTACHIO",
                    "name": "Pistachio"
                },
                {
                    "id": "1822",
                    "markId": "82",
                    "systemId": "PROUDIA",
                    "name": "Proudia"
                },
                {
                    "id": "1823",
                    "markId": "82",
                    "systemId": "RVR",
                    "name": "RVR"
                },
                {
                    "id": "1824",
                    "markId": "82",
                    "systemId": "RAIDER",
                    "name": "Raider"
                },
                {
                    "id": "1825",
                    "markId": "82",
                    "systemId": "SAPPORO",
                    "name": "Sapporo"
                },
                {
                    "id": "1826",
                    "markId": "82",
                    "systemId": "SAVRIN",
                    "name": "Savrin"
                },
                {
                    "id": "1827",
                    "markId": "82",
                    "systemId": "SIGMA",
                    "name": "Sigma"
                },
                {
                    "id": "1828",
                    "markId": "82",
                    "systemId": "SPACE_GEAR",
                    "name": "Space Gear"
                },
                {
                    "id": "1829",
                    "markId": "82",
                    "systemId": "SPACE_RUNNER",
                    "name": "Space Runner"
                },
                {
                    "id": "1830",
                    "markId": "82",
                    "systemId": "SPACE_STAR",
                    "name": "Space Star"
                },
                {
                    "id": "1831",
                    "markId": "82",
                    "systemId": "SPACE_WAGON",
                    "name": "Space Wagon"
                },
                {
                    "id": "1832",
                    "markId": "82",
                    "systemId": "STARION",
                    "name": "Starion"
                },
                {
                    "id": "1833",
                    "markId": "82",
                    "systemId": "STRADA",
                    "name": "Strada"
                },
                {
                    "id": "1834",
                    "markId": "82",
                    "systemId": "TOPPO",
                    "name": "Toppo"
                },
                {
                    "id": "1835",
                    "markId": "82",
                    "systemId": "TOWN_BOX",
                    "name": "Town Box"
                },
                {
                    "id": "1836",
                    "markId": "82",
                    "systemId": "TREDIA",
                    "name": "Tredia"
                },
                {
                    "id": "1837",
                    "markId": "82",
                    "systemId": "TRITON",
                    "name": "Triton"
                },
                {
                    "id": "1838",
                    "markId": "82",
                    "systemId": "XPANDER",
                    "name": "Xpander"
                },
                {
                    "id": "1839",
                    "markId": "82",
                    "systemId": "EK_ACTIVE",
                    "name": "eK Active"
                },
                {
                    "id": "1840",
                    "markId": "82",
                    "systemId": "EK_CLASSIC",
                    "name": "eK Classic"
                },
                {
                    "id": "1841",
                    "markId": "82",
                    "systemId": "EK_CUSTOM",
                    "name": "eK Custom"
                },
                {
                    "id": "1842",
                    "markId": "82",
                    "systemId": "EK_SPACE",
                    "name": "eK Space"
                },
                {
                    "id": "1843",
                    "markId": "82",
                    "systemId": "EK_SPORT",
                    "name": "eK Sport"
                },
                {
                    "id": "1844",
                    "markId": "82",
                    "systemId": "EK_WAGON",
                    "name": "eK Wagon"
                },
                {
                    "id": "1845",
                    "markId": "82",
                    "systemId": "I",
                    "name": "i"
                },
                {
                    "id": "1846",
                    "markId": "82",
                    "systemId": "I-MIEV",
                    "name": "i-MiEV"
                },
                {
                    "id": "1847",
                    "markId": "83",
                    "systemId": "GALUE",
                    "name": "Galue"
                },
                {
                    "id": "1848",
                    "markId": "83",
                    "systemId": "GALUE_204",
                    "name": "Galue 204"
                },
                {
                    "id": "1849",
                    "markId": "83",
                    "systemId": "HIMIKO",
                    "name": "Himiko"
                },
                {
                    "id": "1850",
                    "markId": "83",
                    "systemId": "LE-SEYDE",
                    "name": "Le-Seyde"
                },
                {
                    "id": "1851",
                    "markId": "83",
                    "systemId": "LIKE",
                    "name": "Like"
                },
                {
                    "id": "1852",
                    "markId": "83",
                    "systemId": "MC-1",
                    "name": "MC-1"
                },
                {
                    "id": "1853",
                    "markId": "83",
                    "systemId": "NOUERA",
                    "name": "Nouera"
                },
                {
                    "id": "1854",
                    "markId": "83",
                    "systemId": "OROCHI",
                    "name": "Orochi"
                },
                {
                    "id": "1855",
                    "markId": "83",
                    "systemId": "RAY",
                    "name": "Ray"
                },
                {
                    "id": "1856",
                    "markId": "83",
                    "systemId": "ROCK_STAR",
                    "name": "Rock Star"
                },
                {
                    "id": "1857",
                    "markId": "83",
                    "systemId": "RYOGA",
                    "name": "Ryoga"
                },
                {
                    "id": "1858",
                    "markId": "83",
                    "systemId": "RYUGI",
                    "name": "Ryugi"
                },
                {
                    "id": "1859",
                    "markId": "83",
                    "systemId": "VIEWT",
                    "name": "Viewt"
                },
                {
                    "id": "1860",
                    "markId": "83",
                    "systemId": "YUGA",
                    "name": "Yuga"
                },
                {
                    "id": "1861",
                    "markId": "83",
                    "systemId": "ZERO_1",
                    "name": "Zero 1"
                },
                {
                    "id": "1862",
                    "markId": "85",
                    "systemId": "ACHIEVA",
                    "name": "Achieva"
                },
                {
                    "id": "1863",
                    "markId": "85",
                    "systemId": "ALERO",
                    "name": "Alero"
                },
                {
                    "id": "1864",
                    "markId": "85",
                    "systemId": "AURORA",
                    "name": "Aurora"
                },
                {
                    "id": "1865",
                    "markId": "85",
                    "systemId": "BRAVADA",
                    "name": "Bravada"
                },
                {
                    "id": "1866",
                    "markId": "85",
                    "systemId": "CUTLASS",
                    "name": "Cutlass"
                },
                {
                    "id": "1867",
                    "markId": "85",
                    "systemId": "CUTLASS_CALAIS",
                    "name": "Cutlass Calais"
                },
                {
                    "id": "1868",
                    "markId": "85",
                    "systemId": "CUTLASS_CIERA",
                    "name": "Cutlass Ciera"
                },
                {
                    "id": "1869",
                    "markId": "85",
                    "systemId": "CUTLASS_SUPREME",
                    "name": "Cutlass Supreme"
                },
                {
                    "id": "1870",
                    "markId": "85",
                    "systemId": "EIGHTY-EIGHT",
                    "name": "Eighty-Eight"
                },
                {
                    "id": "1871",
                    "markId": "85",
                    "systemId": "FIRENZA",
                    "name": "Firenza"
                },
                {
                    "id": "1872",
                    "markId": "85",
                    "systemId": "INTRIGUE",
                    "name": "Intrigue"
                },
                {
                    "id": "1873",
                    "markId": "85",
                    "systemId": "NINENTY-EIGHT",
                    "name": "Ninety-Eight"
                },
                {
                    "id": "1874",
                    "markId": "85",
                    "systemId": "OMEGA",
                    "name": "Omega"
                },
                {
                    "id": "1875",
                    "markId": "85",
                    "systemId": "SERIES_60",
                    "name": "Series 60"
                },
                {
                    "id": "1876",
                    "markId": "85",
                    "systemId": "SERIES_70",
                    "name": "Series 70"
                },
                {
                    "id": "1877",
                    "markId": "85",
                    "systemId": "SILHOUETTE",
                    "name": "Silhouette"
                },
                {
                    "id": "1878",
                    "markId": "85",
                    "systemId": "STARFIRE",
                    "name": "Starfire"
                },
                {
                    "id": "1879",
                    "markId": "85",
                    "systemId": "TORONADO",
                    "name": "Toronado"
                },
                {
                    "id": "1880",
                    "markId": "85",
                    "systemId": "VISTA_CRUISER",
                    "name": "Vista Cruiser"
                },
                {
                    "id": "1881",
                    "markId": "86",
                    "systemId": "ADAM",
                    "name": "Adam"
                },
                {
                    "id": "1882",
                    "markId": "86",
                    "systemId": "ADMIRAL",
                    "name": "Admiral"
                },
                {
                    "id": "1883",
                    "markId": "86",
                    "systemId": "AGILA",
                    "name": "Agila"
                },
                {
                    "id": "1884",
                    "markId": "86",
                    "systemId": "AMPERA",
                    "name": "Ampera"
                },
                {
                    "id": "1885",
                    "markId": "86",
                    "systemId": "ANTARA",
                    "name": "Antara"
                },
                {
                    "id": "1886",
                    "markId": "86",
                    "systemId": "ASCONA",
                    "name": "Ascona"
                },
                {
                    "id": "1887",
                    "markId": "86",
                    "systemId": "ASTRA",
                    "name": "Astra"
                },
                {
                    "id": "1888",
                    "markId": "86",
                    "systemId": "ASTRA_OPC",
                    "name": "Astra OPC"
                },
                {
                    "id": "1889",
                    "markId": "86",
                    "systemId": "CALIBRA",
                    "name": "Calibra"
                },
                {
                    "id": "1890",
                    "markId": "86",
                    "systemId": "CAMPO",
                    "name": "Campo"
                },
                {
                    "id": "1891",
                    "markId": "86",
                    "systemId": "CASCADA",
                    "name": "Cascada"
                },
                {
                    "id": "1892",
                    "markId": "86",
                    "systemId": "COMBO",
                    "name": "Combo"
                },
                {
                    "id": "1893",
                    "markId": "86",
                    "systemId": "COMMODORE",
                    "name": "Commodore"
                },
                {
                    "id": "1894",
                    "markId": "86",
                    "systemId": "CORSA",
                    "name": "Corsa"
                },
                {
                    "id": "1895",
                    "markId": "86",
                    "systemId": "CORSA_OPC",
                    "name": "Corsa OPC"
                },
                {
                    "id": "1896",
                    "markId": "86",
                    "systemId": "CROSSLAND_X",
                    "name": "Crossland X"
                },
                {
                    "id": "1897",
                    "markId": "86",
                    "systemId": "DIPLOMAT",
                    "name": "Diplomat"
                },
                {
                    "id": "1898",
                    "markId": "86",
                    "systemId": "FRONTERA",
                    "name": "Frontera"
                },
                {
                    "id": "1899",
                    "markId": "86",
                    "systemId": "GT",
                    "name": "GT"
                },
                {
                    "id": "1900",
                    "markId": "86",
                    "systemId": "GRANDLAND_X",
                    "name": "Grandland X"
                },
                {
                    "id": "1901",
                    "markId": "86",
                    "systemId": "INSIGNIA",
                    "name": "Insignia"
                },
                {
                    "id": "1902",
                    "markId": "86",
                    "systemId": "INSIGNIA_OPC",
                    "name": "Insignia OPC"
                },
                {
                    "id": "1903",
                    "markId": "86",
                    "systemId": "KADETT",
                    "name": "Kadett"
                },
                {
                    "id": "1904",
                    "markId": "86",
                    "systemId": "KAPITAN",
                    "name": "Kapitan"
                },
                {
                    "id": "1905",
                    "markId": "86",
                    "systemId": "KARL",
                    "name": "Karl"
                },
                {
                    "id": "1906",
                    "markId": "86",
                    "systemId": "MANTA",
                    "name": "Manta"
                },
                {
                    "id": "1907",
                    "markId": "86",
                    "systemId": "MERIVA",
                    "name": "Meriva"
                },
                {
                    "id": "1908",
                    "markId": "86",
                    "systemId": "MERIVA_OPC",
                    "name": "Meriva OPC"
                },
                {
                    "id": "1909",
                    "markId": "86",
                    "systemId": "MOKKA",
                    "name": "Mokka"
                },
                {
                    "id": "1910",
                    "markId": "86",
                    "systemId": "MONTEREY",
                    "name": "Monterey"
                },
                {
                    "id": "1911",
                    "markId": "86",
                    "systemId": "MONZA",
                    "name": "Monza"
                },
                {
                    "id": "1912",
                    "markId": "86",
                    "systemId": "OLYMPIA",
                    "name": "Olympia"
                },
                {
                    "id": "1913",
                    "markId": "86",
                    "systemId": "OMEGA",
                    "name": "Omega"
                },
                {
                    "id": "1914",
                    "markId": "86",
                    "systemId": "P4",
                    "name": "P4"
                },
                {
                    "id": "1915",
                    "markId": "86",
                    "systemId": "REKORD",
                    "name": "Rekord"
                },
                {
                    "id": "1916",
                    "markId": "86",
                    "systemId": "SENATOR",
                    "name": "Senator"
                },
                {
                    "id": "1917",
                    "markId": "86",
                    "systemId": "SIGNUM",
                    "name": "Signum"
                },
                {
                    "id": "1918",
                    "markId": "86",
                    "systemId": "SINTRA",
                    "name": "Sintra"
                },
                {
                    "id": "1919",
                    "markId": "86",
                    "systemId": "SPEEDSTER",
                    "name": "Speedster"
                },
                {
                    "id": "1920",
                    "markId": "86",
                    "systemId": "SUPER_SIX",
                    "name": "Super Six"
                },
                {
                    "id": "1921",
                    "markId": "86",
                    "systemId": "TIGRA",
                    "name": "Tigra"
                },
                {
                    "id": "1922",
                    "markId": "86",
                    "systemId": "VECTRA",
                    "name": "Vectra"
                },
                {
                    "id": "1923",
                    "markId": "86",
                    "systemId": "VECTRA_OPC",
                    "name": "Vectra OPC"
                },
                {
                    "id": "1924",
                    "markId": "86",
                    "systemId": "VITA",
                    "name": "Vita"
                },
                {
                    "id": "1925",
                    "markId": "86",
                    "systemId": "VIVARO",
                    "name": "Vivaro"
                },
                {
                    "id": "1926",
                    "markId": "86",
                    "systemId": "ZAFIRA",
                    "name": "Zafira"
                },
                {
                    "id": "1927",
                    "markId": "86",
                    "systemId": "ZAFIRA_LIFE",
                    "name": "Zafira Life"
                },
                {
                    "id": "1928",
                    "markId": "86",
                    "systemId": "ZAFIRA_OPC",
                    "name": "Zafira OPC"
                },
                {
                    "id": "1929",
                    "markId": "87",
                    "systemId": "G-MODELL",
                    "name": "G-modell"
                },
                {
                    "id": "1930",
                    "markId": "87",
                    "systemId": "PINZGAUER",
                    "name": "Pinzgauer"
                },
                {
                    "id": "1931",
                    "markId": "88",
                    "systemId": "200/250",
                    "name": "200/250"
                },
                {
                    "id": "1932",
                    "markId": "88",
                    "systemId": "CLIPPER",
                    "name": "Clipper"
                },
                {
                    "id": "1933",
                    "markId": "88",
                    "systemId": "CUSTOM_EIGHT",
                    "name": "Custom Eight"
                },
                {
                    "id": "1934",
                    "markId": "88",
                    "systemId": "ONE-TWENTY",
                    "name": "One-Twenty"
                },
                {
                    "id": "1935",
                    "markId": "88",
                    "systemId": "SIX",
                    "name": "Six"
                },
                {
                    "id": "1936",
                    "markId": "88",
                    "systemId": "TWELVE",
                    "name": "Twelve"
                },
                {
                    "id": "1937",
                    "markId": "89",
                    "systemId": "1007",
                    "name": "1007"
                },
                {
                    "id": "1938",
                    "markId": "89",
                    "systemId": "104",
                    "name": "104"
                },
                {
                    "id": "1939",
                    "markId": "89",
                    "systemId": "106",
                    "name": "106"
                },
                {
                    "id": "1940",
                    "markId": "89",
                    "systemId": "107",
                    "name": "107"
                },
                {
                    "id": "1941",
                    "markId": "89",
                    "systemId": "108",
                    "name": "108"
                },
                {
                    "id": "1942",
                    "markId": "89",
                    "systemId": "2008",
                    "name": "2008"
                },
                {
                    "id": "1943",
                    "markId": "89",
                    "systemId": "201",
                    "name": "201"
                },
                {
                    "id": "1944",
                    "markId": "89",
                    "systemId": "202",
                    "name": "202"
                },
                {
                    "id": "1945",
                    "markId": "89",
                    "systemId": "203",
                    "name": "203"
                },
                {
                    "id": "1946",
                    "markId": "89",
                    "systemId": "204",
                    "name": "204"
                },
                {
                    "id": "1947",
                    "markId": "89",
                    "systemId": "205",
                    "name": "205"
                },
                {
                    "id": "1948",
                    "markId": "89",
                    "systemId": "205_GTI",
                    "name": "205 Gti"
                },
                {
                    "id": "1949",
                    "markId": "89",
                    "systemId": "206",
                    "name": "206"
                },
                {
                    "id": "1950",
                    "markId": "89",
                    "systemId": "207",
                    "name": "207"
                },
                {
                    "id": "1951",
                    "markId": "89",
                    "systemId": "208",
                    "name": "208"
                },
                {
                    "id": "1952",
                    "markId": "89",
                    "systemId": "208_GTI",
                    "name": "208 Gti"
                },
                {
                    "id": "1953",
                    "markId": "89",
                    "systemId": "3008",
                    "name": "3008"
                },
                {
                    "id": "1954",
                    "markId": "89",
                    "systemId": "301",
                    "name": "301"
                },
                {
                    "id": "1955",
                    "markId": "89",
                    "systemId": "304",
                    "name": "304"
                },
                {
                    "id": "1956",
                    "markId": "89",
                    "systemId": "305",
                    "name": "305"
                },
                {
                    "id": "1957",
                    "markId": "89",
                    "systemId": "306",
                    "name": "306"
                },
                {
                    "id": "1958",
                    "markId": "89",
                    "systemId": "307",
                    "name": "307"
                },
                {
                    "id": "1959",
                    "markId": "89",
                    "systemId": "308",
                    "name": "308"
                },
                {
                    "id": "1960",
                    "markId": "89",
                    "systemId": "308_GTI",
                    "name": "308 Gti"
                },
                {
                    "id": "1961",
                    "markId": "89",
                    "systemId": "309",
                    "name": "309"
                },
                {
                    "id": "1962",
                    "markId": "89",
                    "systemId": "4007",
                    "name": "4007"
                },
                {
                    "id": "1963",
                    "markId": "89",
                    "systemId": "4008",
                    "name": "4008"
                },
                {
                    "id": "1964",
                    "markId": "89",
                    "systemId": "402",
                    "name": "402"
                },
                {
                    "id": "1965",
                    "markId": "89",
                    "systemId": "403",
                    "name": "403"
                },
                {
                    "id": "1966",
                    "markId": "89",
                    "systemId": "404",
                    "name": "404"
                },
                {
                    "id": "1967",
                    "markId": "89",
                    "systemId": "405",
                    "name": "405"
                },
                {
                    "id": "1968",
                    "markId": "89",
                    "systemId": "406",
                    "name": "406"
                },
                {
                    "id": "1969",
                    "markId": "89",
                    "systemId": "407",
                    "name": "407"
                },
                {
                    "id": "1970",
                    "markId": "89",
                    "systemId": "408",
                    "name": "408"
                },
                {
                    "id": "1971",
                    "markId": "89",
                    "systemId": "5008",
                    "name": "5008"
                },
                {
                    "id": "1972",
                    "markId": "89",
                    "systemId": "504",
                    "name": "504"
                },
                {
                    "id": "1973",
                    "markId": "89",
                    "systemId": "505",
                    "name": "505"
                },
                {
                    "id": "1974",
                    "markId": "89",
                    "systemId": "508",
                    "name": "508"
                },
                {
                    "id": "1975",
                    "markId": "89",
                    "systemId": "604",
                    "name": "604"
                },
                {
                    "id": "1976",
                    "markId": "89",
                    "systemId": "605",
                    "name": "605"
                },
                {
                    "id": "1977",
                    "markId": "89",
                    "systemId": "607",
                    "name": "607"
                },
                {
                    "id": "1978",
                    "markId": "89",
                    "systemId": "806",
                    "name": "806"
                },
                {
                    "id": "1979",
                    "markId": "89",
                    "systemId": "807",
                    "name": "807"
                },
                {
                    "id": "1980",
                    "markId": "89",
                    "systemId": "BIPPER",
                    "name": "Bipper"
                },
                {
                    "id": "1981",
                    "markId": "89",
                    "systemId": "EXPERT",
                    "name": "Expert"
                },
                {
                    "id": "1982",
                    "markId": "89",
                    "systemId": "PARTNER",
                    "name": "Partner"
                },
                {
                    "id": "1983",
                    "markId": "89",
                    "systemId": "RCZ",
                    "name": "RCZ"
                },
                {
                    "id": "1984",
                    "markId": "89",
                    "systemId": "RIFTER",
                    "name": "Rifter"
                },
                {
                    "id": "1985",
                    "markId": "89",
                    "systemId": "TRAVELLER",
                    "name": "Traveller"
                },
                {
                    "id": "1986",
                    "markId": "89",
                    "systemId": "ION",
                    "name": "iOn"
                },
                {
                    "id": "1987",
                    "markId": "90",
                    "systemId": "ACCLAIM",
                    "name": "Acclaim"
                },
                {
                    "id": "1988",
                    "markId": "90",
                    "systemId": "BARRACUDA",
                    "name": "Barracuda"
                },
                {
                    "id": "1989",
                    "markId": "90",
                    "systemId": "BREEZE",
                    "name": "Breeze"
                },
                {
                    "id": "1990",
                    "markId": "90",
                    "systemId": "CARAVELLE",
                    "name": "Caravelle"
                },
                {
                    "id": "1991",
                    "markId": "90",
                    "systemId": "FURY",
                    "name": "Fury"
                },
                {
                    "id": "1992",
                    "markId": "90",
                    "systemId": "HORIZON",
                    "name": "Horizon"
                },
                {
                    "id": "1993",
                    "markId": "90",
                    "systemId": "LASER",
                    "name": "Laser"
                },
                {
                    "id": "1994",
                    "markId": "90",
                    "systemId": "NEON",
                    "name": "Neon"
                },
                {
                    "id": "1995",
                    "markId": "90",
                    "systemId": "PROWLER",
                    "name": "Prowler"
                },
                {
                    "id": "1996",
                    "markId": "90",
                    "systemId": "RELIANT",
                    "name": "Reliant"
                },
                {
                    "id": "1997",
                    "markId": "90",
                    "systemId": "ROAD_RUNNER",
                    "name": "Road Runner"
                },
                {
                    "id": "1998",
                    "markId": "90",
                    "systemId": "SATELLITE",
                    "name": "Satellite"
                },
                {
                    "id": "1999",
                    "markId": "90",
                    "systemId": "SUNDANCE",
                    "name": "Sundance"
                },
                {
                    "id": "2000",
                    "markId": "90",
                    "systemId": "TURISMO",
                    "name": "Turismo"
                },
                {
                    "id": "2001",
                    "markId": "90",
                    "systemId": "VALIANT",
                    "name": "Valiant"
                },
                {
                    "id": "2002",
                    "markId": "90",
                    "systemId": "VOLARE",
                    "name": "Volare"
                },
                {
                    "id": "2003",
                    "markId": "90",
                    "systemId": "VOYAGER",
                    "name": "Voyager"
                },
                {
                    "id": "2004",
                    "markId": "91",
                    "systemId": "6000",
                    "name": "6000"
                },
                {
                    "id": "2005",
                    "markId": "91",
                    "systemId": "AZTEK",
                    "name": "Aztek"
                },
                {
                    "id": "2006",
                    "markId": "91",
                    "systemId": "BONNEVILLE",
                    "name": "Bonneville"
                },
                {
                    "id": "2007",
                    "markId": "91",
                    "systemId": "CATALINA",
                    "name": "Catalina"
                },
                {
                    "id": "2008",
                    "markId": "91",
                    "systemId": "FIERO",
                    "name": "Fiero"
                },
                {
                    "id": "2009",
                    "markId": "91",
                    "systemId": "FIREBIRD",
                    "name": "Firebird"
                },
                {
                    "id": "2010",
                    "markId": "91",
                    "systemId": "G4",
                    "name": "G4"
                },
                {
                    "id": "2011",
                    "markId": "91",
                    "systemId": "G5",
                    "name": "G5"
                },
                {
                    "id": "2012",
                    "markId": "91",
                    "systemId": "G6",
                    "name": "G6"
                },
                {
                    "id": "2013",
                    "markId": "91",
                    "systemId": "G8",
                    "name": "G8"
                },
                {
                    "id": "2014",
                    "markId": "91",
                    "systemId": "GTO",
                    "name": "GTO"
                },
                {
                    "id": "2015",
                    "markId": "91",
                    "systemId": "GRAND_AM",
                    "name": "Grand AM"
                },
                {
                    "id": "2016",
                    "markId": "91",
                    "systemId": "GRAND_PRIX",
                    "name": "Grand Prix"
                },
                {
                    "id": "2017",
                    "markId": "91",
                    "systemId": "LAURENTIAN",
                    "name": "Laurentian"
                },
                {
                    "id": "2018",
                    "markId": "91",
                    "systemId": "LEMANS",
                    "name": "LeMans"
                },
                {
                    "id": "2019",
                    "markId": "91",
                    "systemId": "MONTANA",
                    "name": "Montana"
                },
                {
                    "id": "2020",
                    "markId": "91",
                    "systemId": "PARISIENNE",
                    "name": "Parisienne"
                },
                {
                    "id": "2021",
                    "markId": "91",
                    "systemId": "PHOENIX",
                    "name": "Phoenix"
                },
                {
                    "id": "2022",
                    "markId": "91",
                    "systemId": "SOLSTICE",
                    "name": "Solstice"
                },
                {
                    "id": "2023",
                    "markId": "91",
                    "systemId": "SUNBIRD",
                    "name": "Sunbird"
                },
                {
                    "id": "2024",
                    "markId": "91",
                    "systemId": "SUNFIRE",
                    "name": "Sunfire"
                },
                {
                    "id": "2025",
                    "markId": "91",
                    "systemId": "TEMPEST",
                    "name": "Tempest"
                },
                {
                    "id": "2026",
                    "markId": "91",
                    "systemId": "TORPEDO",
                    "name": "Torpedo"
                },
                {
                    "id": "2027",
                    "markId": "91",
                    "systemId": "TORRENT",
                    "name": "Torrent"
                },
                {
                    "id": "2028",
                    "markId": "91",
                    "systemId": "TRANS_SPORT",
                    "name": "Trans Sport"
                },
                {
                    "id": "2029",
                    "markId": "91",
                    "systemId": "VIBE",
                    "name": "Vibe"
                },
                {
                    "id": "2030",
                    "markId": "91",
                    "systemId": "WAVE",
                    "name": "Wave"
                },
                {
                    "id": "2031",
                    "markId": "92",
                    "systemId": "356",
                    "name": "356"
                },
                {
                    "id": "2032",
                    "markId": "92",
                    "systemId": "718_SPYDER",
                    "name": "718 Spyder"
                },
                {
                    "id": "2033",
                    "markId": "92",
                    "systemId": "911",
                    "name": "911"
                },
                {
                    "id": "2034",
                    "markId": "92",
                    "systemId": "911_GT2",
                    "name": "911 GT2"
                },
                {
                    "id": "2035",
                    "markId": "92",
                    "systemId": "911_GT3",
                    "name": "911 GT3"
                },
                {
                    "id": "2036",
                    "markId": "92",
                    "systemId": "911_R",
                    "name": "911 R"
                },
                {
                    "id": "2037",
                    "markId": "92",
                    "systemId": "912",
                    "name": "912"
                },
                {
                    "id": "2038",
                    "markId": "92",
                    "systemId": "914",
                    "name": "914"
                },
                {
                    "id": "2039",
                    "markId": "92",
                    "systemId": "918_SPYDER",
                    "name": "918 Spyder"
                },
                {
                    "id": "2040",
                    "markId": "92",
                    "systemId": "924",
                    "name": "924"
                },
                {
                    "id": "2041",
                    "markId": "92",
                    "systemId": "928",
                    "name": "928"
                },
                {
                    "id": "2042",
                    "markId": "92",
                    "systemId": "944",
                    "name": "944"
                },
                {
                    "id": "2043",
                    "markId": "92",
                    "systemId": "959",
                    "name": "959"
                },
                {
                    "id": "2044",
                    "markId": "92",
                    "systemId": "968",
                    "name": "968"
                },
                {
                    "id": "2045",
                    "markId": "92",
                    "systemId": "BOXSTER",
                    "name": "Boxster"
                },
                {
                    "id": "2046",
                    "markId": "92",
                    "systemId": "CARRERA_GT",
                    "name": "Carrera GT"
                },
                {
                    "id": "2047",
                    "markId": "92",
                    "systemId": "CAYENNE",
                    "name": "Cayenne"
                },
                {
                    "id": "2048",
                    "markId": "92",
                    "systemId": "CAYENNE_COUPE",
                    "name": "Cayenne Coupe"
                },
                {
                    "id": "2049",
                    "markId": "92",
                    "systemId": "CAYMAN",
                    "name": "Cayman"
                },
                {
                    "id": "2050",
                    "markId": "92",
                    "systemId": "CAYMAN_GT4",
                    "name": "Cayman GT4"
                },
                {
                    "id": "2051",
                    "markId": "92",
                    "systemId": "MACAN",
                    "name": "Macan"
                },
                {
                    "id": "2052",
                    "markId": "92",
                    "systemId": "PANAMERA",
                    "name": "Panamera"
                },
                {
                    "id": "2053",
                    "markId": "92",
                    "systemId": "TAYCAN",
                    "name": "Taycan"
                },
                {
                    "id": "2054",
                    "markId": "93",
                    "systemId": "ARENA",
                    "name": "Arena"
                },
                {
                    "id": "2055",
                    "markId": "93",
                    "systemId": "EXORA",
                    "name": "Exora"
                },
                {
                    "id": "2056",
                    "markId": "93",
                    "systemId": "GEN-2",
                    "name": "Gen-2"
                },
                {
                    "id": "2057",
                    "markId": "93",
                    "systemId": "INSPIRA",
                    "name": "Inspira"
                },
                {
                    "id": "2058",
                    "markId": "93",
                    "systemId": "JUARA",
                    "name": "Juara"
                },
                {
                    "id": "2059",
                    "markId": "93",
                    "systemId": "PERDANA",
                    "name": "Perdana"
                },
                {
                    "id": "2060",
                    "markId": "93",
                    "systemId": "PERSONA",
                    "name": "Persona"
                },
                {
                    "id": "2061",
                    "markId": "93",
                    "systemId": "PREVE",
                    "name": "Preve"
                },
                {
                    "id": "2062",
                    "markId": "93",
                    "systemId": "PUTRA",
                    "name": "Putra"
                },
                {
                    "id": "2063",
                    "markId": "93",
                    "systemId": "SAGA",
                    "name": "Saga"
                },
                {
                    "id": "2064",
                    "markId": "93",
                    "systemId": "SATRIA",
                    "name": "Satria"
                },
                {
                    "id": "2065",
                    "markId": "93",
                    "systemId": "SAVVY",
                    "name": "Savvy"
                },
                {
                    "id": "2066",
                    "markId": "93",
                    "systemId": "TIARA",
                    "name": "Tiara"
                },
                {
                    "id": "2067",
                    "markId": "93",
                    "systemId": "WAJA",
                    "name": "Waja"
                },
                {
                    "id": "2068",
                    "markId": "93",
                    "systemId": "WIRA",
                    "name": "Wira(400 Series)"
                },
                {
                    "id": "2069",
                    "markId": "94",
                    "systemId": "GENTRA",
                    "name": "Gentra"
                },
                {
                    "id": "2070",
                    "markId": "94",
                    "systemId": "MATIZ",
                    "name": "Matiz"
                },
                {
                    "id": "2071",
                    "markId": "94",
                    "systemId": "NEXIA_R3",
                    "name": "Nexia R3"
                },
                {
                    "id": "2072",
                    "markId": "94",
                    "systemId": "R2",
                    "name": "R2"
                },
                {
                    "id": "2073",
                    "markId": "94",
                    "systemId": "R4",
                    "name": "R4"
                },
                {
                    "id": "2074",
                    "markId": "95",
                    "systemId": "10",
                    "name": "10"
                },
                {
                    "id": "2075",
                    "markId": "95",
                    "systemId": "11",
                    "name": "11"
                },
                {
                    "id": "2076",
                    "markId": "95",
                    "systemId": "12",
                    "name": "12"
                },
                {
                    "id": "2077",
                    "markId": "95",
                    "systemId": "14",
                    "name": "14"
                },
                {
                    "id": "2078",
                    "markId": "95",
                    "systemId": "15",
                    "name": "15"
                },
                {
                    "id": "2079",
                    "markId": "95",
                    "systemId": "16",
                    "name": "16"
                },
                {
                    "id": "2080",
                    "markId": "95",
                    "systemId": "17",
                    "name": "17"
                },
                {
                    "id": "2081",
                    "markId": "95",
                    "systemId": "18",
                    "name": "18"
                },
                {
                    "id": "2082",
                    "markId": "95",
                    "systemId": "19",
                    "name": "19"
                },
                {
                    "id": "2083",
                    "markId": "95",
                    "systemId": "20",
                    "name": "20"
                },
                {
                    "id": "2084",
                    "markId": "95",
                    "systemId": "21",
                    "name": "21"
                },
                {
                    "id": "2085",
                    "markId": "95",
                    "systemId": "25",
                    "name": "25"
                },
                {
                    "id": "2086",
                    "markId": "95",
                    "systemId": "30",
                    "name": "30"
                },
                {
                    "id": "2087",
                    "markId": "95",
                    "systemId": "4",
                    "name": "4"
                },
                {
                    "id": "2088",
                    "markId": "95",
                    "systemId": "4CV",
                    "name": "4CV"
                },
                {
                    "id": "2089",
                    "markId": "95",
                    "systemId": "5",
                    "name": "5"
                },
                {
                    "id": "2090",
                    "markId": "95",
                    "systemId": "6",
                    "name": "6"
                },
                {
                    "id": "2091",
                    "markId": "95",
                    "systemId": "8",
                    "name": "8"
                },
                {
                    "id": "2092",
                    "markId": "95",
                    "systemId": "9",
                    "name": "9"
                },
                {
                    "id": "2093",
                    "markId": "95",
                    "systemId": "ALASKAN",
                    "name": "Alaskan"
                },
                {
                    "id": "2094",
                    "markId": "95",
                    "systemId": "ARKANA",
                    "name": "Arkana"
                },
                {
                    "id": "2095",
                    "markId": "95",
                    "systemId": "AVANTIME",
                    "name": "Avantime"
                },
                {
                    "id": "2096",
                    "markId": "95",
                    "systemId": "CAPTUR",
                    "name": "Captur"
                },
                {
                    "id": "2097",
                    "markId": "95",
                    "systemId": "CARAVELLE",
                    "name": "Caravelle"
                },
                {
                    "id": "2098",
                    "markId": "95",
                    "systemId": "CLIO",
                    "name": "Clio"
                },
                {
                    "id": "2099",
                    "markId": "95",
                    "systemId": "CLIO_RS",
                    "name": "Clio RS"
                },
                {
                    "id": "2100",
                    "markId": "95",
                    "systemId": "CLIO_V6",
                    "name": "Clio V6"
                },
                {
                    "id": "2101",
                    "markId": "95",
                    "systemId": "DAUPHINE",
                    "name": "Dauphine"
                },
                {
                    "id": "2102",
                    "markId": "95",
                    "systemId": "DOKKER",
                    "name": "Dokker"
                },
                {
                    "id": "2103",
                    "markId": "95",
                    "systemId": "DUSTER",
                    "name": "Duster"
                },
                {
                    "id": "2104",
                    "markId": "95",
                    "systemId": "Espace",
                    "name": "Espace"
                },
                {
                    "id": "2105",
                    "markId": "95",
                    "systemId": "FLORIDE",
                    "name": "Floride"
                },
                {
                    "id": "2106",
                    "markId": "95",
                    "systemId": "FLUENCE",
                    "name": "Fluence"
                },
                {
                    "id": "2107",
                    "markId": "95",
                    "systemId": "FREGATE",
                    "name": "Fregate"
                },
                {
                    "id": "2108",
                    "markId": "95",
                    "systemId": "FUEGO",
                    "name": "Fuego"
                },
                {
                    "id": "2109",
                    "markId": "95",
                    "systemId": "KWID",
                    "name": "KWID"
                },
                {
                    "id": "2110",
                    "markId": "95",
                    "systemId": "KADJAR",
                    "name": "Kadjar"
                },
                {
                    "id": "2111",
                    "markId": "95",
                    "systemId": "KANGOO",
                    "name": "Kangoo"
                },
                {
                    "id": "2112",
                    "markId": "95",
                    "systemId": "KAPTUR",
                    "name": "Kaptur"
                },
                {
                    "id": "2113",
                    "markId": "95",
                    "systemId": "KOLEOS",
                    "name": "Koleos"
                },
                {
                    "id": "2114",
                    "markId": "95",
                    "systemId": "LAGUNA",
                    "name": "Laguna"
                },
                {
                    "id": "2115",
                    "markId": "95",
                    "systemId": "LATITUDE",
                    "name": "Latitude"
                },
                {
                    "id": "2116",
                    "markId": "95",
                    "systemId": "LODGY",
                    "name": "Lodgy"
                },
                {
                    "id": "2117",
                    "markId": "95",
                    "systemId": "LOGAN",
                    "name": "Logan"
                },
                {
                    "id": "2118",
                    "markId": "95",
                    "systemId": "MEGANE",
                    "name": "Megane"
                },
                {
                    "id": "2119",
                    "markId": "95",
                    "systemId": "MEGANE_RS",
                    "name": "Megane RS"
                },
                {
                    "id": "2120",
                    "markId": "95",
                    "systemId": "MODUS",
                    "name": "Modus"
                },
                {
                    "id": "2121",
                    "markId": "95",
                    "systemId": "RODEO",
                    "name": "Rodeo"
                },
                {
                    "id": "2122",
                    "markId": "95",
                    "systemId": "SAFRANE",
                    "name": "Safrane"
                },
                {
                    "id": "2123",
                    "markId": "95",
                    "systemId": "SANDERO",
                    "name": "Sandero"
                },
                {
                    "id": "2124",
                    "markId": "95",
                    "systemId": "SANDERO_RS",
                    "name": "Sandero RS"
                },
                {
                    "id": "2125",
                    "markId": "95",
                    "systemId": "SCENIC",
                    "name": "Scenic"
                },
                {
                    "id": "2126",
                    "markId": "95",
                    "systemId": "SPORT_SPIDER",
                    "name": "Sport Spider"
                },
                {
                    "id": "2127",
                    "markId": "95",
                    "systemId": "SYMBOL",
                    "name": "Symbol"
                },
                {
                    "id": "2128",
                    "markId": "95",
                    "systemId": "TALISMAN",
                    "name": "Talisman"
                },
                {
                    "id": "2129",
                    "markId": "95",
                    "systemId": "TRAFIC",
                    "name": "Trafic"
                },
                {
                    "id": "2130",
                    "markId": "95",
                    "systemId": "TWINGO",
                    "name": "Twingo"
                },
                {
                    "id": "2131",
                    "markId": "95",
                    "systemId": "TWIZY",
                    "name": "Twizy"
                },
                {
                    "id": "2132",
                    "markId": "95",
                    "systemId": "VEL_SATIS",
                    "name": "Vel Satis"
                },
                {
                    "id": "2133",
                    "markId": "95",
                    "systemId": "VIVASTELLA",
                    "name": "Vivastella"
                },
                {
                    "id": "2134",
                    "markId": "95",
                    "systemId": "ZOE",
                    "name": "ZOE"
                },
                {
                    "id": "2135",
                    "markId": "96",
                    "systemId": "20/25",
                    "name": "20/25"
                },
                {
                    "id": "2136",
                    "markId": "96",
                    "systemId": "CAMARGUE",
                    "name": "Camargue"
                },
                {
                    "id": "2137",
                    "markId": "96",
                    "systemId": "CORNICHE",
                    "name": "Corniche"
                },
                {
                    "id": "2138",
                    "markId": "96",
                    "systemId": "CULLINAN",
                    "name": "Cullinan"
                },
                {
                    "id": "2139",
                    "markId": "96",
                    "systemId": "DAWN",
                    "name": "Dawn"
                },
                {
                    "id": "2140",
                    "markId": "96",
                    "systemId": "GHOST",
                    "name": "Ghost"
                },
                {
                    "id": "2141",
                    "markId": "96",
                    "systemId": "PARK_WARD",
                    "name": "Park Ward"
                },
                {
                    "id": "2142",
                    "markId": "96",
                    "systemId": "PHANTOM",
                    "name": "Phantom"
                },
                {
                    "id": "2143",
                    "markId": "96",
                    "systemId": "SILVER_CLOUD",
                    "name": "Silver Cloud"
                },
                {
                    "id": "2144",
                    "markId": "96",
                    "systemId": "SILVER_GHOST",
                    "name": "Silver Ghost"
                },
                {
                    "id": "2145",
                    "markId": "96",
                    "systemId": "SILVER_SERAPH",
                    "name": "Silver Seraph"
                },
                {
                    "id": "2146",
                    "markId": "96",
                    "systemId": "SILVER_SHADOW",
                    "name": "Silver Shadow"
                },
                {
                    "id": "2147",
                    "markId": "96",
                    "systemId": "SILVER_SPIRIT",
                    "name": "Silver Spirit"
                },
                {
                    "id": "2148",
                    "markId": "96",
                    "systemId": "SILVER_SPUR",
                    "name": "Silver Spur"
                },
                {
                    "id": "2149",
                    "markId": "96",
                    "systemId": "SILVER_WRAITH",
                    "name": "Silver Wraith"
                },
                {
                    "id": "2150",
                    "markId": "96",
                    "systemId": "WRAITH",
                    "name": "Wraith"
                },
                {
                    "id": "2151",
                    "markId": "97",
                    "systemId": "100",
                    "name": "100"
                },
                {
                    "id": "2152",
                    "markId": "97",
                    "systemId": "14",
                    "name": "14"
                },
                {
                    "id": "2153",
                    "markId": "97",
                    "systemId": "200",
                    "name": "200"
                },
                {
                    "id": "2154",
                    "markId": "97",
                    "systemId": "25",
                    "name": "25"
                },
                {
                    "id": "2155",
                    "markId": "97",
                    "systemId": "400",
                    "name": "400"
                },
                {
                    "id": "2156",
                    "markId": "97",
                    "systemId": "45",
                    "name": "45"
                },
                {
                    "id": "2157",
                    "markId": "97",
                    "systemId": "600",
                    "name": "600"
                },
                {
                    "id": "2158",
                    "markId": "97",
                    "systemId": "75",
                    "name": "75"
                },
                {
                    "id": "2159",
                    "markId": "97",
                    "systemId": "800",
                    "name": "800"
                },
                {
                    "id": "2160",
                    "markId": "97",
                    "systemId": "MAESTERO",
                    "name": "Maestro"
                },
                {
                    "id": "2161",
                    "markId": "97",
                    "systemId": "METRO",
                    "name": "Metro"
                },
                {
                    "id": "2162",
                    "markId": "97",
                    "systemId": "MINI",
                    "name": "Mini"
                },
                {
                    "id": "2163",
                    "markId": "97",
                    "systemId": "P3",
                    "name": "P3"
                },
                {
                    "id": "2164",
                    "markId": "97",
                    "systemId": "P4",
                    "name": "P4"
                },
                {
                    "id": "2165",
                    "markId": "97",
                    "systemId": "P6",
                    "name": "P6"
                },
                {
                    "id": "2166",
                    "markId": "97",
                    "systemId": "SD1",
                    "name": "SD1"
                },
                {
                    "id": "2167",
                    "markId": "97",
                    "systemId": "STREETWISE",
                    "name": "Streetwise"
                },
                {
                    "id": "2168",
                    "markId": "98",
                    "systemId": "133",
                    "name": "133"
                },
                {
                    "id": "2169",
                    "markId": "98",
                    "systemId": "ALHAMBRA",
                    "name": "Alhambra"
                },
                {
                    "id": "2170",
                    "markId": "98",
                    "systemId": "ALTEA",
                    "name": "Altea"
                },
                {
                    "id": "2171",
                    "markId": "98",
                    "systemId": "ARONA",
                    "name": "Arona"
                },
                {
                    "id": "2172",
                    "markId": "98",
                    "systemId": "AROSA",
                    "name": "Arosa"
                },
                {
                    "id": "2173",
                    "markId": "98",
                    "systemId": "ATECA",
                    "name": "Ateca"
                },
                {
                    "id": "2174",
                    "markId": "98",
                    "systemId": "CORDOBA",
                    "name": "Cordoba"
                },
                {
                    "id": "2175",
                    "markId": "98",
                    "systemId": "EXEO",
                    "name": "Exeo"
                },
                {
                    "id": "2176",
                    "markId": "98",
                    "systemId": "FURA",
                    "name": "Fura"
                },
                {
                    "id": "2177",
                    "markId": "98",
                    "systemId": "IBIZA",
                    "name": "Ibiza"
                },
                {
                    "id": "2178",
                    "markId": "98",
                    "systemId": "IBIZA_CUPRA",
                    "name": "Ibiza Cupra"
                },
                {
                    "id": "2179",
                    "markId": "98",
                    "systemId": "INCA",
                    "name": "Inca"
                },
                {
                    "id": "2180",
                    "markId": "98",
                    "systemId": "LEON",
                    "name": "Leon"
                },
                {
                    "id": "2181",
                    "markId": "98",
                    "systemId": "LEON_CUPRA",
                    "name": "Leon Cupra"
                },
                {
                    "id": "2182",
                    "markId": "98",
                    "systemId": "MALAGA",
                    "name": "Malaga"
                },
                {
                    "id": "2183",
                    "markId": "98",
                    "systemId": "MARBELLA",
                    "name": "Marbella"
                },
                {
                    "id": "2184",
                    "markId": "98",
                    "systemId": "MII",
                    "name": "Mii"
                },
                {
                    "id": "2185",
                    "markId": "98",
                    "systemId": "RONDA",
                    "name": "Ronda"
                },
                {
                    "id": "2186",
                    "markId": "98",
                    "systemId": "TARRACO",
                    "name": "Tarraco"
                },
                {
                    "id": "2187",
                    "markId": "98",
                    "systemId": "TOLEDO",
                    "name": "Toledo"
                },
                {
                    "id": "2188",
                    "markId": "99",
                    "systemId": "600",
                    "name": "600"
                },
                {
                    "id": "2189",
                    "markId": "99",
                    "systemId": "9-2X",
                    "name": "9-2X"
                },
                {
                    "id": "2190",
                    "markId": "99",
                    "systemId": "9-3",
                    "name": "9-3"
                },
                {
                    "id": "2191",
                    "markId": "99",
                    "systemId": "9-4X",
                    "name": "9-4X"
                },
                {
                    "id": "2192",
                    "markId": "99",
                    "systemId": "9-5",
                    "name": "9-5"
                },
                {
                    "id": "2193",
                    "markId": "99",
                    "systemId": "9-7X",
                    "name": "9-7X"
                },
                {
                    "id": "2194",
                    "markId": "99",
                    "systemId": "90",
                    "name": "90"
                },
                {
                    "id": "2195",
                    "markId": "99",
                    "systemId": "900",
                    "name": "900"
                },
                {
                    "id": "2196",
                    "markId": "99",
                    "systemId": "9000",
                    "name": "9000"
                },
                {
                    "id": "2197",
                    "markId": "99",
                    "systemId": "93",
                    "name": "93"
                },
                {
                    "id": "2198",
                    "markId": "99",
                    "systemId": "95",
                    "name": "95"
                },
                {
                    "id": "2199",
                    "markId": "99",
                    "systemId": "96",
                    "name": "96"
                },
                {
                    "id": "2200",
                    "markId": "99",
                    "systemId": "99",
                    "name": "99"
                },
                {
                    "id": "2201",
                    "markId": "99",
                    "systemId": "SONETT",
                    "name": "Sonett"
                },
                {
                    "id": "2202",
                    "markId": "100",
                    "systemId": "S7",
                    "name": "S7"
                },
                {
                    "id": "2203",
                    "markId": "101",
                    "systemId": "ASTRA",
                    "name": "Astra"
                },
                {
                    "id": "2204",
                    "markId": "101",
                    "systemId": "AURA",
                    "name": "Aura"
                },
                {
                    "id": "2205",
                    "markId": "101",
                    "systemId": "ION",
                    "name": "ION"
                },
                {
                    "id": "2206",
                    "markId": "101",
                    "systemId": "LS",
                    "name": "LS"
                },
                {
                    "id": "2207",
                    "markId": "101",
                    "systemId": "LW",
                    "name": "LW"
                },
                {
                    "id": "2208",
                    "markId": "101",
                    "systemId": "OUTLOOK",
                    "name": "Outlook"
                },
                {
                    "id": "2209",
                    "markId": "101",
                    "systemId": "RELAY",
                    "name": "Relay"
                },
                {
                    "id": "2210",
                    "markId": "101",
                    "systemId": "SC",
                    "name": "SC"
                },
                {
                    "id": "2211",
                    "markId": "101",
                    "systemId": "SL",
                    "name": "SL"
                },
                {
                    "id": "2212",
                    "markId": "101",
                    "systemId": "SW",
                    "name": "SW"
                },
                {
                    "id": "2213",
                    "markId": "101",
                    "systemId": "SKY",
                    "name": "Sky"
                },
                {
                    "id": "2214",
                    "markId": "101",
                    "systemId": "VUE",
                    "name": "VUE"
                },
                {
                    "id": "2215",
                    "markId": "102",
                    "systemId": "FR-S",
                    "name": "FR-S"
                },
                {
                    "id": "2216",
                    "markId": "102",
                    "systemId": "IA",
                    "name": "iA"
                },
                {
                    "id": "2217",
                    "markId": "102",
                    "systemId": "IM",
                    "name": "iM"
                },
                {
                    "id": "2218",
                    "markId": "102",
                    "systemId": "IQ",
                    "name": "iQ"
                },
                {
                    "id": "2219",
                    "markId": "102",
                    "systemId": "TC",
                    "name": "tC"
                },
                {
                    "id": "2220",
                    "markId": "102",
                    "systemId": "XA",
                    "name": "xA"
                },
                {
                    "id": "2221",
                    "markId": "102",
                    "systemId": "XB",
                    "name": "xB"
                },
                {
                    "id": "2222",
                    "markId": "102",
                    "systemId": "XD",
                    "name": "xD"
                },
                {
                    "id": "2223",
                    "markId": "103",
                    "systemId": "C31",
                    "name": "C31"
                },
                {
                    "id": "2224",
                    "markId": "103",
                    "systemId": "C32",
                    "name": "C32"
                },
                {
                    "id": "2225",
                    "markId": "103",
                    "systemId": "C51",
                    "name": "C51"
                },
                {
                    "id": "2226",
                    "markId": "103",
                    "systemId": "C52",
                    "name": "C52"
                },
                {
                    "id": "2227",
                    "markId": "103",
                    "systemId": "C61",
                    "name": "C61"
                },
                {
                    "id": "2228",
                    "markId": "103",
                    "systemId": "C81",
                    "name": "C81"
                },
                {
                    "id": "2229",
                    "markId": "104",
                    "systemId": "100_SERIES",
                    "name": "100 Series"
                },
                {
                    "id": "2230",
                    "markId": "104",
                    "systemId": "105,120",
                    "name": "105,120"
                },
                {
                    "id": "2231",
                    "markId": "104",
                    "systemId": "1200",
                    "name": "1200"
                },
                {
                    "id": "2232",
                    "markId": "104",
                    "systemId": "CITIGO",
                    "name": "Citigo"
                },
                {
                    "id": "2233",
                    "markId": "104",
                    "systemId": "FABIA",
                    "name": "Fabia"
                },
                {
                    "id": "2234",
                    "markId": "104",
                    "systemId": "FABIA_RS",
                    "name": "Fabia RS"
                },
                {
                    "id": "2235",
                    "markId": "104",
                    "systemId": "FAVORIT",
                    "name": "Favorit"
                },
                {
                    "id": "2236",
                    "markId": "104",
                    "systemId": "FELICIA",
                    "name": "Felicia"
                },
                {
                    "id": "2237",
                    "markId": "104",
                    "systemId": "FORMAN",
                    "name": "Forman"
                },
                {
                    "id": "2238",
                    "markId": "104",
                    "systemId": "KAMIQ",
                    "name": "Kamiq"
                },
                {
                    "id": "2239",
                    "markId": "104",
                    "systemId": "KAROQ",
                    "name": "Karoq"
                },
                {
                    "id": "2240",
                    "markId": "104",
                    "systemId": "KODIAQ",
                    "name": "Kodiaq"
                },
                {
                    "id": "2241",
                    "markId": "104",
                    "systemId": "KODIAQ_RS",
                    "name": "Kodiaq RS"
                },
                {
                    "id": "2242",
                    "markId": "104",
                    "systemId": "OCTAVIA",
                    "name": "Octavia"
                },
                {
                    "id": "2243",
                    "markId": "104",
                    "systemId": "OCTAVIA_RS",
                    "name": "Octavia RS"
                },
                {
                    "id": "2244",
                    "markId": "104",
                    "systemId": "POPULAR",
                    "name": "Popular"
                },
                {
                    "id": "2245",
                    "markId": "104",
                    "systemId": "RAPID",
                    "name": "Rapid"
                },
                {
                    "id": "2246",
                    "markId": "104",
                    "systemId": "ROOMSTER",
                    "name": "Roomster"
                },
                {
                    "id": "2247",
                    "markId": "104",
                    "systemId": "SCALA",
                    "name": "Scala"
                },
                {
                    "id": "2248",
                    "markId": "104",
                    "systemId": "SUPERB",
                    "name": "Superb"
                },
                {
                    "id": "2249",
                    "markId": "104",
                    "systemId": "YETI",
                    "name": "Yeti"
                },
                {
                    "id": "2250",
                    "markId": "105",
                    "systemId": "FORFOUR",
                    "name": "Forfour"
                },
                {
                    "id": "2251",
                    "markId": "105",
                    "systemId": "FORTWO",
                    "name": "Fortwo"
                },
                {
                    "id": "2252",
                    "markId": "105",
                    "systemId": "ROADSTER",
                    "name": "Roadster"
                },
                {
                    "id": "2253",
                    "markId": "106",
                    "systemId": "ACTYON",
                    "name": "Actyon"
                },
                {
                    "id": "2254",
                    "markId": "106",
                    "systemId": "ACTYON_SPORTS",
                    "name": "Actyon Sports"
                },
                {
                    "id": "2255",
                    "markId": "106",
                    "systemId": "CHAIRMAN",
                    "name": "Chairman"
                },
                {
                    "id": "2256",
                    "markId": "106",
                    "systemId": "ISTANA",
                    "name": "Istana"
                },
                {
                    "id": "2257",
                    "markId": "106",
                    "systemId": "KALLISTA",
                    "name": "Kallista"
                },
                {
                    "id": "2258",
                    "markId": "106",
                    "systemId": "KORANDO",
                    "name": "Korando"
                },
                {
                    "id": "2259",
                    "markId": "106",
                    "systemId": "KORANDO_FAMILY",
                    "name": "Korando Family"
                },
                {
                    "id": "2260",
                    "markId": "106",
                    "systemId": "KORANDO_SPORTS",
                    "name": "Korando Sports"
                },
                {
                    "id": "2261",
                    "markId": "106",
                    "systemId": "KORANDO_TURISMO",
                    "name": "Korando Turismo"
                },
                {
                    "id": "2262",
                    "markId": "106",
                    "systemId": "KYRON",
                    "name": "Kyron"
                },
                {
                    "id": "2263",
                    "markId": "106",
                    "systemId": "MUSSO",
                    "name": "Musso"
                },
                {
                    "id": "2264",
                    "markId": "106",
                    "systemId": "NOMAD",
                    "name": "Nomad"
                },
                {
                    "id": "2265",
                    "markId": "106",
                    "systemId": "REXTON",
                    "name": "Rexton"
                },
                {
                    "id": "2266",
                    "markId": "106",
                    "systemId": "RODIUS",
                    "name": "Rodius"
                },
                {
                    "id": "2267",
                    "markId": "106",
                    "systemId": "STAVIC",
                    "name": "Stavic"
                },
                {
                    "id": "2268",
                    "markId": "106",
                    "systemId": "TIVOLI",
                    "name": "Tivoli"
                },
                {
                    "id": "2269",
                    "markId": "106",
                    "systemId": "XLV",
                    "name": "XLV"
                },
                {
                    "id": "2270",
                    "markId": "107",
                    "systemId": "1500",
                    "name": "1500"
                },
                {
                    "id": "2271",
                    "markId": "108",
                    "systemId": "1000",
                    "name": "1000"
                },
                {
                    "id": "2272",
                    "markId": "108",
                    "systemId": "360",
                    "name": "360"
                },
                {
                    "id": "2273",
                    "markId": "108",
                    "systemId": "ALCYONE",
                    "name": "Alcyone"
                },
                {
                    "id": "2274",
                    "markId": "108",
                    "systemId": "ASCENT",
                    "name": "Ascent"
                },
                {
                    "id": "2275",
                    "markId": "108",
                    "systemId": "BRZ",
                    "name": "BRZ"
                },
                {
                    "id": "2276",
                    "markId": "108",
                    "systemId": "BAJA",
                    "name": "Baja"
                },
                {
                    "id": "2277",
                    "markId": "108",
                    "systemId": "BIGHORN",
                    "name": "Bighorn"
                },
                {
                    "id": "2278",
                    "markId": "108",
                    "systemId": "BISTRO",
                    "name": "Bistro"
                },
                {
                    "id": "2279",
                    "markId": "108",
                    "systemId": "BRAT",
                    "name": "Brat"
                },
                {
                    "id": "2280",
                    "markId": "108",
                    "systemId": "DEX",
                    "name": "Dex"
                },
                {
                    "id": "2281",
                    "markId": "108",
                    "systemId": "DIAS_WAGON",
                    "name": "Dias Wagon"
                },
                {
                    "id": "2282",
                    "markId": "108",
                    "systemId": "DOMINGO",
                    "name": "Domingo"
                },
                {
                    "id": "2283",
                    "markId": "108",
                    "systemId": "EXIGA",
                    "name": "Exiga"
                },
                {
                    "id": "2284",
                    "markId": "108",
                    "systemId": "FORESTER",
                    "name": "Forester"
                },
                {
                    "id": "2285",
                    "markId": "108",
                    "systemId": "IMPREZA",
                    "name": "Impreza"
                },
                {
                    "id": "2286",
                    "markId": "108",
                    "systemId": "IMPREZA_WRX",
                    "name": "Impreza WRX"
                },
                {
                    "id": "2287",
                    "markId": "108",
                    "systemId": "IMPREZA_WRX_STI",
                    "name": "Impreza WRX Sti"
                },
                {
                    "id": "2288",
                    "markId": "108",
                    "systemId": "JUSTY",
                    "name": "Justy"
                },
                {
                    "id": "2289",
                    "markId": "108",
                    "systemId": "LEGACY",
                    "name": "Legacy"
                },
                {
                    "id": "2290",
                    "markId": "108",
                    "systemId": "LEGACY_LANCASTER",
                    "name": "Legacy Lancaster"
                },
                {
                    "id": "2291",
                    "markId": "108",
                    "systemId": "LEONE",
                    "name": "Leone"
                },
                {
                    "id": "2292",
                    "markId": "108",
                    "systemId": "LEVORG",
                    "name": "Levorg"
                },
                {
                    "id": "2293",
                    "markId": "108",
                    "systemId": "LIBERO",
                    "name": "Libero"
                },
                {
                    "id": "2294",
                    "markId": "108",
                    "systemId": "LUCRA",
                    "name": "Lucra"
                },
                {
                    "id": "2295",
                    "markId": "108",
                    "systemId": "OUTBACK",
                    "name": "Outback"
                },
                {
                    "id": "2296",
                    "markId": "108",
                    "systemId": "PLEO",
                    "name": "Pleo"
                },
                {
                    "id": "2297",
                    "markId": "108",
                    "systemId": "R1",
                    "name": "R1"
                },
                {
                    "id": "2298",
                    "markId": "108",
                    "systemId": "R2",
                    "name": "R2"
                },
                {
                    "id": "2299",
                    "markId": "108",
                    "systemId": "REX",
                    "name": "Rex"
                },
                {
                    "id": "2300",
                    "markId": "108",
                    "systemId": "SVX",
                    "name": "SVX"
                },
                {
                    "id": "2301",
                    "markId": "108",
                    "systemId": "SAMBAR",
                    "name": "Sambar"
                },
                {
                    "id": "2302",
                    "markId": "108",
                    "systemId": "STELLA",
                    "name": "Stella"
                },
                {
                    "id": "2303",
                    "markId": "108",
                    "systemId": "TRAVIQ",
                    "name": "Traviq"
                },
                {
                    "id": "2304",
                    "markId": "108",
                    "systemId": "TREZIA",
                    "name": "Trezia"
                },
                {
                    "id": "2305",
                    "markId": "108",
                    "systemId": "TRIBECA",
                    "name": "Tribeca"
                },
                {
                    "id": "2306",
                    "markId": "108",
                    "systemId": "VIVIO",
                    "name": "Vivio"
                },
                {
                    "id": "2307",
                    "markId": "108",
                    "systemId": "WRX",
                    "name": "WRX"
                },
                {
                    "id": "2308",
                    "markId": "108",
                    "systemId": "WRX_STI",
                    "name": "WRX Sti"
                },
                {
                    "id": "2309",
                    "markId": "108",
                    "systemId": "XT",
                    "name": "XT"
                },
                {
                    "id": "2310",
                    "markId": "108",
                    "systemId": "XV",
                    "name": "XV"
                },
                {
                    "id": "2311",
                    "markId": "109",
                    "systemId": "APV",
                    "name": "APV"
                },
                {
                    "id": "2312",
                    "markId": "109",
                    "systemId": "AERIO",
                    "name": "Aerio"
                },
                {
                    "id": "2313",
                    "markId": "109",
                    "systemId": "ALTO",
                    "name": "Alto"
                },
                {
                    "id": "2314",
                    "markId": "109",
                    "systemId": "ALTO_LAPIN",
                    "name": "Alto Lapin"
                },
                {
                    "id": "2315",
                    "markId": "109",
                    "systemId": "BALENO",
                    "name": "Baleno"
                },
                {
                    "id": "2316",
                    "markId": "109",
                    "systemId": "CAPPUCCINO",
                    "name": "Cappuccino"
                },
                {
                    "id": "2317",
                    "markId": "109",
                    "systemId": "CARA",
                    "name": "Cara"
                },
                {
                    "id": "2318",
                    "markId": "109",
                    "systemId": "CARRY",
                    "name": "Carry"
                },
                {
                    "id": "2319",
                    "markId": "109",
                    "systemId": "CELERIO",
                    "name": "Celerio"
                },
                {
                    "id": "2320",
                    "markId": "109",
                    "systemId": "CERVO",
                    "name": "Cervo"
                },
                {
                    "id": "2321",
                    "markId": "109",
                    "systemId": "CULTUS",
                    "name": "Cultus"
                },
                {
                    "id": "2322",
                    "markId": "109",
                    "systemId": "EQUATOR",
                    "name": "Equator"
                },
                {
                    "id": "2323",
                    "markId": "109",
                    "systemId": "ERTIGA",
                    "name": "Ertiga"
                },
                {
                    "id": "2324",
                    "markId": "109",
                    "systemId": "ESCUDO",
                    "name": "Escudo"
                },
                {
                    "id": "2325",
                    "markId": "109",
                    "systemId": "ESTEEM",
                    "name": "Esteem"
                },
                {
                    "id": "2326",
                    "markId": "109",
                    "systemId": "EVERY",
                    "name": "Every"
                },
                {
                    "id": "2327",
                    "markId": "109",
                    "systemId": "FORENZA",
                    "name": "Forenza"
                },
                {
                    "id": "2328",
                    "markId": "109",
                    "systemId": "GRAND_VITARA",
                    "name": "Grand Vitara"
                },
                {
                    "id": "2329",
                    "markId": "109",
                    "systemId": "HUSTLER",
                    "name": "Hustler"
                },
                {
                    "id": "2330",
                    "markId": "109",
                    "systemId": "IGNIS",
                    "name": "Ignis"
                },
                {
                    "id": "2331",
                    "markId": "109",
                    "systemId": "JIMNY",
                    "name": "Jimny"
                },
                {
                    "id": "2332",
                    "markId": "109",
                    "systemId": "KEI",
                    "name": "Kei"
                },
                {
                    "id": "2333",
                    "markId": "109",
                    "systemId": "KIZASHI",
                    "name": "Kizashi"
                },
                {
                    "id": "2334",
                    "markId": "109",
                    "systemId": "LANDY",
                    "name": "Landy"
                },
                {
                    "id": "2335",
                    "markId": "109",
                    "systemId": "LIANA",
                    "name": "Liana"
                },
                {
                    "id": "2336",
                    "markId": "109",
                    "systemId": "MR_WAGON",
                    "name": "MR Wagon"
                },
                {
                    "id": "2337",
                    "markId": "109",
                    "systemId": "PALETTE",
                    "name": "Palette"
                },
                {
                    "id": "2338",
                    "markId": "109",
                    "systemId": "RENO",
                    "name": "Reno"
                },
                {
                    "id": "2339",
                    "markId": "109",
                    "systemId": "SX4",
                    "name": "SX4"
                },
                {
                    "id": "2340",
                    "markId": "109",
                    "systemId": "SAMURAI",
                    "name": "Samurai"
                },
                {
                    "id": "2341",
                    "markId": "109",
                    "systemId": "SIDEKICK",
                    "name": "Sidekick"
                },
                {
                    "id": "2342",
                    "markId": "109",
                    "systemId": "SOLIO",
                    "name": "Solio"
                },
                {
                    "id": "2343",
                    "markId": "109",
                    "systemId": "SPACIA",
                    "name": "Spacia"
                },
                {
                    "id": "2344",
                    "markId": "109",
                    "systemId": "SPLASH",
                    "name": "Splash"
                },
                {
                    "id": "2345",
                    "markId": "109",
                    "systemId": "SWIFT",
                    "name": "Swift"
                },
                {
                    "id": "2346",
                    "markId": "109",
                    "systemId": "TWIN",
                    "name": "Twin"
                },
                {
                    "id": "2347",
                    "markId": "109",
                    "systemId": "VERONA",
                    "name": "Verona"
                },
                {
                    "id": "2348",
                    "markId": "109",
                    "systemId": "VITARA",
                    "name": "Vitara"
                },
                {
                    "id": "2349",
                    "markId": "109",
                    "systemId": "WAGON_R",
                    "name": "Wagon R"
                },
                {
                    "id": "2350",
                    "markId": "109",
                    "systemId": "WAGON_R+",
                    "name": "Wagon R+"
                },
                {
                    "id": "2351",
                    "markId": "109",
                    "systemId": "X-90",
                    "name": "X-90"
                },
                {
                    "id": "2352",
                    "markId": "109",
                    "systemId": "XL7",
                    "name": "XL7"
                },
                {
                    "id": "2353",
                    "markId": "109",
                    "systemId": "XBEE",
                    "name": "Xbee"
                },
                {
                    "id": "2354",
                    "markId": "110",
                    "systemId": "57",
                    "name": "57"
                },
                {
                    "id": "2355",
                    "markId": "110",
                    "systemId": "77",
                    "name": "77"
                },
                {
                    "id": "2356",
                    "markId": "110",
                    "systemId": "80",
                    "name": "80"
                },
                {
                    "id": "2357",
                    "markId": "110",
                    "systemId": "87",
                    "name": "87"
                },
                {
                    "id": "2358",
                    "markId": "110",
                    "systemId": "T603",
                    "name": "T603"
                },
                {
                    "id": "2359",
                    "markId": "110",
                    "systemId": "T613",
                    "name": "T613"
                },
                {
                    "id": "2360",
                    "markId": "110",
                    "systemId": "T700",
                    "name": "T700"
                },
                {
                    "id": "2361",
                    "markId": "111",
                    "systemId": "CYBERTRUCK",
                    "name": "Cybertruck"
                },
                {
                    "id": "2362",
                    "markId": "111",
                    "systemId": "MODEL_3",
                    "name": "Model 3"
                },
                {
                    "id": "2363",
                    "markId": "111",
                    "systemId": "MODEL_S",
                    "name": "Model S"
                },
                {
                    "id": "2364",
                    "markId": "111",
                    "systemId": "MODEL_X",
                    "name": "Model X"
                },
                {
                    "id": "2365",
                    "markId": "111",
                    "systemId": "MODEL_Y",
                    "name": "Model Y"
                },
                {
                    "id": "2366",
                    "markId": "111",
                    "systemId": "ROADSTER",
                    "name": "Roadster"
                },
                {
                    "id": "2367",
                    "markId": "112",
                    "systemId": "CENTURY",
                    "name": "Century"
                },
                {
                    "id": "2368",
                    "markId": "113",
                    "systemId": "ADMIRAL",
                    "name": "Admiral"
                },
                {
                    "id": "2369",
                    "markId": "114",
                    "systemId": "2000GT",
                    "name": "2000GT"
                },
                {
                    "id": "2370",
                    "markId": "114",
                    "systemId": "4RUNNER",
                    "name": "4Runner"
                },
                {
                    "id": "2371",
                    "markId": "114",
                    "systemId": "ALLEX",
                    "name": "Allex"
                },
                {
                    "id": "2372",
                    "markId": "114",
                    "systemId": "ALLION",
                    "name": "Allion"
                },
                {
                    "id": "2373",
                    "markId": "114",
                    "systemId": "ALPHARD",
                    "name": "Alphard"
                },
                {
                    "id": "2374",
                    "markId": "114",
                    "systemId": "ALTEZZA",
                    "name": "Altezza"
                },
                {
                    "id": "2375",
                    "markId": "114",
                    "systemId": "AQUA",
                    "name": "Aqua"
                },
                {
                    "id": "2376",
                    "markId": "114",
                    "systemId": "ARISTO",
                    "name": "Aristo"
                },
                {
                    "id": "2377",
                    "markId": "114",
                    "systemId": "AURION",
                    "name": "Aurion"
                },
                {
                    "id": "2378",
                    "markId": "114",
                    "systemId": "AURIS",
                    "name": "Auris"
                },
                {
                    "id": "2379",
                    "markId": "114",
                    "systemId": "AVALON",
                    "name": "Avalon"
                },
                {
                    "id": "2380",
                    "markId": "114",
                    "systemId": "AVANZA",
                    "name": "Avanza"
                },
                {
                    "id": "2381",
                    "markId": "114",
                    "systemId": "AVENSIS",
                    "name": "Avensis"
                },
                {
                    "id": "2382",
                    "markId": "114",
                    "systemId": "AVENSIS_VERSO",
                    "name": "Avensis Verso"
                },
                {
                    "id": "2383",
                    "markId": "114",
                    "systemId": "AYGO",
                    "name": "Aygo"
                },
                {
                    "id": "2384",
                    "markId": "114",
                    "systemId": "BELTA",
                    "name": "Belta"
                },
                {
                    "id": "2385",
                    "markId": "114",
                    "systemId": "BLADE",
                    "name": "Blade"
                },
                {
                    "id": "2386",
                    "markId": "114",
                    "systemId": "BLIZZARD",
                    "name": "Blizzard"
                },
                {
                    "id": "2387",
                    "markId": "114",
                    "systemId": "BREVIS",
                    "name": "Brevis"
                },
                {
                    "id": "2388",
                    "markId": "114",
                    "systemId": "C-HR",
                    "name": "C-HR"
                },
                {
                    "id": "2389",
                    "markId": "114",
                    "systemId": "COMS",
                    "name": "COMS"
                },
                {
                    "id": "2390",
                    "markId": "114",
                    "systemId": "CALDINA",
                    "name": "Caldina"
                },
                {
                    "id": "2391",
                    "markId": "114",
                    "systemId": "CAMI",
                    "name": "Cami"
                },
                {
                    "id": "2392",
                    "markId": "114",
                    "systemId": "CAMRY",
                    "name": "Camry"
                },
                {
                    "id": "2393",
                    "markId": "114",
                    "systemId": "CAMRY_SOLARA",
                    "name": "Camry Solara"
                },
                {
                    "id": "2394",
                    "markId": "114",
                    "systemId": "CARINA",
                    "name": "Carina"
                },
                {
                    "id": "2395",
                    "markId": "114",
                    "systemId": "CARINA_E",
                    "name": "Carina E"
                },
                {
                    "id": "2396",
                    "markId": "114",
                    "systemId": "CARINA_ED",
                    "name": "Carina ED"
                },
                {
                    "id": "2397",
                    "markId": "114",
                    "systemId": "CAVALIER",
                    "name": "Cavalier"
                },
                {
                    "id": "2398",
                    "markId": "114",
                    "systemId": "CELICA",
                    "name": "Celica"
                },
                {
                    "id": "2399",
                    "markId": "114",
                    "systemId": "CELSIOR",
                    "name": "Celsior"
                },
                {
                    "id": "2400",
                    "markId": "114",
                    "systemId": "CENTURY",
                    "name": "Century"
                },
                {
                    "id": "2401",
                    "markId": "114",
                    "systemId": "CHASER",
                    "name": "Chaser"
                },
                {
                    "id": "2402",
                    "markId": "114",
                    "systemId": "CLASSIC",
                    "name": "Classic"
                },
                {
                    "id": "2403",
                    "markId": "114",
                    "systemId": "COMFORT",
                    "name": "Comfort"
                },
                {
                    "id": "2404",
                    "markId": "114",
                    "systemId": "COROLLA",
                    "name": "Corolla"
                },
                {
                    "id": "2405",
                    "markId": "114",
                    "systemId": "COROLLA_II",
                    "name": "Corolla II"
                },
                {
                    "id": "2406",
                    "markId": "114",
                    "systemId": "COROLLA_LEVIN",
                    "name": "Corolla Levin"
                },
                {
                    "id": "2407",
                    "markId": "114",
                    "systemId": "COROLLA_RUMION",
                    "name": "Corolla Rumion"
                },
                {
                    "id": "2408",
                    "markId": "114",
                    "systemId": "COROLLA_SPACIO",
                    "name": "Corolla Spacio"
                },
                {
                    "id": "2409",
                    "markId": "114",
                    "systemId": "COROLLA_VERSO",
                    "name": "Corolla Verso"
                },
                {
                    "id": "2410",
                    "markId": "114",
                    "systemId": "CORONA",
                    "name": "Corona"
                },
                {
                    "id": "2411",
                    "markId": "114",
                    "systemId": "CORONA_EXIV",
                    "name": "Corona EXiV"
                },
                {
                    "id": "2412",
                    "markId": "114",
                    "systemId": "CORSA",
                    "name": "Corsa"
                },
                {
                    "id": "2413",
                    "markId": "114",
                    "systemId": "CRESSIDA",
                    "name": "Cressida"
                },
                {
                    "id": "2414",
                    "markId": "114",
                    "systemId": "CRESTA",
                    "name": "Cresta"
                },
                {
                    "id": "2415",
                    "markId": "114",
                    "systemId": "CROWN",
                    "name": "Crown"
                },
                {
                    "id": "2416",
                    "markId": "114",
                    "systemId": "CROWN_MAJESTA",
                    "name": "Crown Majesta"
                },
                {
                    "id": "2417",
                    "markId": "114",
                    "systemId": "CURREN",
                    "name": "Curren"
                },
                {
                    "id": "2418",
                    "markId": "114",
                    "systemId": "CYNOS",
                    "name": "Cynos"
                },
                {
                    "id": "2419",
                    "markId": "114",
                    "systemId": "DUET",
                    "name": "Duet"
                },
                {
                    "id": "2420",
                    "markId": "114",
                    "systemId": "ECHO",
                    "name": "Echo"
                },
                {
                    "id": "2421",
                    "markId": "114",
                    "systemId": "ESQUIRE",
                    "name": "Esquire"
                },
                {
                    "id": "2422",
                    "markId": "114",
                    "systemId": "ESTIMA",
                    "name": "Estima"
                },
                {
                    "id": "2423",
                    "markId": "114",
                    "systemId": "ETIOS",
                    "name": "Etios"
                },
                {
                    "id": "2424",
                    "markId": "114",
                    "systemId": "FJ_CRUISER",
                    "name": "FJ Cruiser"
                },
                {
                    "id": "2425",
                    "markId": "114",
                    "systemId": "FORTUNER",
                    "name": "Fortuner"
                },
                {
                    "id": "2426",
                    "markId": "114",
                    "systemId": "FUNCARGO",
                    "name": "FunCargo"
                },
                {
                    "id": "2427",
                    "markId": "114",
                    "systemId": "GT86",
                    "name": "GT86"
                },
                {
                    "id": "2428",
                    "markId": "114",
                    "systemId": "GAIA",
                    "name": "Gaia"
                },
                {
                    "id": "2429",
                    "markId": "114",
                    "systemId": "GRAND_HIACE",
                    "name": "Grand HiAce"
                },
                {
                    "id": "2430",
                    "markId": "114",
                    "systemId": "GRANVIA",
                    "name": "Granvia"
                },
                {
                    "id": "2431",
                    "markId": "114",
                    "systemId": "HARRIER",
                    "name": "Harrier"
                },
                {
                    "id": "2432",
                    "markId": "114",
                    "systemId": "HIACE",
                    "name": "HiAce"
                },
                {
                    "id": "2433",
                    "markId": "114",
                    "systemId": "HIGHLANDER",
                    "name": "Highlander"
                },
                {
                    "id": "2434",
                    "markId": "114",
                    "systemId": "HILUX",
                    "name": "Hilux"
                },
                {
                    "id": "2435",
                    "markId": "114",
                    "systemId": "HILUX_SURF",
                    "name": "Hilux Surf"
                },
                {
                    "id": "2436",
                    "markId": "114",
                    "systemId": "ISIS",
                    "name": "Isis"
                },
                {
                    "id": "2437",
                    "markId": "114",
                    "systemId": "INNOVA",
                    "name": "Innova"
                },
                {
                    "id": "2438",
                    "markId": "114",
                    "systemId": "IPSUM",
                    "name": "Ipsum"
                },
                {
                    "id": "2439",
                    "markId": "114",
                    "systemId": "IST",
                    "name": "Ist"
                },
                {
                    "id": "2440",
                    "markId": "114",
                    "systemId": "KLUGER",
                    "name": "Kluger"
                },
                {
                    "id": "2441",
                    "markId": "114",
                    "systemId": "LAND_CRUISER",
                    "name": "Land Cruiser"
                },
                {
                    "id": "2442",
                    "markId": "114",
                    "systemId": "LAND_CRUISER_PRADO",
                    "name": "Land Cruiser Prado"
                },
                {
                    "id": "2443",
                    "markId": "114",
                    "systemId": "LITE_ACE",
                    "name": "Lite Ace"
                },
                {
                    "id": "2444",
                    "markId": "114",
                    "systemId": "MR-S",
                    "name": "MR-S"
                },
                {
                    "id": "2445",
                    "markId": "114",
                    "systemId": "MR2",
                    "name": "MR2"
                },
                {
                    "id": "2446",
                    "markId": "114",
                    "systemId": "MARK_II",
                    "name": "Mark II"
                },
                {
                    "id": "2447",
                    "markId": "114",
                    "systemId": "MARK_X",
                    "name": "Mark X"
                },
                {
                    "id": "2448",
                    "markId": "114",
                    "systemId": "MARK_X_ZIO",
                    "name": "Mark X ZiO"
                },
                {
                    "id": "2449",
                    "markId": "114",
                    "systemId": "MASTERACE_SURF",
                    "name": "MasterAce Surf"
                },
                {
                    "id": "2450",
                    "markId": "114",
                    "systemId": "MATRIX",
                    "name": "Matrix"
                },
                {
                    "id": "2451",
                    "markId": "114",
                    "systemId": "MEGA_CRUISER",
                    "name": "Mega Cruiser"
                },
                {
                    "id": "2452",
                    "markId": "114",
                    "systemId": "MIRAI",
                    "name": "Mirai"
                },
                {
                    "id": "2453",
                    "markId": "114",
                    "systemId": "MODEL_F",
                    "name": "Model F"
                },
                {
                    "id": "2454",
                    "markId": "114",
                    "systemId": "NADIA",
                    "name": "Nadia"
                },
                {
                    "id": "2455",
                    "markId": "114",
                    "systemId": "NOAH",
                    "name": "Noah"
                },
                {
                    "id": "2456",
                    "markId": "114",
                    "systemId": "OPA",
                    "name": "Opa"
                },
                {
                    "id": "2457",
                    "markId": "114",
                    "systemId": "ORIGIN",
                    "name": "Origin"
                },
                {
                    "id": "2458",
                    "markId": "114",
                    "systemId": "PASEO",
                    "name": "Paseo"
                },
                {
                    "id": "2459",
                    "markId": "114",
                    "systemId": "PASSO",
                    "name": "Passo"
                },
                {
                    "id": "2460",
                    "markId": "114",
                    "systemId": "PASSO_SETTE",
                    "name": "Passo Sette"
                },
                {
                    "id": "2461",
                    "markId": "114",
                    "systemId": "PICNIC",
                    "name": "Picnic"
                },
                {
                    "id": "2462",
                    "markId": "114",
                    "systemId": "PIXIS_EPOCH",
                    "name": "Pixis Epoch"
                },
                {
                    "id": "2463",
                    "markId": "114",
                    "systemId": "PIXIS_JOY",
                    "name": "Pixis Joy"
                },
                {
                    "id": "2464",
                    "markId": "114",
                    "systemId": "PIXIS_MEGA",
                    "name": "Pixis Mega"
                },
                {
                    "id": "2465",
                    "markId": "114",
                    "systemId": "PIXIS_SPACE",
                    "name": "Pixis Space"
                },
                {
                    "id": "2466",
                    "markId": "114",
                    "systemId": "PIXIS_VAN",
                    "name": "Pixis Van"
                },
                {
                    "id": "2467",
                    "markId": "114",
                    "systemId": "PLATZ",
                    "name": "Platz"
                },
                {
                    "id": "2468",
                    "markId": "114",
                    "systemId": "PORTE",
                    "name": "Porte"
                },
                {
                    "id": "2469",
                    "markId": "114",
                    "systemId": "PREMIO",
                    "name": "Premio"
                },
                {
                    "id": "2470",
                    "markId": "114",
                    "systemId": "PREVIA",
                    "name": "Previa"
                },
                {
                    "id": "2471",
                    "markId": "114",
                    "systemId": "PRIUS",
                    "name": "Prius"
                },
                {
                    "id": "2472",
                    "markId": "114",
                    "systemId": "PRIUS_ALPHA",
                    "name": "Prius Alpha"
                },
                {
                    "id": "2473",
                    "markId": "114",
                    "systemId": "PRIUS_C",
                    "name": "Prius C"
                },
                {
                    "id": "2474",
                    "markId": "114",
                    "systemId": "PRIUS_V(+)",
                    "name": "Prius v(+)"
                },
                {
                    "id": "2475",
                    "markId": "114",
                    "systemId": "PROACE",
                    "name": "ProAce"
                },
                {
                    "id": "2476",
                    "markId": "114",
                    "systemId": "PROBOX",
                    "name": "Probox"
                },
                {
                    "id": "2477",
                    "markId": "114",
                    "systemId": "PROGRES",
                    "name": "Progres"
                },
                {
                    "id": "2478",
                    "markId": "114",
                    "systemId": "PRONARD",
                    "name": "Pronard"
                },
                {
                    "id": "2479",
                    "markId": "114",
                    "systemId": "PUBLICA",
                    "name": "Publica"
                },
                {
                    "id": "2480",
                    "markId": "114",
                    "systemId": "RAV4",
                    "name": "RAV4"
                },
                {
                    "id": "2481",
                    "markId": "114",
                    "systemId": "RACTIS",
                    "name": "Ractis"
                },
                {
                    "id": "2482",
                    "markId": "114",
                    "systemId": "RAIZE",
                    "name": "Raize"
                },
                {
                    "id": "2483",
                    "markId": "114",
                    "systemId": "RAUM",
                    "name": "Raum"
                },
                {
                    "id": "2484",
                    "markId": "114",
                    "systemId": "REGIUS",
                    "name": "Regius"
                },
                {
                    "id": "2485",
                    "markId": "114",
                    "systemId": "REGIUSACE",
                    "name": "RegiusAce"
                },
                {
                    "id": "2486",
                    "markId": "114",
                    "systemId": "ROOMY",
                    "name": "Roomy"
                },
                {
                    "id": "2487",
                    "markId": "114",
                    "systemId": "RUSH",
                    "name": "Rush"
                },
                {
                    "id": "2488",
                    "markId": "114",
                    "systemId": "SAI",
                    "name": "Sai"
                },
                {
                    "id": "2489",
                    "markId": "114",
                    "systemId": "SCEPTER",
                    "name": "Scepter"
                },
                {
                    "id": "2490",
                    "markId": "114",
                    "systemId": "SEQUOIA",
                    "name": "Sequoia"
                },
                {
                    "id": "2491",
                    "markId": "114",
                    "systemId": "SERA",
                    "name": "Sera"
                },
                {
                    "id": "2492",
                    "markId": "114",
                    "systemId": "SIENNA",
                    "name": "Sienna"
                },
                {
                    "id": "2493",
                    "markId": "114",
                    "systemId": "SIENTA",
                    "name": "Sienta"
                },
                {
                    "id": "2494",
                    "markId": "114",
                    "systemId": "SOARER",
                    "name": "Soarer"
                },
                {
                    "id": "2495",
                    "markId": "114",
                    "systemId": "SOLUNA",
                    "name": "Soluna"
                },
                {
                    "id": "2496",
                    "markId": "114",
                    "systemId": "SPADE",
                    "name": "Spade"
                },
                {
                    "id": "2497",
                    "markId": "114",
                    "systemId": "SPARKY",
                    "name": "Sparky"
                },
                {
                    "id": "2498",
                    "markId": "114",
                    "systemId": "SPORTS_800",
                    "name": "Sports 800"
                },
                {
                    "id": "2499",
                    "markId": "114",
                    "systemId": "SPRINTER",
                    "name": "Sprinter"
                },
                {
                    "id": "2500",
                    "markId": "114",
                    "systemId": "SPRINTER_CARIB",
                    "name": "Sprinter Carib"
                },
                {
                    "id": "2501",
                    "markId": "114",
                    "systemId": "SPRINTER_MARINO",
                    "name": "Sprinter Marino"
                },
                {
                    "id": "2502",
                    "markId": "114",
                    "systemId": "SPRINTER_TRUENO",
                    "name": "Sprinter Trueno"
                },
                {
                    "id": "2503",
                    "markId": "114",
                    "systemId": "STARLET",
                    "name": "Starlet"
                },
                {
                    "id": "2504",
                    "markId": "114",
                    "systemId": "SUCCEED",
                    "name": "Succeed"
                },
                {
                    "id": "2505",
                    "markId": "114",
                    "systemId": "Supra",
                    "name": "Supra"
                },
                {
                    "id": "2506",
                    "markId": "114",
                    "systemId": "TACOMA",
                    "name": "Tacoma"
                },
                {
                    "id": "2507",
                    "markId": "114",
                    "systemId": "TANK",
                    "name": "Tank"
                },
                {
                    "id": "2508",
                    "markId": "114",
                    "systemId": "TERCEL",
                    "name": "Tercel"
                },
                {
                    "id": "2509",
                    "markId": "114",
                    "systemId": "TOURING_HIACE",
                    "name": "Touring HiAce"
                },
                {
                    "id": "2510",
                    "markId": "114",
                    "systemId": "TOWN_ACE",
                    "name": "Town Ace"
                },
                {
                    "id": "2511",
                    "markId": "114",
                    "systemId": "TUNDRA",
                    "name": "Tundra"
                },
                {
                    "id": "2512",
                    "markId": "114",
                    "systemId": "URBAN_CRUISER",
                    "name": "Urban Cruiser"
                },
                {
                    "id": "2513",
                    "markId": "114",
                    "systemId": "VANGUARD",
                    "name": "Vanguard"
                },
                {
                    "id": "2514",
                    "markId": "114",
                    "systemId": "VELLFIRE",
                    "name": "Vellfire"
                },
                {
                    "id": "2515",
                    "markId": "114",
                    "systemId": "VENZA",
                    "name": "Venza"
                },
                {
                    "id": "2516",
                    "markId": "114",
                    "systemId": "VEROSSA",
                    "name": "Verossa"
                },
                {
                    "id": "2517",
                    "markId": "114",
                    "systemId": "VERSO",
                    "name": "Verso"
                },
                {
                    "id": "2518",
                    "markId": "114",
                    "systemId": "VERSO-S",
                    "name": "Verso-S"
                },
                {
                    "id": "2519",
                    "markId": "114",
                    "systemId": "VIOS",
                    "name": "Vios"
                },
                {
                    "id": "2520",
                    "markId": "114",
                    "systemId": "VISTA",
                    "name": "Vista"
                },
                {
                    "id": "2521",
                    "markId": "114",
                    "systemId": "VITZ",
                    "name": "Vitz"
                },
                {
                    "id": "2522",
                    "markId": "114",
                    "systemId": "VOLTZ",
                    "name": "Voltz"
                },
                {
                    "id": "2523",
                    "markId": "114",
                    "systemId": "VOXY",
                    "name": "Voxy"
                },
                {
                    "id": "2524",
                    "markId": "114",
                    "systemId": "WILL",
                    "name": "WiLL"
                },
                {
                    "id": "2525",
                    "markId": "114",
                    "systemId": "WILL_CYPHA",
                    "name": "WiLL Cypha"
                },
                {
                    "id": "2526",
                    "markId": "114",
                    "systemId": "WINDOM",
                    "name": "Windom"
                },
                {
                    "id": "2527",
                    "markId": "114",
                    "systemId": "WISH",
                    "name": "Wish"
                },
                {
                    "id": "2528",
                    "markId": "114",
                    "systemId": "YARIS",
                    "name": "Yaris"
                },
                {
                    "id": "2529",
                    "markId": "114",
                    "systemId": "YARIS_VERSO",
                    "name": "Yaris Verso"
                },
                {
                    "id": "2530",
                    "markId": "114",
                    "systemId": "BB",
                    "name": "bB"
                },
                {
                    "id": "2531",
                    "markId": "114",
                    "systemId": "IQ",
                    "name": "iQ"
                },
                {
                    "id": "2532",
                    "markId": "115",
                    "systemId": "ACCLAIM",
                    "name": "Acclaim"
                },
                {
                    "id": "2533",
                    "markId": "115",
                    "systemId": "SPITFIRE",
                    "name": "Spitfire"
                },
                {
                    "id": "2534",
                    "markId": "115",
                    "systemId": "STAG",
                    "name": "Stag"
                },
                {
                    "id": "2535",
                    "markId": "115",
                    "systemId": "TR4",
                    "name": "TR4"
                },
                {
                    "id": "2536",
                    "markId": "115",
                    "systemId": "TR6",
                    "name": "TR6"
                },
                {
                    "id": "2537",
                    "markId": "115",
                    "systemId": "TR7",
                    "name": "TR7"
                },
                {
                    "id": "2538",
                    "markId": "115",
                    "systemId": "TR8",
                    "name": "TR8"
                },
                {
                    "id": "2539",
                    "markId": "116",
                    "systemId": "181",
                    "name": "181"
                },
                {
                    "id": "2540",
                    "markId": "116",
                    "systemId": "AMAROK",
                    "name": "Amarok"
                },
                {
                    "id": "2541",
                    "markId": "116",
                    "systemId": "ARTEON",
                    "name": "Arteon"
                },
                {
                    "id": "2542",
                    "markId": "116",
                    "systemId": "ATLAS",
                    "name": "Atlas"
                },
                {
                    "id": "2543",
                    "markId": "116",
                    "systemId": "BEETLE",
                    "name": "Beetle"
                },
                {
                    "id": "2544",
                    "markId": "116",
                    "systemId": "BORA",
                    "name": "Bora"
                },
                {
                    "id": "2545",
                    "markId": "116",
                    "systemId": "CADDY",
                    "name": "Caddy"
                },
                {
                    "id": "2546",
                    "markId": "116",
                    "systemId": "CALIFORNIA",
                    "name": "California"
                },
                {
                    "id": "2547",
                    "markId": "116",
                    "systemId": "CARAVELLE",
                    "name": "Caravelle"
                },
                {
                    "id": "2548",
                    "markId": "116",
                    "systemId": "CORRADO",
                    "name": "Corrado"
                },
                {
                    "id": "2549",
                    "markId": "116",
                    "systemId": "DERBY",
                    "name": "Derby"
                },
                {
                    "id": "2550",
                    "markId": "116",
                    "systemId": "EOS",
                    "name": "Eos"
                },
                {
                    "id": "2551",
                    "markId": "116",
                    "systemId": "EUROVAN",
                    "name": "EuroVan"
                },
                {
                    "id": "2552",
                    "markId": "116",
                    "systemId": "FOX",
                    "name": "Fox"
                },
                {
                    "id": "2553",
                    "markId": "116",
                    "systemId": "GOL",
                    "name": "Gol"
                },
                {
                    "id": "2554",
                    "markId": "116",
                    "systemId": "GOLF",
                    "name": "Golf"
                },
                {
                    "id": "2555",
                    "markId": "116",
                    "systemId": "GOLF_COUNTRY",
                    "name": "Golf Country"
                },
                {
                    "id": "2556",
                    "markId": "116",
                    "systemId": "GOLF_GTI",
                    "name": "Golf GTI"
                },
                {
                    "id": "2557",
                    "markId": "116",
                    "systemId": "GOLF_PLUS",
                    "name": "Golf Plus"
                },
                {
                    "id": "2558",
                    "markId": "116",
                    "systemId": "GOLF_R",
                    "name": "Golf R"
                },
                {
                    "id": "2559",
                    "markId": "116",
                    "systemId": "GOLF_R32",
                    "name": "Golf R32"
                },
                {
                    "id": "2560",
                    "markId": "116",
                    "systemId": "GOLF_SPORTSVAN",
                    "name": "Golf Sportsvan"
                },
                {
                    "id": "2561",
                    "markId": "116",
                    "systemId": "ID.3",
                    "name": "ID.3"
                },
                {
                    "id": "2562",
                    "markId": "116",
                    "systemId": "ILLTIS",
                    "name": "Illtis"
                },
                {
                    "id": "2563",
                    "markId": "116",
                    "systemId": "JETTA",
                    "name": "Jetta"
                },
                {
                    "id": "2564",
                    "markId": "116",
                    "systemId": "K70",
                    "name": "K70"
                },
                {
                    "id": "2565",
                    "markId": "116",
                    "systemId": "KARMANN_GHIA",
                    "name": "Karmann-Ghia"
                },
                {
                    "id": "2566",
                    "markId": "116",
                    "systemId": "LUPO",
                    "name": "Lupo"
                },
                {
                    "id": "2567",
                    "markId": "116",
                    "systemId": "LUPO_GTI",
                    "name": "Lupo GTI"
                },
                {
                    "id": "2568",
                    "markId": "116",
                    "systemId": "MULTIVAN",
                    "name": "Multivan"
                },
                {
                    "id": "2569",
                    "markId": "116",
                    "systemId": "PARATI",
                    "name": "Parati"
                },
                {
                    "id": "2570",
                    "markId": "116",
                    "systemId": "PASSAT",
                    "name": "Passat"
                },
                {
                    "id": "2571",
                    "markId": "116",
                    "systemId": "PASSAT_CC",
                    "name": "Passat CC"
                },
                {
                    "id": "2572",
                    "markId": "116",
                    "systemId": "PHAETON",
                    "name": "Phaeton"
                },
                {
                    "id": "2573",
                    "markId": "116",
                    "systemId": "POINTER",
                    "name": "Pointer"
                },
                {
                    "id": "2574",
                    "markId": "116",
                    "systemId": "POLO",
                    "name": "Polo"
                },
                {
                    "id": "2575",
                    "markId": "116",
                    "systemId": "POLO_GTI",
                    "name": "Polo GTI"
                },
                {
                    "id": "2576",
                    "markId": "116",
                    "systemId": "POLO_R_WRC",
                    "name": "Polo R WRC"
                },
                {
                    "id": "2577",
                    "markId": "116",
                    "systemId": "QUANTUM",
                    "name": "Quantum"
                },
                {
                    "id": "2578",
                    "markId": "116",
                    "systemId": "ROUTAN",
                    "name": "Routan"
                },
                {
                    "id": "2579",
                    "markId": "116",
                    "systemId": "SANTANA",
                    "name": "Santana"
                },
                {
                    "id": "2580",
                    "markId": "116",
                    "systemId": "SCIROCCO",
                    "name": "Scirocco"
                },
                {
                    "id": "2581",
                    "markId": "116",
                    "systemId": "SCIROCCO_R",
                    "name": "Scirocco R"
                },
                {
                    "id": "2582",
                    "markId": "116",
                    "systemId": "SHARAN",
                    "name": "Sharan"
                },
                {
                    "id": "2583",
                    "markId": "116",
                    "systemId": "T-CROSS",
                    "name": "T-Cross"
                },
                {
                    "id": "2584",
                    "markId": "116",
                    "systemId": "T-ROC",
                    "name": "T-Roc"
                },
                {
                    "id": "2585",
                    "markId": "116",
                    "systemId": "T-ROC_R",
                    "name": "T-Roc R"
                },
                {
                    "id": "2586",
                    "markId": "116",
                    "systemId": "TARO",
                    "name": "Taro"
                },
                {
                    "id": "2587",
                    "markId": "116",
                    "systemId": "TERAMONT",
                    "name": "Teramont"
                },
                {
                    "id": "2588",
                    "markId": "116",
                    "systemId": "TIGUAN",
                    "name": "Tiguan"
                },
                {
                    "id": "2589",
                    "markId": "116",
                    "systemId": "TOUAREG",
                    "name": "Touareg"
                },
                {
                    "id": "2590",
                    "markId": "116",
                    "systemId": "TOURAN",
                    "name": "Touran"
                },
                {
                    "id": "2591",
                    "markId": "116",
                    "systemId": "TRANSPORTER",
                    "name": "Transporter"
                },
                {
                    "id": "2592",
                    "markId": "116",
                    "systemId": "TYPE_1",
                    "name": "Type 1"
                },
                {
                    "id": "2593",
                    "markId": "116",
                    "systemId": "TYPE_2",
                    "name": "Type 2"
                },
                {
                    "id": "2594",
                    "markId": "116",
                    "systemId": "TYPE_3",
                    "name": "Type 3"
                },
                {
                    "id": "2595",
                    "markId": "116",
                    "systemId": "TYPE_4",
                    "name": "Type 4"
                },
                {
                    "id": "2596",
                    "markId": "116",
                    "systemId": "VENTO",
                    "name": "Vento"
                },
                {
                    "id": "2597",
                    "markId": "116",
                    "systemId": "XL1",
                    "name": "XL1"
                },
                {
                    "id": "2598",
                    "markId": "116",
                    "systemId": "UP!",
                    "name": "up!"
                },
                {
                    "id": "2599",
                    "markId": "117",
                    "systemId": "120_SERIES",
                    "name": "120 Series"
                },
                {
                    "id": "2600",
                    "markId": "117",
                    "systemId": "140_SERIES",
                    "name": "140 Series"
                },
                {
                    "id": "2601",
                    "markId": "117",
                    "systemId": "164",
                    "name": "164"
                },
                {
                    "id": "2602",
                    "markId": "117",
                    "systemId": "240_SERIES",
                    "name": "240 Series"
                },
                {
                    "id": "2603",
                    "markId": "117",
                    "systemId": "260_SERIES",
                    "name": "260 Series"
                },
                {
                    "id": "2604",
                    "markId": "117",
                    "systemId": "300_SERIES",
                    "name": "300 Series"
                },
                {
                    "id": "2605",
                    "markId": "117",
                    "systemId": "440",
                    "name": "440"
                },
                {
                    "id": "2606",
                    "markId": "117",
                    "systemId": "460",
                    "name": "460"
                },
                {
                    "id": "2607",
                    "markId": "117",
                    "systemId": "480",
                    "name": "480"
                },
                {
                    "id": "2608",
                    "markId": "117",
                    "systemId": "66",
                    "name": "66"
                },
                {
                    "id": "2609",
                    "markId": "117",
                    "systemId": "740",
                    "name": "740"
                },
                {
                    "id": "2610",
                    "markId": "117",
                    "systemId": "760",
                    "name": "760"
                },
                {
                    "id": "2611",
                    "markId": "117",
                    "systemId": "780",
                    "name": "780"
                },
                {
                    "id": "2612",
                    "markId": "117",
                    "systemId": "850",
                    "name": "850"
                },
                {
                    "id": "2613",
                    "markId": "117",
                    "systemId": "940",
                    "name": "940"
                },
                {
                    "id": "2614",
                    "markId": "117",
                    "systemId": "960",
                    "name": "960"
                },
                {
                    "id": "2615",
                    "markId": "117",
                    "systemId": "C30",
                    "name": "C30"
                },
                {
                    "id": "2616",
                    "markId": "117",
                    "systemId": "C70",
                    "name": "C70"
                },
                {
                    "id": "2617",
                    "markId": "117",
                    "systemId": "LAPLANDER",
                    "name": "Laplander"
                },
                {
                    "id": "2618",
                    "markId": "117",
                    "systemId": "P1800",
                    "name": "P1800"
                },
                {
                    "id": "2619",
                    "markId": "117",
                    "systemId": "P1900",
                    "name": "P1900"
                },
                {
                    "id": "2620",
                    "markId": "117",
                    "systemId": "S40",
                    "name": "S40"
                },
                {
                    "id": "2621",
                    "markId": "117",
                    "systemId": "S60",
                    "name": "S60"
                },
                {
                    "id": "2622",
                    "markId": "117",
                    "systemId": "S60_CROSS_COUNTRY",
                    "name": "S60 Cross Country"
                },
                {
                    "id": "2623",
                    "markId": "117",
                    "systemId": "S70",
                    "name": "S70"
                },
                {
                    "id": "2624",
                    "markId": "117",
                    "systemId": "S80",
                    "name": "S80"
                },
                {
                    "id": "2625",
                    "markId": "117",
                    "systemId": "S90",
                    "name": "S90"
                },
                {
                    "id": "2626",
                    "markId": "117",
                    "systemId": "V40",
                    "name": "V40"
                },
                {
                    "id": "2627",
                    "markId": "117",
                    "systemId": "V40_CROSS_COUNTRY",
                    "name": "V40 Cross Country"
                },
                {
                    "id": "2628",
                    "markId": "117",
                    "systemId": "V50",
                    "name": "V50"
                },
                {
                    "id": "2629",
                    "markId": "117",
                    "systemId": "V60",
                    "name": "V60"
                },
                {
                    "id": "2630",
                    "markId": "117",
                    "systemId": "V60_CROSS_COUNTRY",
                    "name": "V60 Cross Country"
                },
                {
                    "id": "2631",
                    "markId": "117",
                    "systemId": "V70",
                    "name": "V70"
                },
                {
                    "id": "2632",
                    "markId": "117",
                    "systemId": "V90",
                    "name": "V90"
                },
                {
                    "id": "2633",
                    "markId": "117",
                    "systemId": "V90_CROSS_COUNTRY",
                    "name": "V90 Cross Country"
                },
                {
                    "id": "2634",
                    "markId": "117",
                    "systemId": "XC40",
                    "name": "XC40"
                },
                {
                    "id": "2635",
                    "markId": "117",
                    "systemId": "XC60",
                    "name": "XC60"
                },
                {
                    "id": "2636",
                    "markId": "117",
                    "systemId": "XC70",
                    "name": "XC70"
                },
                {
                    "id": "2637",
                    "markId": "117",
                    "systemId": "XC90",
                    "name": "XC90"
                },
                {
                    "id": "2638",
                    "markId": "118",
                    "systemId": "CORDA",
                    "name": "Corda"
                },
                {
                    "id": "2639",
                    "markId": "118",
                    "systemId": "ESTINA",
                    "name": "Estina"
                },
                {
                    "id": "2640",
                    "markId": "118",
                    "systemId": "TINGO",
                    "name": "Tingo"
                },
                {
                    "id": "2641",
                    "markId": "119",
                    "systemId": "CJ",
                    "name": "CJ"
                },
                {
                    "id": "2642",
                    "markId": "119",
                    "systemId": "JEEPSTER",
                    "name": "Jeepster"
                },
                {
                    "id": "2643",
                    "markId": "119",
                    "systemId": "KNIGHT_MODEL_20",
                    "name": "Knight Model 20"
                },
                {
                    "id": "2644",
                    "markId": "119",
                    "systemId": "MB",
                    "name": "MB"
                },
                {
                    "id": "2645",
                    "markId": "120",
                    "systemId": "PICKUP_X3",
                    "name": "Pickup X3"
                },
                {
                    "id": "2646",
                    "markId": "120",
                    "systemId": "SR-V_X3",
                    "name": "SR-V X3"
                },
                {
                    "id": "2647",
                    "markId": "120",
                    "systemId": "SUV_X3",
                    "name": "SUV X3"
                },
                {
                    "id": "2648",
                    "markId": "121",
                    "systemId": "ADMIRAL",
                    "name": "Admiral"
                },
                {
                    "id": "2649",
                    "markId": "121",
                    "systemId": "GRAND_TIGER",
                    "name": "Grand Tiger"
                },
                {
                    "id": "2650",
                    "markId": "121",
                    "systemId": "LANDMARK",
                    "name": "Landmark"
                },
                {
                    "id": "2651",
                    "markId": "122",
                    "systemId": "COUPA",
                    "name": "Coupa"
                },
                {
                    "id": "2652",
                    "markId": "122",
                    "systemId": "NOMAD",
                    "name": "Nomad"
                },
                {
                    "id": "2653",
                    "markId": "122",
                    "systemId": "SR9",
                    "name": "SR9"
                },
                {
                    "id": "2654",
                    "markId": "122",
                    "systemId": "T600",
                    "name": "T600"
                },
                {
                    "id": "2655",
                    "markId": "122",
                    "systemId": "Z100",
                    "name": "Z100"
                },
                {
                    "id": "2656",
                    "markId": "122",
                    "systemId": "Z300",
                    "name": "Z300"
                },
                {
                    "id": "2657",
                    "markId": "123",
                    "systemId": "12_ZIM",
                    "name": "12 ЗИМ"
                },
                {
                    "id": "2658",
                    "markId": "123",
                    "systemId": "13_CHAIKA",
                    "name": "13 \"Чайка"
                },
                {
                    "id": "2659",
                    "markId": "123",
                    "systemId": "14_CHAIKA",
                    "name": "14 \"Чайка"
                },
                {
                    "id": "2660",
                    "markId": "123",
                    "systemId": "18",
                    "name": "18"
                },
                {
                    "id": "2661",
                    "markId": "123",
                    "systemId": "21_VOLGA",
                    "name": "21 \"Волга"
                },
                {
                    "id": "2662",
                    "markId": "123",
                    "systemId": "22_VOLGA",
                    "name": "22 \"Волга"
                },
                {
                    "id": "2663",
                    "markId": "123",
                    "systemId": "2308_ATAMAN",
                    "name": "2308 \"Атаман"
                },
                {
                    "id": "2664",
                    "markId": "123",
                    "systemId": "2330_TIGER",
                    "name": "2330 \"Тигр"
                },
                {
                    "id": "2665",
                    "markId": "123",
                    "systemId": "24_VOLGA",
                    "name": "24 \"Волга"
                },
                {
                    "id": "2666",
                    "markId": "123",
                    "systemId": "3102_VOLGA",
                    "name": "3102 \"Волга"
                },
                {
                    "id": "2667",
                    "markId": "123",
                    "systemId": "31029_VOLGA",
                    "name": "31029 \"Волга"
                },
                {
                    "id": "2668",
                    "markId": "123",
                    "systemId": "3103_VOLGA",
                    "name": "3103 \"Волга"
                },
                {
                    "id": "2669",
                    "markId": "123",
                    "systemId": "3105_VOLGA",
                    "name": "3105 \"Волга"
                },
                {
                    "id": "2670",
                    "markId": "123",
                    "systemId": "3110_VOLGA",
                    "name": "3110 \"Волга"
                },
                {
                    "id": "2671",
                    "markId": "123",
                    "systemId": "31105_VOLGA",
                    "name": "31105 \"Волга"
                },
                {
                    "id": "2672",
                    "markId": "123",
                    "systemId": "3111_VOLGA",
                    "name": "3111 \"Волга"
                },
                {
                    "id": "2673",
                    "markId": "123",
                    "systemId": "46",
                    "name": "46"
                },
                {
                    "id": "2674",
                    "markId": "123",
                    "systemId": "64",
                    "name": "64"
                },
                {
                    "id": "2675",
                    "markId": "123",
                    "systemId": "67",
                    "name": "67"
                },
                {
                    "id": "2676",
                    "markId": "123",
                    "systemId": "69",
                    "name": "69"
                },
                {
                    "id": "2677",
                    "markId": "123",
                    "systemId": "VOLGA_SIBER",
                    "name": "Volga Siber"
                },
                {
                    "id": "2678",
                    "markId": "123",
                    "systemId": "A",
                    "name": "A"
                },
                {
                    "id": "2679",
                    "markId": "123",
                    "systemId": "M-20_POBEDA",
                    "name": "M-20 \"Победа"
                },
                {
                    "id": "2680",
                    "markId": "123",
                    "systemId": "M-72",
                    "name": "M-72"
                },
                {
                    "id": "2681",
                    "markId": "123",
                    "systemId": "M1",
                    "name": "M1"
                },
                {
                    "id": "2682",
                    "markId": "124",
                    "systemId": "DALLARA_F399/300",
                    "name": "Dallara F399/300"
                },
                {
                    "id": "2683",
                    "markId": "124",
                    "systemId": "Formula_1",
                    "name": "Formula 1"
                },
                {
                    "id": "2684",
                    "markId": "125",
                    "systemId": "1102_TAVRIA",
                    "name": "1102 \"Тавария"
                },
                {
                    "id": "2685",
                    "markId": "125",
                    "systemId": "1103_SLAVUTA",
                    "name": "1103 \"Славута"
                },
                {
                    "id": "2686",
                    "markId": "125",
                    "systemId": "1105_DANA",
                    "name": "1105 \"Дана"
                },
                {
                    "id": "2687",
                    "markId": "125",
                    "systemId": "965",
                    "name": "965"
                },
                {
                    "id": "2688",
                    "markId": "125",
                    "systemId": "966",
                    "name": "966"
                },
                {
                    "id": "2689",
                    "markId": "125",
                    "systemId": "968",
                    "name": "968"
                },
                {
                    "id": "2690",
                    "markId": "125",
                    "systemId": "CHANCE",
                    "name": "Chance"
                },
                {
                    "id": "2691",
                    "markId": "125",
                    "systemId": "FORZA",
                    "name": "Forza"
                },
                {
                    "id": "2692",
                    "markId": "125",
                    "systemId": "LANOS",
                    "name": "Lanos"
                },
                {
                    "id": "2693",
                    "markId": "125",
                    "systemId": "SENS",
                    "name": "Sens"
                },
                {
                    "id": "2694",
                    "markId": "125",
                    "systemId": "VIDA",
                    "name": "Vida"
                },
                {
                    "id": "2695",
                    "markId": "126",
                    "systemId": "111",
                    "name": "111"
                },
                {
                    "id": "2696",
                    "markId": "126",
                    "systemId": "114",
                    "name": "114"
                },
                {
                    "id": "2697",
                    "markId": "126",
                    "systemId": "117",
                    "name": "117"
                },
                {
                    "id": "2698",
                    "markId": "126",
                    "systemId": "4104",
                    "name": "4104"
                },
                {
                    "id": "2699",
                    "markId": "127",
                    "systemId": "101",
                    "name": "101"
                },
                {
                    "id": "2700",
                    "markId": "127",
                    "systemId": "110",
                    "name": "110"
                },
                {
                    "id": "2701",
                    "markId": "128",
                    "systemId": "2125_COMBI",
                    "name": "2125 \"Комби"
                },
                {
                    "id": "2702",
                    "markId": "128",
                    "systemId": "2126_ODA",
                    "name": "2126 \"Ода"
                },
                {
                    "id": "2703",
                    "markId": "128",
                    "systemId": "21261_FABULA",
                    "name": "21261 \"Фабула"
                },
                {
                    "id": "2704",
                    "markId": "128",
                    "systemId": "2717",
                    "name": "2717"
                },
                {
                    "id": "2705",
                    "markId": "128",
                    "systemId": "MOSKVICH-412",
                    "name": "Москвич-412"
                },
                {
                    "id": "2706",
                    "markId": "129",
                    "systemId": "T98",
                    "name": "T98"
                },
                {
                    "id": "2707",
                    "markId": "130",
                    "systemId": "1302_VOLUN",
                    "name": "1302 Волынь"
                },
                {
                    "id": "2708",
                    "markId": "130",
                    "systemId": "967",
                    "name": "967"
                },
                {
                    "id": "2709",
                    "markId": "130",
                    "systemId": "969",
                    "name": "969"
                },
                {
                    "id": "2710",
                    "markId": "131",
                    "systemId": "2137",
                    "name": "2137"
                },
                {
                    "id": "2711",
                    "markId": "131",
                    "systemId": "2136",
                    "name": "2136"
                },
                {
                    "id": "2712",
                    "markId": "131",
                    "systemId": "2138",
                    "name": "2138"
                },
                {
                    "id": "2713",
                    "markId": "131",
                    "systemId": "2140",
                    "name": "2140"
                },
                {
                    "id": "2714",
                    "markId": "131",
                    "systemId": "2141",
                    "name": "2141"
                },
                {
                    "id": "2715",
                    "markId": "131",
                    "systemId": "2142",
                    "name": "2142"
                },
                {
                    "id": "2716",
                    "markId": "131",
                    "systemId": "400",
                    "name": "400"
                },
                {
                    "id": "2717",
                    "markId": "131",
                    "systemId": "401",
                    "name": "401"
                },
                {
                    "id": "2718",
                    "markId": "131",
                    "systemId": "402",
                    "name": "402"
                },
                {
                    "id": "2719",
                    "markId": "131",
                    "systemId": "403",
                    "name": "403"
                },
                {
                    "id": "2720",
                    "markId": "131",
                    "systemId": "407",
                    "name": "407"
                },
                {
                    "id": "2721",
                    "markId": "131",
                    "systemId": "408",
                    "name": "408"
                },
                {
                    "id": "2722",
                    "markId": "131",
                    "systemId": "410",
                    "name": "410"
                },
                {
                    "id": "2723",
                    "markId": "131",
                    "systemId": "411",
                    "name": "411"
                },
                {
                    "id": "2724",
                    "markId": "131",
                    "systemId": "412",
                    "name": "412"
                },
                {
                    "id": "2725",
                    "markId": "131",
                    "systemId": "423",
                    "name": "423"
                },
                {
                    "id": "2726",
                    "markId": "131",
                    "systemId": "424",
                    "name": "424"
                },
                {
                    "id": "2727",
                    "markId": "131",
                    "systemId": "426",
                    "name": "426"
                },
                {
                    "id": "2728",
                    "markId": "131",
                    "systemId": "427",
                    "name": "427"
                },
                {
                    "id": "2729",
                    "markId": "131",
                    "systemId": "430",
                    "name": "430"
                },
                {
                    "id": "2730",
                    "markId": "131",
                    "systemId": "DUET",
                    "name": "Дует"
                },
                {
                    "id": "2731",
                    "markId": "131",
                    "systemId": "IVAN_KAVITA",
                    "name": "Иван Калита"
                },
                {
                    "id": "2732",
                    "markId": "131",
                    "systemId": "KNIAZ_VLADIMIR",
                    "name": "Князь Владимир"
                },
                {
                    "id": "2733",
                    "markId": "131",
                    "systemId": "SVIATOGOR",
                    "name": "Святогор"
                },
                {
                    "id": "2734",
                    "markId": "131",
                    "systemId": "URI_DOLGORUKIY",
                    "name": "Юрий Долгорукий"
                },
                {
                    "id": "2735",
                    "markId": "132",
                    "systemId": "C-3A",
                    "name": "C-3A"
                },
                {
                    "id": "2736",
                    "markId": "132",
                    "systemId": "С-3Д",
                    "name": "С-3Д"
                },
                {
                    "id": "2737",
                    "markId": "133",
                    "systemId": "AQUILA",
                    "name": "Aquila"
                },
                {
                    "id": "2738",
                    "markId": "133",
                    "systemId": "C-30",
                    "name": "C-30"
                },
                {
                    "id": "2739",
                    "markId": "133",
                    "systemId": "C10",
                    "name": "C10"
                },
                {
                    "id": "2740",
                    "markId": "133",
                    "systemId": "C190",
                    "name": "C190"
                },
                {
                    "id": "2741",
                    "markId": "133",
                    "systemId": "ROAD_PARTNER",
                    "name": "Road Partner"
                },
                {
                    "id": "2742",
                    "markId": "133",
                    "systemId": "TAGER",
                    "name": "Tager"
                },
                {
                    "id": "2743",
                    "markId": "133",
                    "systemId": "VEGA",
                    "name": "Vega"
                },
                {
                    "id": "2744",
                    "markId": "134",
                    "systemId": "3151",
                    "name": "3151"
                },
                {
                    "id": "2745",
                    "markId": "134",
                    "systemId": "3153",
                    "name": "3153"
                },
                {
                    "id": "2746",
                    "markId": "134",
                    "systemId": "3159",
                    "name": "3159"
                },
                {
                    "id": "2747",
                    "markId": "134",
                    "systemId": "3160",
                    "name": "3160"
                },
                {
                    "id": "2748",
                    "markId": "134",
                    "systemId": "3162_SIMBIR",
                    "name": "3162 Simbir"
                },
                {
                    "id": "2749",
                    "markId": "134",
                    "systemId": "469",
                    "name": "469"
                },
                {
                    "id": "2750",
                    "markId": "134",
                    "systemId": "HUNTER",
                    "name": "Hunter"
                },
                {
                    "id": "2751",
                    "markId": "134",
                    "systemId": "PATRIOT",
                    "name": "Patriot"
                },
                {
                    "id": "2752",
                    "markId": "134",
                    "systemId": "PICKUP",
                    "name": "Pickup"
                },
                {
                    "id": "2753",
                    "markId": "134",
                    "systemId": "ASTERO",
                    "name": "Астеро"
                },
                {
                    "id": "2755",
                    "markId": "41",
                    "systemId": "BRONCO_SPORT",
                    "name": "Bronco Sport"
                }
            ]
        );
        console.log('created models: ', insertedModels);
    }
}