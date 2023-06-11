


import { createStore } from 'vuex'

export default createStore({
  // variables globales
  state: {
    test: 'test' ,
    firstTypeList: ["premier liste"],
    type_list : [
          {
            normal: {
              background: '#B8B1A9',
              text: '#333333',
              image:
                'https://archives.bulbagarden.net/media/upload/archive/3/39/20090401225821%21NormalIC_Big.png'
            },
            fire: {
              background: '#F08030',
              text: '#333333',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/a/a2/FireIC_SV.png/96px-FireIC_SV.png'
            },
            water: {
              background: '#227EE7',
              text: '#FFFFFF',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/d/de/WaterIC_SV.png/96px-WaterIC_SV.png'
            },
            electric: {
              background: '#f5bf0b',
              text: '#333333',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/7/77/ElectricIC_SV.png/96px-ElectricIC_SV.png'
            },
            grass: {
              background: '#3da224',
              text: '#FFFFFF',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/7/7b/GrassIC_SV.png/96px-GrassIC_SV.png'
            },
            ice: {
              background: '#77ddff',
              text: '#333333',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/1/13/IceIC_SV.png/96px-IceIC_SV.png'
            },
            fighting: {
              background: '#915B4A',
              text: '#FFFFFF',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/0/0f/FightingIC_SV.png/96px-FightingIC_SV.png'
            },
            poison: {
              background: '#A040A0',
              text: '#FFFFFF',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/9/9d/PoisonIC_SV.png/96px-PoisonIC_SV.png'
            },
            ground: {
              background: '#92501b',
              text: '#FFFFFF',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/f/f8/GroundIC_SV.png/96px-GroundIC_SV.png'
            },
            flying: {
              background: '#4771c3',
              text: '#FFFFFF',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/d/d7/FlyingIC_SV.png/96px-FlyingIC_SV.png'
            },
            psychic: {
              background: '#963270',
              text: '#FFFFFF',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/9/96/PsychicIC_SV.png/96px-PsychicIC_SV.png'
            },
            bug: {
              background: '#A8B820',
              text: '#333333',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/d/d1/BugIC_SV.png/96px-BugIC_SV.png'
            },
            rock: {
              background: '#b0aa82',
              text: '#333333',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/3/32/RockIC_SV.png/96px-RockIC_SV.png'
            },
            ghost: {
              background: '#703F70',
              text: '#FFFFFF',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/2/2c/GhostIC_SV.png/96px-GhostIC_SV.png'
            },
            dragon: {
              background: '#B0B3C9',
              text: '#333333',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/7/7f/DragonIC_SV.png/96px-DragonIC_SV.png'
            },
            dark: {
              background: '#50413f',
              text: '#FFFFFF',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/3/30/DarkIC_SV.png/96px-DarkIC_SV.png'
            },
            steel: {
              background: '#5e9db2',
              text: '#333333',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/b/b8/SteelIC_SV.png/96px-SteelIC_SV.png'
            },
            fairy: {
              background: 'pink',
              text: '#333333',
              image:
                'https://archives.bulbagarden.net/media/upload/thumb/c/c6/FairyIC_SV.png/96px-FairyIC_SV.png'
            }
          }
        ]
  },
  getters: {
    getTypeList: state => {
      return state.type_list
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
