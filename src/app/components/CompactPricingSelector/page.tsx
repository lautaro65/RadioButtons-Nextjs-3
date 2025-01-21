"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface PricingOption {
  id: string
  title: string
  price: number
  billingCycle: string
  savings?: number
}

const pricingOptions: PricingOption[] = [
  {
    id: 'monthly',
    title: 'Monthly',
    price: 30,
    billingCycle: 'mo',
  },
  {
    id: 'annually',
    title: 'Annually',
    price: 15,
    billingCycle: 'mo',
    savings: 50
  }
]

const CompactPricingSelector: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('monthly')

  return (
    <div className="w-[500px] h-[500px] bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Choose Your Plan</h2>
        <p className="text-sm opacity-80">Select the best option for you</p>
      </div>
      <div className="flex-grow p-6 space-y-4">
        {pricingOptions.map((option) => (
          <motion.div
            key={option.id}
            className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
              selectedOption === option.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => setSelectedOption(option.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="radio"
              id={option.id}
              name="pricing-option"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => setSelectedOption(option.id)}
              className="sr-only"
            />
            <label htmlFor={option.id} className="flex justify-between items-center">
              <div className="flex items-center">
                <motion.div
                  className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    selectedOption === option.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                  }`}
                  animate={{
                    scale: selectedOption === option.id ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {selectedOption === option.id && (
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
                <span className="text-lg font-semibold text-gray-800">{option.title}</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-gray-800">${option.price}</span>
                <span className="text-sm text-gray-600">/{option.billingCycle}</span>
                {option.savings && (
                  <div className="text-xs font-semibold text-green-600 mt-1">
                    Save {option.savings}%
                  </div>
                )}
              </div>
            </label>
          </motion.div>
        ))}
      </div>
      <div className="p-6 bg-gray-50">
        <motion.button
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start {selectedOption === 'monthly' ? 'Monthly' : 'Annual'} Plan
        </motion.button>
      </div>
    </div>
  )
}

export default CompactPricingSelector

