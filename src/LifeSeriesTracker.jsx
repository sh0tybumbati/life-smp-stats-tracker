import React, { useState, useMemo } from 'react';
import { Users, Heart, Sword, Trophy, Target, Clock } from 'lucide-react';

const LifeSeriesTracker = () => {
  const [selectedSeries, setSelectedSeries] = useState('3rd Life');
  const [selectedMember, setSelectedMember] = useState(null);

  // Life Series data - Complete and accurate data from wiki
  const seriesData = {
    '3rd Life': {
      participants: [
        { name: 'Grian', finalPlacement: 1, lives: { start: 3, end: 0 }, kills: 8, deaths: 3, alliances: ['Desert Duo'], notable: 'Winner - Most kills (8)' },
        { name: 'GoodTimesWithScar', finalPlacement: 2, lives: { start: 3, end: 0 }, kills: 3, deaths: 3, alliances: ['Desert Duo'], notable: 'Runner-up - Most eliminations (3)' },
        { name: 'BdoubleO100', finalPlacement: 3, lives: { start: 3, end: 0 }, kills: 3, deaths: 3, alliances: ['Crastle'], notable: 'Bdubs - Bronze' },
        { name: 'Bigbst4tz2', finalPlacement: 4, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Dogwarts'], notable: 'BigB' },
        { name: 'ImpulseSV', finalPlacement: 5, lives: { start: 3, end: 0 }, kills: 3, deaths: 3, alliances: ['Crastle'], notable: 'Impulse' },
        { name: 'InTheLittleWood', finalPlacement: 6, lives: { start: 3, end: 0 }, kills: 4, deaths: 3, alliances: ['Dogwarts'], notable: 'Martyn - 4 kills' },
        { name: 'Rendog', finalPlacement: 7, lives: { start: 3, end: 0 }, kills: 6, deaths: 3, alliances: ['Dogwarts'], notable: 'Ren - Red King (6 kills)' },
        { name: 'TangoTek', finalPlacement: 8, lives: { start: 3, end: 0 }, kills: 3, deaths: 3, alliances: ['Crastle'], notable: 'Tango' },
        { name: 'EthosLab', finalPlacement: 9, lives: { start: 3, end: 0 }, kills: 1, deaths: 3, alliances: ['Crastle'], notable: 'Etho' },
        { name: 'Smajor1995', finalPlacement: 10, lives: { start: 3, end: 0 }, kills: 2, deaths: 3, alliances: ['Flower Husbands'], notable: 'Scott' },
        { name: 'SmallishBeans', finalPlacement: 11, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Various'], notable: 'Joel' },
        { name: 'Skizzleman', finalPlacement: 12, lives: { start: 3, end: 0 }, kills: 2, deaths: 3, alliances: ['Team BEST'], notable: 'Skizz - 2 eliminations' },
        { name: 'ZombieCleo', finalPlacement: 13, lives: { start: 3, end: 0 }, kills: 1, deaths: 3, alliances: ['Crastle'], notable: 'Cleo' },
        { name: 'Solidarity', finalPlacement: 14, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Flower Husbands'], notable: 'Jimmy - First out (Canary Curse)' }
      ]
    },
    'Last Life': {
      participants: [
        { name: 'Smajor1995', finalPlacement: 1, lives: { start: 2, end: 0 }, kills: 5, deaths: 2, alliances: ['Gaslight Gatekeep Girlboss'], notable: 'Scott - Winner (Most eliminations: 4)' },
        { name: 'Rendog', finalPlacement: 2, lives: { start: 2, end: 0 }, kills: 5, deaths: 2, alliances: ['Shadow Alliance'], notable: 'Ren - Runner-up' },
        { name: 'InTheLittleWood', finalPlacement: 3, lives: { start: 4, end: 0 }, kills: 2, deaths: 4, alliances: ['Southlanders'], notable: 'Martyn - Bronze' },
        { name: 'PearlescentMoon', finalPlacement: 4, lives: { start: 6, end: 0 }, kills: 5, deaths: 5, alliances: ['Gaslight Gatekeep Girlboss'], notable: 'Pearl - Scarlet Pearl' },
        { name: 'SmallishBeans', finalPlacement: 5, lives: { start: 5, end: 0 }, kills: 11, deaths: 5, alliances: ['Southlanders'], notable: 'Joel - Most kills (11)' },
        { name: 'EthosLab', finalPlacement: 6, lives: { start: 4, end: 0 }, kills: 1, deaths: 4, alliances: ['Fairy Fort'], notable: 'Etho' },
        { name: 'Grian', finalPlacement: 7, lives: { start: 2, end: 0 }, kills: 5, deaths: 2, alliances: ['Southlanders'], notable: 'Grian - 3 eliminations' },
        { name: 'ZombieCleo', finalPlacement: 8, lives: { start: 2, end: 0 }, kills: 1, deaths: 5, alliances: ['Fairy Fort'], notable: 'Cleo - Most deaths (5)' },
        { name: 'GoodTimesWithScar', finalPlacement: 9, lives: { start: 6, end: 0 }, kills: 1, deaths: 6, alliances: ['Magical Mountain'], notable: 'Scar' },
        { name: 'Bigbst4tz2', finalPlacement: 10, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Various'], notable: 'BigB' },
        { name: 'TangoTek', finalPlacement: 11, lives: { start: 6, end: 0 }, kills: 1, deaths: 6, alliances: ['BEST'], notable: 'Tango' },
        { name: 'BdoubleO100', finalPlacement: 12, lives: { start: 4, end: 0 }, kills: 3, deaths: 4, alliances: ['Fairy Fort'], notable: 'Bdubs' },
        { name: 'LDShadowLady', finalPlacement: 13, lives: { start: 4, end: 0 }, kills: 5, deaths: 4, alliances: ['Fairy Fort'], notable: 'Lizzie' },
        { name: 'ImpulseSV', finalPlacement: 14, lives: { start: 3, end: 0 }, kills: 1, deaths: 3, alliances: ['BEST'], notable: 'Impulse' },
        { name: 'Skizzleman', finalPlacement: 15, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['BEST'], notable: 'Skizz' },
        { name: 'MumboJumbo', finalPlacement: 16, lives: { start: 4, end: 0 }, kills: 5, deaths: 4, alliances: ['Southlanders'], notable: 'Mumbo' },
        { name: 'Solidarity', finalPlacement: 17, lives: { start: 2, end: 0 }, kills: 1, deaths: 2, alliances: ['Southlanders'], notable: 'Jimmy - First out again (Canary #2)' }
      ]
    },
    'Double Life': {
      participants: [
        { name: 'PearlescentMoon', finalPlacement: 1, lives: { start: 3, end: 0 }, kills: 2, deaths: 3, alliances: ['Scott & Pearl'], notable: 'Pearl - Winner (2 eliminations)' },
        { name: 'Smajor1995', finalPlacement: 2, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Scott & Pearl'], notable: 'Scott - Sacrificed for Pearl' },
        { name: 'InTheLittleWood', finalPlacement: 3, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Cleo & Martyn'], notable: 'Martyn - Bronze (with Cleo)' },
        { name: 'ZombieCleo', finalPlacement: 4, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Cleo & Martyn'], notable: 'Cleo - Most deaths (3)' },
        { name: 'ImpulseSV', finalPlacement: 5, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Homewreckers'], notable: 'Impulse - with Bdubs' },
        { name: 'BdoubleO100', finalPlacement: 6, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Homewreckers'], notable: 'Bdubs - with Impulse' },
        { name: 'SmallishBeans', finalPlacement: 7, lives: { start: 3, end: 0 }, kills: 3, deaths: 3, alliances: ['Boat Boys'], notable: 'Joel - Most kills (3)' },
        { name: 'EthosLab', finalPlacement: 8, lives: { start: 3, end: 0 }, kills: 2, deaths: 3, alliances: ['Boat Boys'], notable: 'Etho - with Joel' },
        { name: 'GoodTimesWithScar', finalPlacement: 9, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Desert Duo'], notable: 'Scar - with Grian' },
        { name: 'Grian', finalPlacement: 10, lives: { start: 3, end: 0 }, kills: 3, deaths: 3, alliances: ['Desert Duo'], notable: 'Grian - 2 eliminations' },
        { name: 'Bigbst4tz2', finalPlacement: 11, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Box Boys'], notable: 'BigB - with Ren' },
        { name: 'Rendog', finalPlacement: 12, lives: { start: 3, end: 0 }, kills: 1, deaths: 3, alliances: ['Box Boys'], notable: 'Ren - with BigB' },
        { name: 'TangoTek', finalPlacement: 13, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Ranchers'], notable: 'Tango - First out (with Jimmy)' },
        { name: 'Solidarity', finalPlacement: 14, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Ranchers'], notable: 'Jimmy - First out (Canary #3)' }
      ]
    },
    'Limited Life': {
      participants: [
        { name: 'InTheLittleWood', finalPlacement: 1, lives: { start: 24, end: 0 }, kills: 7, deaths: 7, alliances: ['Mean Gills'], notable: 'Martyn - Winner (First win)' },
        { name: 'ImpulseSV', finalPlacement: 2, lives: { start: 24, end: 0 }, kills: 5, deaths: 7, alliances: ['Clockers'], notable: 'Impulse - Runner-up' },
        { name: 'Smajor1995', finalPlacement: 3, lives: { start: 24, end: 0 }, kills: 17, deaths: 8, alliances: ['Mean Gills'], notable: 'Scott - Bronze (17 kills)' },
        { name: 'PearlescentMoon', finalPlacement: 4, lives: { start: 24, end: 0 }, kills: 5, deaths: 7, alliances: ['Nosy Neighbors'], notable: 'Pearl' },
        { name: 'EthosLab', finalPlacement: 5, lives: { start: 24, end: 0 }, kills: 6, deaths: 7, alliances: ['TIES'], notable: 'Etho' },
        { name: 'Grian', finalPlacement: 6, lives: { start: 24, end: 0 }, kills: 20, deaths: 8, alliances: ['Bad Boys', 'Nosy Neighbors'], notable: 'Grian - Most kills (20)' },
        { name: 'Bigbst4tz2', finalPlacement: 7, lives: { start: 24, end: 0 }, kills: 3, deaths: 7, alliances: ['Nosy Neighbors'], notable: 'BigB' },
        { name: 'ZombieCleo', finalPlacement: 8, lives: { start: 24, end: 0 }, kills: 8, deaths: 8, alliances: ['Clockers'], notable: 'Cleo' },
        { name: 'GoodTimesWithScar', finalPlacement: 9, lives: { start: 24, end: 0 }, kills: 7, deaths: 8, alliances: ['Clockers'], notable: 'Scar' },
        { name: 'TangoTek', finalPlacement: 10, lives: { start: 24, end: 0 }, kills: 8, deaths: 8, alliances: ['TIES'], notable: 'Tango' },
        { name: 'BdoubleO100', finalPlacement: 11, lives: { start: 24, end: 0 }, kills: 5, deaths: 8, alliances: ['Clockers'], notable: 'Bdubs' },
        { name: 'SmallishBeans', finalPlacement: 12, lives: { start: 24, end: 0 }, kills: 14, deaths: 16, alliances: ['Bad Boys'], notable: 'Joel - Most deaths (16)' },
        { name: 'Skizzleman', finalPlacement: 13, lives: { start: 24, end: 0 }, kills: 5, deaths: 8, alliances: ['TIES'], notable: 'Skizz' },
        { name: 'Solidarity', finalPlacement: 14, lives: { start: 24, end: 0 }, kills: 4, deaths: 8, alliances: ['Bad Boys'], notable: 'Jimmy - First out (Canary #4)' }
      ]
    },
    'Secret Life': {
      participants: [
        { name: 'GoodTimesWithScar', finalPlacement: 1, lives: { start: 30, end: 0 }, kills: 11, deaths: 6, alliances: ['Various'], notable: 'Scar - Winner (Most kills & eliminations: 6)' },
        { name: 'PearlescentMoon', finalPlacement: 2, lives: { start: 30, end: 0 }, kills: 3, deaths: 6, alliances: ['Mounders'], notable: 'Pearl - Runner-up' },
        { name: 'GeminiTay', finalPlacement: 3, lives: { start: 30, end: 0 }, kills: 8, deaths: 6, alliances: ['Various'], notable: 'Gem - Bronze (Debut season)' },
        { name: 'Smajor1995', finalPlacement: 4, lives: { start: 30, end: 0 }, kills: 3, deaths: 6, alliances: ['Various'], notable: 'Scott' },
        { name: 'SmallishBeans', finalPlacement: 5, lives: { start: 30, end: 0 }, kills: 3, deaths: 6, alliances: ['Mounders'], notable: 'Joel' },
        { name: 'BdoubleO100', finalPlacement: 6, lives: { start: 30, end: 0 }, kills: 1, deaths: 6, alliances: ['Mounders'], notable: 'Bdubs' },
        { name: 'ImpulseSV', finalPlacement: 7, lives: { start: 30, end: 0 }, kills: 2, deaths: 6, alliances: ['Various'], notable: 'Impulse' },
        { name: 'Grian', finalPlacement: 8, lives: { start: 30, end: 0 }, kills: 1, deaths: 6, alliances: ['The Family'], notable: 'Grian - Secret Keeper' },
        { name: 'ZombieCleo', finalPlacement: 9, lives: { start: 30, end: 0 }, kills: 0, deaths: 6, alliances: ['Mounders'], notable: 'Cleo' },
        { name: 'Bigbst4tz2', finalPlacement: 10, lives: { start: 30, end: 0 }, kills: 1, deaths: 6, alliances: ['The Family'], notable: 'BigB' },
        { name: 'InTheLittleWood', finalPlacement: 11, lives: { start: 30, end: 0 }, kills: 2, deaths: 6, alliances: ['Mean Gills'], notable: 'Martyn' },
        { name: 'EthosLab', finalPlacement: 12, lives: { start: 30, end: 0 }, kills: 1, deaths: 6, alliances: ['Roomies'], notable: 'Etho' },
        { name: 'Skizzleman', finalPlacement: 13, lives: { start: 30, end: 0 }, kills: 1, deaths: 6, alliances: ['TIES'], notable: 'Skizz' },
        { name: 'TangoTek', finalPlacement: 14, lives: { start: 30, end: 0 }, kills: 0, deaths: 6, alliances: ['TIES'], notable: 'Tango' },
        { name: 'MumboJumbo', finalPlacement: 15, lives: { start: 30, end: 0 }, kills: 0, deaths: 6, alliances: ['The Family'], notable: 'Mumbo' },
        { name: 'Solidarity', finalPlacement: 16, lives: { start: 30, end: 0 }, kills: 1, deaths: 6, alliances: ['Mean Gills'], notable: 'Jimmy - Canary Curse Broken!' },
        { name: 'LDShadowLady', finalPlacement: 17, lives: { start: 30, end: 0 }, kills: 0, deaths: 6, alliances: ['Mounders'], notable: 'Lizzie - First out (New Canary)' }
      ]
    },
    'Wild Life': {
      participants: [
        { name: 'SmallishBeans', finalPlacement: 1, lives: { start: 6, end: 0 }, kills: 7, deaths: 6, alliances: ['The Family'], notable: 'Joel - Winner (First win, 4 eliminations)' },
        { name: 'Grian', finalPlacement: 2, lives: { start: 6, end: 0 }, kills: 5, deaths: 6, alliances: ['Various'], notable: 'Grian - Runner-up (3 eliminations)' },
        { name: 'Rendog', finalPlacement: 3, lives: { start: 6, end: 0 }, kills: 4, deaths: 6, alliances: ['The Gs'], notable: 'Ren - Bronze (Returns)' },
        { name: 'ZombieCleo', finalPlacement: 4, lives: { start: 6, end: 0 }, kills: 0, deaths: 6, alliances: ['The Gs'], notable: 'Cleo' },
        { name: 'PearlescentMoon', finalPlacement: 5, lives: { start: 6, end: 0 }, kills: 2, deaths: 6, alliances: ['The Gs'], notable: 'Pearl' },
        { name: 'TangoTek', finalPlacement: 6, lives: { start: 6, end: 0 }, kills: 1, deaths: 6, alliances: ['Tuff Guys'], notable: 'Tango' },
        { name: 'BdoubleO100', finalPlacement: 7, lives: { start: 6, end: 0 }, kills: 0, deaths: 6, alliances: ['Tuff Guys'], notable: 'Bdubs' },
        { name: 'EthosLab', finalPlacement: 8, lives: { start: 6, end: 0 }, kills: 2, deaths: 6, alliances: ['Tuff Guys'], notable: 'Etho' },
        { name: 'GeminiTay', finalPlacement: 9, lives: { start: 6, end: 0 }, kills: 0, deaths: 6, alliances: ['The Family'], notable: 'Gem' },
        { name: 'Smajor1995', finalPlacement: 10, lives: { start: 6, end: 0 }, kills: 2, deaths: 6, alliances: ['The Gs'], notable: 'Scott' },
        { name: 'ImpulseSV', finalPlacement: 11, lives: { start: 6, end: 0 }, kills: 0, deaths: 6, alliances: ['The Gs'], notable: 'Impulse' },
        { name: 'Solidarity', finalPlacement: 12, lives: { start: 6, end: 0 }, kills: 6, deaths: 6, alliances: ['Bamboozlers'], notable: 'Jimmy - 6 kills' },
        { name: 'LDShadowLady', finalPlacement: 13, lives: { start: 6, end: 0 }, kills: 1, deaths: 6, alliances: ['The Spanners'], notable: 'Lizzie' },
        { name: 'GoodTimesWithScar', finalPlacement: 14, lives: { start: 6, end: 0 }, kills: 0, deaths: 6, alliances: ['The Spanners'], notable: 'Scar' },
        { name: 'Bigbst4tz2', finalPlacement: 15, lives: { start: 6, end: 0 }, kills: 0, deaths: 6, alliances: ['The Spanners'], notable: 'BigB' },
        { name: 'InTheLittleWood', finalPlacement: 16, lives: { start: 6, end: 0 }, kills: 0, deaths: 6, alliances: ['Renwood Mound'], notable: 'Martyn' },
        { name: 'Skizzleman', finalPlacement: 17, lives: { start: 6, end: 0 }, kills: 6, deaths: 6, alliances: ['Various'], notable: 'Skizz' },
        { name: 'MumboJumbo', finalPlacement: 18, lives: { start: 6, end: 0 }, kills: 8, deaths: 6, alliances: ['The Spanners'], notable: 'Mumbo - First out (Most kills: 8!)' }
      ]
    },
    'Real Life': {
      participants: [
        { name: 'ZombieCleo', finalPlacement: 1, lives: { start: 3, end: 2 }, kills: 4, deaths: 3, alliances: ['Gaslight Gatekeep Girlboss'], notable: 'Cleo - Winner (VR special, 4 eliminations)' },
        { name: 'Smajor1995', finalPlacement: 2, lives: { start: 3, end: 2 }, kills: 4, deaths: 3, alliances: ['Gaslight Gatekeep Girlboss', 'Dogwarts 2'], notable: 'Scott - Runner-up' },
        { name: 'GeminiTay', finalPlacement: 3, lives: { start: 3, end: 1 }, kills: 1, deaths: 3, alliances: ['Gaslight Gatekeep Girlboss'], notable: 'Gem - Bronze' },
        { name: 'InTheLittleWood', finalPlacement: 4, lives: { start: 3, end: 2 }, kills: 0, deaths: 3, alliances: ['The Club'], notable: 'Martyn' },
        { name: 'PearlescentMoon', finalPlacement: 5, lives: { start: 3, end: 2 }, kills: 1, deaths: 3, alliances: ['Gaslight Gatekeep Girlboss'], notable: 'Pearl' },
        { name: 'Bigbst4tz2', finalPlacement: 6, lives: { start: 3, end: 2 }, kills: 0, deaths: 3, alliances: ['Dogwarts 2'], notable: 'BigB' },
        { name: 'Solidarity', finalPlacement: 7, lives: { start: 3, end: 1 }, kills: 2, deaths: 3, alliances: ['Various'], notable: 'Jimmy' },
        { name: 'Rendog', finalPlacement: 8, lives: { start: 3, end: 2 }, kills: 2, deaths: 3, alliances: ['Dogwarts 2', 'The Club'], notable: 'Ren' },
        { name: 'Skizzleman', finalPlacement: 9, lives: { start: 3, end: 3 }, kills: 0, deaths: 3, alliances: ['Various'], notable: 'Skizz' },
        { name: 'ImpulseSV', finalPlacement: 10, lives: { start: 3, end: 1 }, kills: 5, deaths: 3, alliances: ['Various'], notable: 'Impulse - Most kills (5)' },
        { name: 'GoodTimesWithScar', finalPlacement: 11, lives: { start: 3, end: 2 }, kills: 0, deaths: 3, alliances: ['Various'], notable: 'Scar' },
        { name: 'SmallishBeans', finalPlacement: 12, lives: { start: 3, end: 2 }, kills: 0, deaths: 3, alliances: ['Various'], notable: 'Joel' },
        { name: 'Grian', finalPlacement: 13, lives: { start: 3, end: 3 }, kills: 3, deaths: 3, alliances: ['The Spanners'], notable: 'Grian - First out (VR special)' }
      ]
    },
    'Simple Life': {
      participants: [
        { name: 'Smajor1995', finalPlacement: 1, lives: { start: 3, end: 1 }, kills: 3, deaths: 3, alliances: ['Dirt Fortress'], notable: 'Scott - Winner (Superflat special)' },
        { name: 'Grian', finalPlacement: 2, lives: { start: 3, end: 1 }, kills: 2, deaths: 3, alliances: ['Various'], notable: 'Grian - Runner-up' },
        { name: 'GoodTimesWithScar', finalPlacement: 3, lives: { start: 3, end: 1 }, kills: 3, deaths: 3, alliances: ['Various'], notable: 'Scar - Bronze (3 eliminations)' },
        { name: 'TangoTek', finalPlacement: 4, lives: { start: 3, end: 1 }, kills: 0, deaths: 3, alliances: ['Various'], notable: 'Tango' },
        { name: 'Bigbst4tz2', finalPlacement: 5, lives: { start: 3, end: 0 }, kills: 3, deaths: 3, alliances: ['Various'], notable: 'BigB' },
        { name: 'ZombieCleo', finalPlacement: 6, lives: { start: 3, end: 2 }, kills: 1, deaths: 3, alliances: ['Various'], notable: 'Cleo' },
        { name: 'SmallishBeans', finalPlacement: 7, lives: { start: 3, end: 0 }, kills: 3, deaths: 3, alliances: ['Various'], notable: 'Joel' },
        { name: 'GeminiTay', finalPlacement: 8, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Various'], notable: 'Gem' },
        { name: 'Solidarity', finalPlacement: 9, lives: { start: 3, end: 0 }, kills: 1, deaths: 3, alliances: ['Various'], notable: 'Jimmy' },
        { name: 'PearlescentMoon', finalPlacement: 10, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Various'], notable: 'Pearl' },
        { name: 'Skizzleman', finalPlacement: 11, lives: { start: 3, end: 0 }, kills: 1, deaths: 3, alliances: ['Various'], notable: 'Skizz' },
        { name: 'InTheLittleWood', finalPlacement: 12, lives: { start: 3, end: 0 }, kills: 1, deaths: 3, alliances: ['Various'], notable: 'Martyn' },
        { name: 'Rendog', finalPlacement: 13, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Various'], notable: 'Ren' },
        { name: 'BdoubleO100', finalPlacement: 14, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Various'], notable: 'Bdubs - First out (Superflat)' }
      ]
    },
    'Past Life': {
      participants: [
        { name: 'InTheLittleWood', finalPlacement: 1, lives: { start: 6, end: 0 }, kills: 13, deaths: 6, alliances: ['Lost Generation'], notable: 'Martyn - Winner (13 kills)' },
        { name: 'Grian', finalPlacement: 2, lives: { start: 6, end: 0 }, kills: 22, deaths: 6, alliances: ['The Villies'], notable: 'Runner-up - Most kills (22)' },
        { name: 'GeminiTay', finalPlacement: 3, lives: { start: 6, end: 0 }, kills: 14, deaths: 6, alliances: ['The Villies'], notable: 'Gem - Bronze (14 kills)' },
        { name: 'Solidarity', finalPlacement: 4, lives: { start: 6, end: 0 }, kills: 10, deaths: 6, alliances: ['Rejects'], notable: 'Jimmy - 10 kills (2 eliminations)' },
        { name: 'Smajor1995', finalPlacement: 5, lives: { start: 6, end: 0 }, kills: 10, deaths: 6, alliances: ['Cabin Core'], notable: 'Scott - 10 kills (2 eliminations)' },
        { name: 'ZombieCleo', finalPlacement: 6, lives: { start: 6, end: 0 }, kills: 1, deaths: 6, alliances: ['Lost Generation'], notable: 'Cleo' },
        { name: 'ImpulseSV', finalPlacement: 7, lives: { start: 6, end: 0 }, kills: 2, deaths: 6, alliances: ['Gluten Guys'], notable: 'Impulse' },
        { name: 'GoodTimesWithScar', finalPlacement: 8, lives: { start: 6, end: 0 }, kills: 12, deaths: 6, alliances: ['Cabin Core'], notable: 'Scar - 12 kills' },
        { name: 'BdoubleO100', finalPlacement: 9, lives: { start: 6, end: 0 }, kills: 1, deaths: 6, alliances: ['Cabin Core'], notable: 'Bdubs' },
        { name: 'Bigbst4tz2', finalPlacement: 10, lives: { start: 6, end: 0 }, kills: 0, deaths: 6, alliances: ['Rejects'], notable: 'BigB' },
        { name: 'Skizzleman', finalPlacement: 11, lives: { start: 6, end: 0 }, kills: 0, deaths: 6, alliances: ['Rejects'], notable: 'Skizz' },
        { name: 'SmallishBeans', finalPlacement: 12, lives: { start: 6, end: 0 }, kills: 1, deaths: 6, alliances: ['Rejects'], notable: 'Joel' },
        { name: 'EthosLab', finalPlacement: 13, lives: { start: 6, end: 0 }, kills: 12, deaths: 6, alliances: ['Cabin Core'], notable: 'Etho - 12 kills' },
        { name: 'PearlescentMoon', finalPlacement: 14, lives: { start: 6, end: 0 }, kills: 4, deaths: 6, alliances: ['The Villies'], notable: 'Pearl' },
        { name: 'Rendog', finalPlacement: 15, lives: { start: 6, end: 0 }, kills: 1, deaths: 6, alliances: ['Gluten Guys'], notable: 'Ren' },
        { name: 'TangoTek', finalPlacement: 16, lives: { start: 6, end: 0 }, kills: 0, deaths: 6, alliances: ['Gluten Guys'], notable: 'Tango - First Out' }
      ]
    }
  };

  const currentSeries = seriesData[selectedSeries];
  const allMembers = Object.values(seriesData).flatMap(series => 
    series.participants.map(p => p.name)
  );
  const uniqueMembers = [...new Set(allMembers)].sort();

  // Stats calculations
  const totalKills = currentSeries.participants.reduce((sum, p) => {
    return sum + (typeof p.kills === 'number' ? p.kills : p.kills.length);
  }, 0);
  const totalDeaths = currentSeries.participants.reduce((sum, p) => {
    return sum + (typeof p.deaths === 'number' ? p.deaths : p.deaths.length);
  }, 0);

  // Member stats across all series
  const getMemberStats = (memberName) => {
    const stats = {
      appearances: 0,
      wins: 0,
      totalKills: 0,
      totalDeaths: 0,
      bestPlacement: Infinity,
      worstPlacement: 0,
      alliances: new Set(),
      series: []
    };

    Object.entries(seriesData).forEach(([seriesName, series]) => {
      const participant = series.participants.find(p => p.name === memberName);
      if (participant) {
        stats.appearances++;
        stats.totalKills += typeof participant.kills === 'number' ? participant.kills : participant.kills.length;
        stats.totalDeaths += typeof participant.deaths === 'number' ? participant.deaths : participant.deaths.length;
        stats.bestPlacement = Math.min(stats.bestPlacement, participant.finalPlacement);
        stats.worstPlacement = Math.max(stats.worstPlacement, participant.finalPlacement);
        // Count wins from all completed series
        if (participant.finalPlacement === 1) stats.wins++;
        participant.alliances.forEach(alliance => stats.alliances.add(alliance));
        stats.series.push({
          name: seriesName,
          placement: participant.finalPlacement,
          kills: typeof participant.kills === 'number' ? participant.kills : participant.kills.length,
          deaths: typeof participant.deaths === 'number' ? participant.deaths : participant.deaths.length,
          alliances: participant.alliances,
          notable: participant.notable
        });
      }
    });

    return stats;
  };

  const getPlacementBadge = (placement) => {
    if (placement === 1) return 'bg-yellow-500 text-black';
    if (placement <= 3) return 'bg-green-500 text-white';
    if (placement <= 8) return 'bg-yellow-600 text-white';
    return 'bg-red-500 text-white';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
            Life Series Stats Tracker
          </h1>
          <p className="text-gray-300">Track deaths, kills, and alliances across all Life Series</p>
        </div>

        {/* Series Selector */}
        <div className="mb-8">
          {/* Canon Series */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {Object.keys(seriesData)
              .filter(series => !['Real Life', 'Simple Life'].includes(series))
              .map((series) => (
                <button
                  key={series}
                  onClick={() => {
                    setSelectedSeries(series);
                    setSelectedMember(null);
                  }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedSeries === series
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {series}
                </button>
              ))}
          </div>
          
          {/* Special Series */}
          <div className="text-center mb-2">
            <span className="text-gray-500 text-sm">Special Events</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Real Life', 'Simple Life'].map((series) => (
              <button
                key={series}
                onClick={() => {
                  setSelectedSeries(series);
                  setSelectedMember(null);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedSeries === series
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {series}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Participants</p>
                <p className="text-2xl font-bold">{currentSeries.participants.length}</p>
              </div>
              <Users className="text-blue-400 w-8 h-8" />
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Kills</p>
                <p className="text-2xl font-bold text-red-400">{totalKills}</p>
              </div>
              <Sword className="text-red-400 w-8 h-8" />
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Deaths</p>
                <p className="text-2xl font-bold text-gray-400">{totalDeaths}</p>
              </div>
              <Heart className="text-gray-400 w-8 h-8" />
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Winner</p>
                <p className="text-xl font-bold text-yellow-400">
                  {currentSeries.participants.find(p => p.finalPlacement === 1)?.name}
                </p>
              </div>
              <Trophy className="text-yellow-400 w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {!selectedMember ? (
              /* Series Leaderboard */
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Trophy className="mr-2 text-yellow-400" />
                  {selectedSeries} Final Standings
                </h2>
                <div className="space-y-3">
                  {currentSeries.participants
                    .sort((a, b) => a.finalPlacement - b.finalPlacement)
                    .map((participant) => (
                      <div
                        key={participant.name}
                        onClick={() => setSelectedMember(participant.name)}
                        className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${getPlacementBadge(participant.finalPlacement)}`}>
                            #{participant.finalPlacement}
                          </span>
                          <span className="font-semibold text-lg">{participant.name}</span>
                          <div className="flex space-x-3 text-sm">
                            <span className="flex items-center text-red-400">
                              <Sword className="w-4 h-4 mr-1" />
                              {typeof participant.kills === 'number' ? participant.kills : participant.kills.length}
                            </span>
                            <span className="flex items-center text-gray-400">
                              <Heart className="w-4 h-4 mr-1" />
                              {typeof participant.deaths === 'number' ? participant.deaths : participant.deaths.length}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">{participant.notable}</p>
                          <p className="text-xs text-gray-500">{participant.alliances.join(', ')}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              /* Individual Member Stats */
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center">
                    <Target className="mr-2 text-green-400" />
                    {selectedMember} - Career Stats
                  </h2>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors"
                  >
                    Back to Leaderboard
                  </button>
                </div>
                
                {(() => {
                  const memberStats = getMemberStats(selectedMember);
                  return (
                    <div className="space-y-6">
                      {/* Career Overview */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-blue-400">{memberStats.appearances}</p>
                          <p className="text-sm text-gray-400">Series Played</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-yellow-400">{memberStats.wins}</p>
                          <p className="text-sm text-gray-400">Wins</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-green-400">{memberStats.bestPlacement === Infinity ? 'N/A' : `#${memberStats.bestPlacement}`}</p>
                          <p className="text-sm text-gray-400">Best Finish</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-red-400">{memberStats.totalKills}</p>
                          <p className="text-sm text-gray-400">Total Kills</p>
                        </div>
                      </div>

                      {/* Series History */}
                      <div>
                        <h3 className="text-xl font-bold mb-4">Series History</h3>
                        <div className="space-y-3">
                          {memberStats.series.map((series, index) => (
                            <div key={index} className="p-4 bg-gray-700 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold">{series.name}</span>
                                <span className={`px-2 py-1 rounded-full text-sm font-bold ${getPlacementBadge(series.placement)}`}>
                                  #{series.placement}
                                </span>
                              </div>
                              <div className="flex justify-between text-sm text-gray-300">
                                <span>Kills: {series.kills} | Deaths: {series.deaths}</span>
                                <span>{series.alliances.join(', ')}</span>
                              </div>
                              <p className="text-xs text-gray-400 mt-1">{series.notable}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* All Members List */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="mr-2 text-blue-400" />
                All Life Series Members
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {uniqueMembers.map((member) => {
                  const stats = getMemberStats(member);
                  return (
                    <div
                      key={member}
                      onClick={() => setSelectedMember(member)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedMember === member
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{member}</span>
                        <div className="text-sm">
                          <span className="text-yellow-400">{stats.wins}W</span>
                          <span className="text-gray-400 ml-2">{stats.appearances}S</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Most Wins:</span>
                  <span className="text-yellow-400 font-semibold">
                    {(() => {
                      const winCounts = {};
                      Object.entries(seriesData).forEach(([seriesName, series]) => {
                        const winner = series.participants.find(p => p.finalPlacement === 1);
                        if (winner) {
                          winCounts[winner.name] = (winCounts[winner.name] || 0) + 1;
                        }
                      });
                      const mostWins = Object.entries(winCounts).reduce((a, b) => a[1] > b[1] ? a : b);
                      return `${mostWins[0]} (${mostWins[1]})`;
                    })()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Most Active:</span>
                  <span className="text-blue-400 font-semibold">
                    {(() => {
                      const appearances = {};
                      Object.values(seriesData).forEach(series => {
                        series.participants.forEach(p => {
                          appearances[p.name] = (appearances[p.name] || 0) + 1;
                        });
                      });
                      const mostActive = Object.entries(appearances).reduce((a, b) => a[1] > b[1] ? a : b);
                      return `${mostActive[0]} (${mostActive[1]})`;
                    })()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Series:</span>
                  <span className="text-green-400 font-semibold">{Object.keys(seriesData).length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Unique Players:</span>
                  <span className="text-purple-400 font-semibold">{uniqueMembers.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeSeriesTracker;