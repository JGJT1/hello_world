'use client'

import styles from '@/app/styles/leets.module.css'
import { useState } from 'react'

export default function Leet2() {
  const [output, setOutput] = useState([])

  function solucion(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    let raw = formData.get('array')
    const array = raw.split(',').map(n => Number(n.trim()))
    raw = formData.get('target')
    const target = Number(raw)

    setOutput(leet(array, target))
  }

  function leet(nums, target) {
    const mem = {} // valor: índice
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i]
      if (mem.hasOwnProperty(complement)) {
        return [mem[complement], i]
      }
      mem[nums[i]] = i
    }
    return [] // caso não encontre
  }

  return (
    <div className={styles.leetBox}>
      <h1>Two Sum</h1>
      <p>
        Given an array of integers <span className={styles.code}>nums</span> and an integer <span className={styles.code}>target</span>, return indices of the two numbers such that they add up to <span className={styles.code}>target</span>.
      </p>
      <p>
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
      </p>
      <p>
        You can return the answer in any order.
      </p>

      <div className={styles.examples}>
        <div className={styles.example}>
          <span><strong>Example 1</strong></span>
          <p><strong>Input: </strong> nums = [2,7,11,15], target = 9</p>
          <p><strong>Output: </strong> [0,1]</p>
        </div>

        <div className={styles.example}>
          <span><strong>Example 2</strong></span>
          <p><strong>Input:</strong> nums = [3,2,4], target = 6</p>
          <p><strong>Output:</strong> [1,2]</p>
        </div>

        <div className={styles.example}>
          <span><strong>Example 3</strong></span>
          <p><strong>Input:</strong> nums = [3,3], target = 6</p>
          <p><strong>Output:</strong> [0,1]</p>
        </div>
      </div>

      <h2>Resolução de Two Sum</h2>
      <form onSubmit={solucion}>
        <label htmlFor="array">nums = </label>
        [ <input placeholder='1,2,3,4,5' name='array' type="text" /> ]
        <br />
        <label htmlFor="target">target = </label>
        <input type="number" name='target' placeholder='4'/>
        <button type='submit'>Enviar</button>
      </form>

      {output.length > 0 && (
        <span id='output' className={styles.output}>
          Resultado: <span className={styles.code}><strong>[{output.join(', ')}]</strong></span>
        </span>
      )}
    </div>
  )
}
