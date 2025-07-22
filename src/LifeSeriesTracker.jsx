import React, { useState, useMemo } from 'react';
import { Users, Heart, Sword, Trophy, Target, Clock } from 'lucide-react';

const LifeSeriesTracker = () => {
  const [selectedSeries, setSelectedSeries] = useState('3rd Life');
  const [selectedMember, setSelectedMember] = useState(null);

  // Life Series data - Complete and accurate data from wiki
  const seriesData = {
    '3rd Life': {
      participants: [
        { name: 'Grian', finalPlacement: 1, lives: { start: 3, end: 0 }, kills: 8, deaths: 0, alliances: ['Desert Duo'], notable: 'Winner - 8 kills (most)' },
        { name: 'GoodTimesWithScar', finalPlacement: 2, lives: { start: 3, end: 0 }, kills: 4, deaths: 3, alliances: ['Desert Duo'], notable: 'Runner-up' },
        { name: 'BdoubleO100', finalPlacement: 3, lives: { start: 3, end: 0 }, kills: 3, deaths: 3, alliances: ['Crastle'], notable: 'Bdubs - Bronze' },
        { name: 'InTheLittleWood', finalPlacement: 6, lives: { start: 3, end: 0 }, kills: 4, deaths: 3, alliances: ['Dogwarts'], notable: 'Martyn' },
        { name: 'Smajor1995', finalPlacement: 10, lives: { start: 3, end: 0 }, kills: 2, deaths: 3, alliances: ['Flower Husbands'], notable: 'Scott' },
        { name: 'Rendog', finalPlacement: 7, lives: { start: 3, end: 0 }, kills: 5, deaths: 3, alliances: ['Dogwarts'], notable: 'Ren - 5 kills' },
        { name: 'ImpulseSV', finalPlacement: 5, lives: { start: 3, end: 0 }, kills: 3, deaths: 3, alliances: ['Crastle'], notable: 'Impulse' },
        { name: 'TangoTek', finalPlacement: 8, lives: { start: 3, end: 0 }, kills: 3, deaths: 3, alliances: ['Crastle'], notable: 'Tango' },
        { name: 'EthosLab', finalPlacement: 9, lives: { start: 3, end: 0 }, kills: 1, deaths: 3, alliances: ['Crastle'], notable: 'Etho' },
        { name: 'ZombieCleo', finalPlacement: 13, lives: { start: 3, end: 0 }, kills: 1, deaths: 3, alliances: ['Team BEST'], notable: 'Cleo' },
        { name: 'SmallishBeans', finalPlacement: 11, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Southlanders'], notable: 'Joel' },
        { name: 'Skizzleman', finalPlacement: 12, lives: { start: 3, end: 0 }, kills: 2, deaths: 3, alliances: ['Team BEST'], notable: 'Skizz' },
        { name: 'Bigbst4tz2', finalPlacement: 4, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Dogwarts'], notable: 'BigB' },
        { name: 'Solidarity', finalPlacement: 14, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: ['Flower Husbands'], notable: 'Jimmy - First out' }
      ]
    },
    'Last Life': {
      participants: [
        { name: 'Smajor1995', finalPlacement: 1, lives: { start: 2, end: 0 }, kills: 4, deaths: 2, alliances: ['Gaslight Gatekeep Girlboss'], notable: 'Scott - Winner' },
        { name: 'Rendog', finalPlacement: 2, lives: { start: 2, end: 0 }, kills: 3, deaths: 2, alliances: ['Shadow Alliance'], notable: 'Ren - Runner-up' },
        { name: 'InTheLittleWood', finalPlacement: 3, lives: { start: 4, end: 0 }, kills: 2, deaths: 4, alliances: ['Southlanders'], notable: 'Martyn - Bronze' },
        { name: 'PearlescentMoon', finalPlacement: 4, lives: { start: 6, end: 0 }, kills: 6, deaths: 5, alliances: ['Gaslight Gatekeep Girlboss'], notable: 'Pearl - Scarlet Pearl (most deaths)' },
        { name: 'SmallishBeans', finalPlacement: 5, lives: { start: 5, end: 0 }, kills: 11, deaths: 5, alliances: ['Southlanders'], notable: 'Joel - Most kills (11)' },
        { name: 'EthosLab', finalPlacement: 6, lives: { start: 4, end: 0 }, kills: 1, deaths: 4, alliances: ['Fairy Fort'], notable: 'Etho' },
        { name: 'Grian', finalPlacement: 7, lives: { start: 2, end: 0 }, kills: 3, deaths: 2, alliances: ['Southlanders'], notable: 'Chaos Incarnate' },
        { name: 'ZombieCleo', finalPlacement: 8, lives: { start: 2, end: 0 }, kills: 2, deaths: 5, alliances: ['Fairy Fort'], notable: 'Cleo' },
        { name: 'GoodTimesWithScar', finalPlacement: 9, lives: { start: 6, end: 0 }, kills: 1, deaths: 6, alliances: ['Magical Mountain'], notable: 'Scar' },
        { name: 'Bigbst4tz2', finalPlacement: 10, lives: { start: 3, end: 0 }, kills: 0, deaths: 3, alliances: [], notable: 'BigB' },
        { name: 'TangoTek', finalPlacement: 11, lives: { start: 6, end: 0 }, kills: 1, deaths: 6, alliances: ['BEST'], notable: 'Tango' },
        { name: 'BdoubleO100', finalPlacement: 12, lives: { start: 4, end: 0 }, kills: 0, deaths: 4, alliances: ['Fairy Fort'], notable: 'Bdubs' },
        { name: 'LDShadowLady', finalPlacement: 13, lives: { start: 4, end: 0 }, kills: 0, deaths: 4, alliances: ['Fairy Fort'], notable: 'Lizzie' },
        { name: 'ImpulseSV', finalPlacement: 14, lives: { start: 3, end: 0 }, kills: 1, deaths: 3, alliances: ['BEST'], notable: 'Impulse' },
        { name: 'Skizzleman', finalPlacement: 15, lives: { start: 3, end: 0 }, kills: 2, deaths: 3, alliances: ['BEST'], notable: 'Skizz' },
        { name: 'MumboJumbo', finalPlacement: 16, lives: { start: 4, end: 0 }, kills: 0, deaths: 4, alliances: ['Southlanders'], notable: 'Mumbo' },
        { name: 'Solidarity', finalPlacement: 17, lives: { start: 2, end: 0 }, kills: 0, deaths: 2, alliances: ['Southlanders'], notable: 'Jimmy - First out again' }
      ]
    },
    'Double Life': {
      participants: [
        { name: 'PearlescentMoon', finalPlacement: 1, lives: { start: 1, end: 0 }, kills: 4, deaths: 1, alliances: ['Scott & Pearl'], notable: 'Pearl - Winner (Scott sacrificed)' },
        { name: 'Smajor1995', finalPlacement: 2, lives: { start: 1, end: 0 }, kills: 0, deaths: 1, alliances: ['Scott & Pearl'], notable: 'Scott - Sacrificed for Pearl' },
        { name: 'InTheLittleWood', finalPlacement: 3, lives: { start: 1, end: 0 }, kills: 0, deaths: 1, alliances: ['Cleo & Martyn'], notable: 'Martyn - with Cleo' },
        { name: 'ZombieCleo', finalPlacement: 3, lives: { start: 1, end: 0 }, kills: 0, deaths: 3, alliances: ['Cleo & Martyn'], notable: 'Cleo - with Martyn (most deaths)' },
        { name: 'BdoubleO100', finalPlacement: 5, lives: { start: 1, end: 0 }, kills: 0, deaths: 1, alliances: ['Homewreckers'], notable: 'Bdubs - with Impulse' },
        { name: 'ImpulseSV', finalPlacement: 5, lives: { start: 1, end: 0 }, kills: 0, deaths: 1, alliances: ['Homewreckers'], notable: 'Impulse - with Bdubs' },
        { name: 'Grian', finalPlacement: 7, lives: { start: 1, end: 0 }, kills: 1, deaths: 1, alliances: ['Desert Duo'], notable: 'Soulmates with Scar' },
        { name: 'GoodTimesWithScar', finalPlacement: 7, lives: { start: 1, end: 0 }, kills: 0, deaths: 1, alliances: ['Desert Duo'], notable: 'Soulmates with Grian' },
        { name: 'SmallishBeans', finalPlacement: 9, lives: { start: 1, end: 0 }, kills: 3, deaths: 1, alliances: ['Boat Boys'], notable: 'Joel - with Etho' },
        { name: 'EthosLab', finalPlacement: 9, lives: { start: 1, end: 0 }, kills: 2, deaths: 1, alliances: ['Boat Boys'], notable: 'Etho - with Joel' },
        { name: 'Rendog', finalPlacement: 11, lives: { start: 1, end: 0 }, kills: 0, deaths: 1, alliances: ['Box Boys'], notable: 'Ren - with BigB' },
        { name: 'Bigbst4tz2', finalPlacement: 11, lives: { start: 1, end: 0 }, kills: 0, deaths: 1, alliances: ['Box Boys'], notable: 'BigB - with Ren' },
        { name: 'TangoTek', finalPlacement: 13, lives: { start: 1, end: 0 }, kills: 0, deaths: 1, alliances: ['Ranchers'], notable: 'Tango - with Jimmy (first eliminated)' },
        { name: 'Solidarity', finalPlacement: 13, lives: { start: 1, end: 0 }, kills: 0, deaths: 1, alliances: ['Ranchers'], notable: 'Jimmy - with Tango (first eliminated)' }
      ]
    },
    'Limited Life': {
      participants: [
        { name: 'InTheLittleWood', finalPlacement: 1, lives: { start: 24, end: 0 }, kills: ['Multiple'], deaths: ['Time ran out'], alliances: ['Mean Gills', 'Clockers'], notable: 'Martyn - Winner' },
        { name: 'ImpulseSV', finalPlacement: 2, lives: { start: 24, end: 0 }, kills: ['Multiple'], deaths: ['Time ran out'], alliances: ['Clockers'], notable: 'Impulse - Runner-up' },
        { name: 'Smajor1995', finalPlacement: 3, lives: { start: 24, end: 0 }, kills: ['Multiple'], deaths: ['Time ran out'], alliances: ['Mean Gills'], notable: 'Scott - Bronze' },
        { name: 'BdoubleO100', finalPlacement: 4, lives: { start: 24, end: 0 }, kills: [], deaths: ['Time ran out'], alliances: ['Clockers'], notable: 'Bdubs' },
        { name: 'TangoTek', finalPlacement: 5, lives: { start: 24, end: 0 }, kills: [], deaths: ['Time ran out'], alliances: ['TIES'], notable: 'Tango' },
        { name: 'EthosLab', finalPlacement: 6, lives: { start: 24, end: 0 }, kills: [], deaths: ['Time ran out'], alliances: ['TIES'], notable: 'Etho' },
        { name: 'ZombieCleo', finalPlacement: 7, lives: { start: 24, end: 0 }, kills: [], deaths: ['Time ran out'], alliances: ['Clockers'], notable: 'Cleo' },
        { name: 'PearlescentMoon', finalPlacement: 8, lives: { start: 24, end: 0 }, kills: [], deaths: ['Time ran out'], alliances: ['Nosy Neighbors'], notable: 'Pearl' },
        { name: 'Bigbst4tz2', finalPlacement: 9, lives: { start: 24, end: 0 }, kills: [], deaths: ['Time ran out'], alliances: ['Nosy Neighbors'], notable: 'BigB' },
        { name: 'Grian', finalPlacement: 10, lives: { start: 24, end: 0 }, kills: [], deaths: ['Time ran out'], alliances: ['Bad Boys'], notable: 'Bad Boy Chaos' },
        { name: 'SmallishBeans', finalPlacement: 11, lives: { start: 24, end: 0 }, kills: [], deaths: ['Time ran out'], alliances: ['Bad Boys'], notable: 'Joel' },
        { name: 'GoodTimesWithScar', finalPlacement: 12, lives: { start: 24, end: 0 }, kills: [], deaths: ['Time ran out'], alliances: ['Clockers'], notable: 'Scar' },
        { name: 'Skizzleman', finalPlacement: 13, lives: { start: 24, end: 0 }, kills: [], deaths: ['Time ran out'], alliances: ['TIES'], notable: 'Skizz - Returns' },
        { name: 'Solidarity', finalPlacement: 14, lives: { start: 24, end: 0 }, kills: [], deaths: ['Time ran out'], alliances: ['Bad Boys'], notable: 'Jimmy - Bad Boy Sheriff' }
      ]
    },
    'Secret Life': {
      participants: [
        { name: 'GoodTimesWithScar', finalPlacement: 1, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Task fail', 'PvP'], alliances: ['Heart Foundation'], notable: 'Scar - Winner' },
        { name: 'PearlescentMoon', finalPlacement: 2, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Task fail', 'Scar'], alliances: ['G.G.G.G.'], notable: 'Pearl - Runner-up' },
        { name: 'GeminiTay', finalPlacement: 3, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Task fail', 'Scar'], alliances: ['G.G.G.G.'], notable: 'Gem - New Player Bronze' },
        { name: 'Grian', finalPlacement: 4, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Task fail'], alliances: ['The Family'], notable: 'Secret Keeper' },
        { name: 'Smajor1995', finalPlacement: 5, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Task fail'], alliances: ['G.G.G.G.'], notable: 'Scott' },
        { name: 'InTheLittleWood', finalPlacement: 6, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Task fail'], alliances: ['Mean Gills'], notable: 'Martyn' },
        { name: 'ImpulseSV', finalPlacement: 7, lives: { start: 6, end: 0 }, kills: [], deaths: ['Task fail'], alliances: ['Heart Foundation'], notable: 'Impulse' },
        { name: 'TangoTek', finalPlacement: 8, lives: { start: 6, end: 0 }, kills: [], deaths: ['Task fail'], alliances: ['T.I.E.S.'], notable: 'Tango' },
        { name: 'EthosLab', finalPlacement: 9, lives: { start: 6, end: 0 }, kills: [], deaths: ['Task fail'], alliances: ['T.I.E.S.'], notable: 'Etho' },
        { name: 'BdoubleO100', finalPlacement: 10, lives: { start: 6, end: 0 }, kills: [], deaths: ['Task fail'], alliances: ['Heart Foundation'], notable: 'Bdubs' },
        { name: 'ZombieCleo', finalPlacement: 11, lives: { start: 6, end: 0 }, kills: [], deaths: ['Task fail'], alliances: ['Mounders'], notable: 'Cleo' },
        { name: 'Bigbst4tz2', finalPlacement: 12, lives: { start: 6, end: 0 }, kills: [], deaths: ['Task fail'], alliances: ['The Family'], notable: 'BigB' },
        { name: 'SmallishBeans', finalPlacement: 13, lives: { start: 6, end: 0 }, kills: [], deaths: ['Task fail'], alliances: ['Mounders'], notable: 'Joel' },
        { name: 'MumboJumbo', finalPlacement: 14, lives: { start: 6, end: 0 }, kills: [], deaths: ['Task fail'], alliances: ['The Family'], notable: 'Mumbo - Returns' },
        { name: 'Skizzleman', finalPlacement: 15, lives: { start: 6, end: 0 }, kills: [], deaths: ['Task fail'], alliances: ['T.I.E.S.'], notable: 'Skizz' },
        { name: 'LDShadowLady', finalPlacement: 16, lives: { start: 6, end: 0 }, kills: [], deaths: ['Task fail'], alliances: ['Mounders'], notable: 'Lizzie - Returns' },
        { name: 'Solidarity', finalPlacement: 17, lives: { start: 6, end: 0 }, kills: [], deaths: ['Task fail'], alliances: ['Mean Gills'], notable: 'Jimmy - Canary Curse Broken' }
      ]
    },
    'Wild Life': {
      participants: [
        { name: 'SmallishBeans', finalPlacement: 1, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Gimmick'], alliances: ['Family'], notable: 'Joel - Winner' },
        { name: 'Grian', finalPlacement: 2, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Gimmick'], alliances: ['Grian, Skizz & Mumbo'], notable: 'Runner-up' },
        { name: 'Rendog', finalPlacement: 3, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Gimmick'], alliances: ['Renwood Mound'], notable: 'Ren - Returns Bronze' },
        { name: 'InTheLittleWood', finalPlacement: 4, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Gimmick'], alliances: ['Renwood Mound'], notable: 'Martyn' },
        { name: 'GeminiTay', finalPlacement: 5, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Gimmick'], alliances: ['Family'], notable: 'Gem' },
        { name: 'Smajor1995', finalPlacement: 6, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Gimmick'], alliances: ['Sub One Club'], notable: 'Scott' },
        { name: 'PearlescentMoon', finalPlacement: 7, lives: { start: 6, end: 0 }, kills: ['Multiple'], deaths: ['Gimmick'], alliances: ['Family'], notable: 'Pearl' },
        { name: 'BdoubleO100', finalPlacement: 8, lives: { start: 6, end: 0 }, kills: [], deaths: ['Gimmick'], alliances: ['Sub One Club'], notable: 'Bdubs' },
        { name: 'EthosLab', finalPlacement: 9, lives: { start: 6, end: 0 }, kills: [], deaths: ['Gimmick'], alliances: ['Sub One Club'], notable: 'Etho' },
        { name: 'TangoTek', finalPlacement: 10, lives: { start: 6, end: 0 }, kills: [], deaths: ['Gimmick'], alliances: ['Sub One Club'], notable: 'Tango' },
        { name: 'ImpulseSV', finalPlacement: 11, lives: { start: 6, end: 0 }, kills: [], deaths: ['Gimmick'], alliances: ['Sub One Club'], notable: 'Impulse' },
        { name: 'ZombieCleo', finalPlacement: 12, lives: { start: 6, end: 0 }, kills: [], deaths: ['Gimmick'], alliances: ['Spanners'], notable: 'Cleo' },
        { name: 'GoodTimesWithScar', finalPlacement: 13, lives: { start: 6, end: 0 }, kills: [], deaths: ['Gimmick'], alliances: ['Spanners'], notable: 'Scar' },
        { name: 'Bigbst4tz2', finalPlacement: 14, lives: { start: 6, end: 0 }, kills: [], deaths: ['Gimmick'], alliances: ['Spanners'], notable: 'BigB' },
        { name: 'MumboJumbo', finalPlacement: 15, lives: { start: 6, end: 0 }, kills: [], deaths: ['Gimmick'], alliances: ['Grian, Skizz & Mumbo'], notable: 'Mumbo' },
        { name: 'Skizzleman', finalPlacement: 16, lives: { start: 6, end: 0 }, kills: [], deaths: ['Gimmick'], alliances: ['Grian, Skizz & Mumbo'], notable: 'Skizz' },
        { name: 'LDShadowLady', finalPlacement: 17, lives: { start: 6, end: 0 }, kills: [], deaths: ['Gimmick'], alliances: ['Spanners'], notable: 'Lizzie' },
        { name: 'Solidarity', finalPlacement: 18, lives: { start: 6, end: 0 }, kills: [], deaths: ['Gimmick'], alliances: ['Grian, Skizz & Mumbo'], notable: 'Jimmy - Last Place' }
      ]
    },
    'Real Life': {
      participants: [
        { name: 'ZombieCleo', finalPlacement: 1, lives: { start: 3, end: 0 }, kills: ['Multiple'], deaths: ['VR mechanics'], alliances: ['Divorce Quartet'], notable: 'Cleo - VR Winner' },
        { name: 'Smajor1995', finalPlacement: 2, lives: { start: 3, end: 0 }, kills: ['Multiple'], deaths: ['VR mechanics'], alliances: ['Mean Gills'], notable: 'Scott - VR Runner-up' },
        { name: 'GeminiTay', finalPlacement: 3, lives: { start: 3, end: 0 }, kills: ['Multiple'], deaths: ['VR mechanics'], alliances: ['G.G.G.G.'], notable: 'Gem - VR Bronze' },
        { name: 'InTheLittleWood', finalPlacement: 4, lives: { start: 3, end: 0 }, kills: [], deaths: ['VR mechanics'], alliances: ['Tuff Guys'], notable: 'Martyn' },
        { name: 'TangoTek', finalPlacement: 5, lives: { start: 3, end: 0 }, kills: [], deaths: ['VR mechanics'], alliances: ['T.I.E.S.'], notable: 'Tango' },
        { name: 'Grian', finalPlacement: 18, lives: { start: 3, end: 0 }, kills: [], deaths: ['VR mechanics'], alliances: ['The Spanners'], notable: 'Last Place in VR' }
      ]
    },
    'Simple Life': {
      participants: [
        { name: 'Smajor1995', finalPlacement: 1, lives: { start: 3, end: 0 }, kills: ['Multiple'], deaths: ['Superflat mechanics'], alliances: [], notable: 'Scott - Superflat Winner' },
        { name: 'Grian', finalPlacement: 2, lives: { start: 3, end: 0 }, kills: ['Multiple'], deaths: ['Superflat mechanics'], alliances: [], notable: 'Runner-up' },
        { name: 'GoodTimesWithScar', finalPlacement: 3, lives: { start: 3, end: 0 }, kills: [], deaths: ['Superflat mechanics'], alliances: [], notable: 'Scar - Bronze' }
      ]
    },
    'Past Life': {
      participants: [
        { name: 'Bigbst4tz2', finalPlacement: 1, lives: { start: 6, end: 6, remaining: 6 }, kills: 0, deaths: 0, alliances: ['TBD'], notable: 'BigB - 6 lives (Ongoing)' },
        { name: 'GoodTimesWithScar', finalPlacement: 1, lives: { start: 6, end: 6, remaining: 6 }, kills: 1, deaths: 0, alliances: ['TBD'], notable: 'Scar - 6 lives (Ongoing)' },
        { name: 'ImpulseSV', finalPlacement: 1, lives: { start: 6, end: 6, remaining: 6 }, kills: 0, deaths: 0, alliances: ['TBD'], notable: 'Impulse - 6 lives (Ongoing)' },
        { name: 'PearlescentMoon', finalPlacement: 1, lives: { start: 6, end: 6, remaining: 6 }, kills: 0, deaths: 0, alliances: ['TBD'], notable: 'Pearl - 6 lives (Ongoing)' },
        { name: 'Grian', finalPlacement: 5, lives: { start: 6, end: 5, remaining: 5 }, kills: 4, deaths: 1, alliances: ['TBD'], notable: 'Kill Leader - 4 kills (Ongoing)' },
        { name: 'GeminiTay', finalPlacement: 5, lives: { start: 6, end: 5, remaining: 5 }, kills: 4, deaths: 1, alliances: ['TBD'], notable: 'Gem - 4 kills (Ongoing)' },
        { name: 'EthosLab', finalPlacement: 7, lives: { start: 6, end: 5, remaining: 5 }, kills: 2, deaths: 1, alliances: ['TBD'], notable: 'Etho - 2 kills (Ongoing)' },
        { name: 'InTheLittleWood', finalPlacement: 8, lives: { start: 6, end: 5, remaining: 5 }, kills: 0, deaths: 1, alliances: ['TBD'], notable: 'Martyn (Ongoing)' },
        { name: 'Rendog', finalPlacement: 8, lives: { start: 6, end: 5, remaining: 5 }, kills: 0, deaths: 1, alliances: ['TBD'], notable: 'Ren (Ongoing)' },
        { name: 'Skizzleman', finalPlacement: 8, lives: { start: 6, end: 5, remaining: 5 }, kills: 0, deaths: 1, alliances: ['TBD'], notable: 'Skizz (Ongoing)' },
        { name: 'Smajor1995', finalPlacement: 8, lives: { start: 6, end: 5, remaining: 5 }, kills: 0, deaths: 1, alliances: ['TBD'], notable: 'Scott - Boogeyman Ep2 (Ongoing)' },
        { name: 'SmallishBeans', finalPlacement: 8, lives: { start: 6, end: 5, remaining: 5 }, kills: 0, deaths: 1, alliances: ['TBD'], notable: 'Joel - Boogeyman Ep2 (Ongoing)' },
        { name: 'BdoubleO100', finalPlacement: 13, lives: { start: 6, end: 4, remaining: 4 }, kills: 0, deaths: 2, alliances: ['TBD'], notable: 'Bdubs - 4 lives (Ongoing)' },
        { name: 'Solidarity', finalPlacement: 13, lives: { start: 6, end: 4, remaining: 4 }, kills: 0, deaths: 2, alliances: ['TBD'], notable: 'Jimmy - 4 lives (Ongoing)' }
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
        // Only count wins from completed series (exclude ongoing series like Past Life)
        if (participant.finalPlacement === 1 && seriesName !== 'Past Life') stats.wins++;
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
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(seriesData).map((series) => (
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
                <p className="text-gray-400 text-sm">{selectedSeries === 'Past Life' ? 'Favored to win' : 'Winner'}</p>
                <p className="text-xl font-bold text-yellow-400">
                  {(() => {
                    if (selectedSeries === 'Past Life') {
                      // Get the #1 ranked player based on lives/kills sorting
                      const sortedParticipants = [...currentSeries.participants].sort((a, b) => {
                        if (a.lives.remaining !== b.lives.remaining) {
                          return b.lives.remaining - a.lives.remaining;
                        }
                        return (typeof b.kills === 'number' ? b.kills : b.kills.length) - (typeof a.kills === 'number' ? a.kills : a.kills.length);
                      });
                      return sortedParticipants[0]?.name;
                    }
                    // For completed series, find the winner
                    return currentSeries.participants.find(p => p.finalPlacement === 1)?.name;
                  })()}
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
                    .sort((a, b) => {
                      // For ongoing series (Past Life), sort by lives remaining then kills
                      if (selectedSeries === 'Past Life') {
                        if (a.lives.remaining !== b.lives.remaining) {
                          return b.lives.remaining - a.lives.remaining; // Higher lives first
                        }
                        return (typeof b.kills === 'number' ? b.kills : b.kills.length) - (typeof a.kills === 'number' ? a.kills : a.kills.length); // Higher kills first
                      }
                      // For completed series, use final placement
                      return a.finalPlacement - b.finalPlacement;
                    })
                    .map((participant, index, sortedArray) => {
                      let displayRank;
                      if (selectedSeries === 'Past Life') {
                        // Calculate tied ranks for ongoing series
                        const currKills = typeof participant.kills === 'number' ? participant.kills : participant.kills.length;
                        const currCombo = `${participant.lives.remaining}-${currKills}`;
                        
                        // Find the first occurrence of this combination to get the rank
                        displayRank = 1;
                        const seenCombinations = new Set();
                        
                        for (let i = 0; i < sortedArray.length; i++) {
                          const player = sortedArray[i];
                          const playerKills = typeof player.kills === 'number' ? player.kills : player.kills.length;
                          const playerCombo = `${player.lives.remaining}-${playerKills}`;
                          
                          if (playerCombo === currCombo) {
                            // Found first occurrence of this combination
                            displayRank = seenCombinations.size + 1;
                            break;
                          }
                          seenCombinations.add(playerCombo);
                        }
                      } else {
                        displayRank = participant.finalPlacement;
                      }
                      return (
                      <div
                        key={participant.name}
                        onClick={() => setSelectedMember(participant.name)}
                        className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${getPlacementBadge(displayRank)}`}>
                            #{displayRank}
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
                            {participant.lives.remaining !== undefined && (
                              <span className="flex items-center text-green-400">
                                <Clock className="w-4 h-4 mr-1" />
                                {participant.lives.remaining}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">{participant.notable}</p>
                          <p className="text-xs text-gray-500">{participant.alliances.join(', ')}</p>
                        </div>
                      </div>
                      );
                    })}
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
                        // Only count wins from completed series (exclude ongoing series like Past Life)
                        if (seriesName !== 'Past Life') {
                          const winner = series.participants.find(p => p.finalPlacement === 1);
                          if (winner) {
                            winCounts[winner.name] = (winCounts[winner.name] || 0) + 1;
                          }
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