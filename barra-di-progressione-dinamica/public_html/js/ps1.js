/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { BarSatusProgress } from '../js/ps.js'


const bar = new BarSatusProgress('diva', 'diva-child', { total: null }, [
  {
    width: '', background: '#FF6F61', color: 'white', value: 100, borderBottomLeftRadius: '15px',
    borderTopLeftRadius: '15px', height: '30px', animationTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)'
  },
  { width: '', background: '#5B5EA6', color: 'white', value: 700, height: '30px', animationTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' },
  { width: '', background: '#6B5B95', value: 150, height: '30px', animationTimingFunction: 'linear' },
  { width: '', background: '#92A8D1', color: 'white', value: 300, height: '30px', animationTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' },
  { width: '', background: '#EFC050', color: 'white', value: 850, height: '30px', animationTimingFunction: 'linear' },
  { width: '', background: '#88B04B', value: 250, height: '30px', animationTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' },
  { width: '', background: '#F7CAC9', color: 'black', value: 400, borderBottomRightRadius: '15px', borderTopRightRadius: '15px', height: '30px', animationTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' },
]);
const bar2 = new BarSatusProgress('divo', 'diva-childrn', { total: 1000 }, [
  {
    width: '', background: '#FF6F61', color: 'white', value: 200, borderBottomLeftRadius: '15px',
    borderTopLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px', height: '30px', animationTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)',
    animation: 'mymove 5.5s ease-in-out'
  },]);
const bar3 = new BarSatusProgress('divo1', 'diva-childrn', { total: 1000 }, [
  {
    width: '', background: '#5B5EA6', color: 'white', value: 999, borderBottomLeftRadius: '15px',
    borderTopLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px', height: '30px', animationTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)',
    animation: 'mymove 5.5s ease-in-out'
  },]);
const bar4 = new BarSatusProgress('divo2', 'diva-childrn', { total: 1000 }, [
  {
    width: '', background: '#6B5B95', color: 'white', value: 550, borderBottomLeftRadius: '15px',
    borderTopLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px', height: '30px', animationTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)',
    animation: 'mymove 5.5s ease-in-out'
  },]);
const bar5 = new BarSatusProgress('divo3', 'diva-childrn', { total: 1000 }, [
  {
    width: '', background: '#92A8D1', color: 'white', value: 500, borderBottomLeftRadius: '15px',
    borderTopLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px', height: '30px', animationTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)',
    animation: 'mymove 5.5s ease-in-out'
  },]);
const bar6 = new BarSatusProgress('divo4', 'diva-childrn', { total: 1000 }, [
  {
    width: '', background: '#EFC050', color: 'white', value: 370, borderBottomLeftRadius: '15px',
    borderTopLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px', height: '30px', animationTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)',
    animation: 'mymove 5.5s ease-in-out'
  },]);
const bar7 = new BarSatusProgress('divo5', 'diva-childrn', { total: 1000 }, [
  {
    width: '', background: '#88B04B', color: 'white', value: 400, borderBottomLeftRadius: '15px',
    borderTopLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px', height: '30px', animationTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)',
    animation: 'mymove 5.5s ease-in-out'
  },]);
const bar8 = new BarSatusProgress('divo6', 'diva-childrn', { total: 1000 }, [
  {
    width: '', background: '#F7CAC9', color: 'black', value: 275, borderBottomLeftRadius: '15px',
    borderTopLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px', height: '30px', animationTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)',
    animation: 'mymove 5.5s ease-in-out'
  },]);