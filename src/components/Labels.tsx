import React from 'react'
{/* @ts-ignore */}
import {default as api} from '../store/apiSlice'
{/* @ts-ignore */}
import {getLabels} from '../helper/helper'


export function Labels() {

    const {data, isFetching, isSuccess, isError} = api.useGetLabelsQuery()
    
    let Transactions;

    console.log(data)

    if (isFetching) {
        Transactions = <div>Fetching</div>
    } else if (isSuccess) {
        console.log(getLabels(data, 'type'))
        Transactions = getLabels(data, 'type').map((v:any,i:any)=>{
            return <LabelsComponent key={i} data={v}></LabelsComponent>
        })

    } else if (isError) {
        Transactions = <div>Error</div>
    }
    // api.useGetCategoriesQuery() // the method 'getCategories' converted to useGetCategoriesQuery by redux toolkit query' 
    return (
        <>
            {Transactions}
        </>
    )
}

function LabelsComponent({data}: {data: any}) {
    if (!data) return <></>
    return (
        <div className='Labelss flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{background: data.color ?? '#f9c74f'}}></div>
                <h3 className='text-md'>{data.type?? ''}</h3>
            </div>
            <h3 className='font-bold'>{Math.round(data.percent)?? 0}%</h3>
        </div>
    )
}
