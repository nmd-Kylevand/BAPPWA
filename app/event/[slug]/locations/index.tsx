import Loader from '@/components/loader/Loader'
import dynamic from 'next/dynamic'

const Toulon = dynamic(() => import('@/components/canvas/locationModels/Toulon').then((mod) => mod.Model), {
    ssr: false,
    loading: () => {

        return <Loader text='August 1793, France' />
    },

})
const Gibraltar = dynamic(() => import('@/components/canvas/locationModels/Gibraltar').then((mod) => mod.Model), {
    ssr: false,
    loading: () => {

        return <Loader text='June 1779, Spain' />
    },

})
const Chatham = dynamic(() => import('@/components/canvas/locationModels/Chatham').then((mod) => mod.Model), {
    ssr: false,
    loading: () => {

        return <Loader text='May 1765, England' />
    },

})
const CapeStVincent = dynamic(() => import('@/components/canvas/locationModels/CapeStVincent').then((mod) => mod.Model), {
    ssr: false,
    loading: () => {

        return <Loader text='February 1797, Portugal' />
    },

})
const OceanModel = dynamic(() => import('@/components/canvas/ocean/index').then((mod) => mod.Model), {
    ssr: false,
    loading: () => {

        return <Loader text='July 1778, France' />
    },

})

export {Toulon, Gibraltar, Chatham, CapeStVincent, OceanModel}