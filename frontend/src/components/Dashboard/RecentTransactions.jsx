import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import moment from 'moment'
import TransactionInfoCard from '../Cards/TransactionInfoCard'

function RecentTransactions({transactions,onSeeMore}) {
  return (
    <div className='card'>
      <div className='flex items-center justify-between' >
            <h5 className='text-xl' >
                Recent Transactions
            </h5>

            <button className='card-btn' onClick={onSeeMore} >
                    See All <LuArrowRight className='text-base' />
            </button>
      </div>

      <div>
        {transactions?.slice(0, 5)?.map((item) => {
            return (
                <TransactionInfoCard    
                key={item._id}
                title={item.type === 'expense' ? item.category : item.source}
                icon={item.icon}
                date={moment(item.date).format("Do MM YYYY")}
                amount={item.amount}
                type={item.type}
                hideDeleteBtn
                />
        )
})}
      </div>
    </div>
  )
}

export default RecentTransactions
