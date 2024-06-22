
export default async function FetchItemsByCategoryId(id:string,type:string){

    const data =await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_PRODUCTION_URL}/api/${type}?where[category][equals]=${id}`,{ cache: 'no-store' })
    if(!data.ok){
        return new Error('Category Id Fetch Failed')
    }

    return data.json()
} 
