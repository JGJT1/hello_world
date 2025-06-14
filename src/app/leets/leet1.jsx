'use client'

import styles from '@/app/styles/leets.module.css'
import { useState } from 'react'

export default function leet1(){
  const [output, setOutput] = useState('')

  function solucion(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const raw = formData.get('array'); 
    const nums = raw.split(',').map(n => Number(n.trim())); 

    leet(nums)
  }

  function leet(array){
    let l = 0
    let r = 0

    array.forEach((num) => { r += num })

    for (let i = 0; i < array.length; i++){
      r -= array[i]
      if (l == r){ setOutput(i); return }
      l += array[i]
    }
    setOutput(-1)
  }

  return(
    <div className={styles.leetBox}>
      <h1>Find Pivot Index</h1>
      <span className={styles.dificulty}>Easy</span>
      <p>Given an array of integers <span className={styles.code}>nums</span>, calculate the <strong>pivot index</strong> of this <span className={styles.code}>array</span>.</p>
      <p>The <strong>pivot index</strong> is the index where the sum of all the numbers <strong>strictly</strong> to the index's right.</p>
      <p>If the index is on the left edge of the array, then the left sum is <span className={styles.code}>0</span> because there are no elements to the left. This also applies to the right edge of the array.</p>
      <p>Return the <strong>leftmost pivot index</strong>. If no such index exists, return <span className={styles.code}>-1</span>.</p>
      <div className={styles.examples}>
        <div className={styles.example}>
          <span><strong>Example 1:</strong></span>
          <p><strong>Input:</strong> nums = [1,7,3,6,5,6]</p>
          <p><strong>Output:</strong> 3</p>
          <p><strong>Explanation:</strong></p>
          <p>The pivot index is 3.</p>
          <p>Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11</p>
          <p>Right sum = nums[4] + nums [5] = 5 + 6 = 11</p>
        </div>
      </div>
      <h2>Resolução de Find Pivot Index</h2>
      <form onSubmit={solucion}>
        <label htmlFor="array">nums = </label>
        [ <input placeholder='1,7,3,6,5,6' name='array' type="text" /> ]
        <button type='submit'>Enviar</button>
      </form>
      {output != '' ? (
        <span id='output' className={styles.output}>The Pivot Index is <span className={styles.code}><strong>{output}</strong></span></span>
        ): (<span></span>)}
      <div>
        <h2>Explicação</h2>
          <p>Primeiramente separe o array entre esquerda e direita.</p>
          <p>Depois faça um somatorio de todo o array para assumir o valor da direita.</p>
          <p>Iterando sobre o array se segue a seguinte lógica: subtrai-se o valor da direita pelo item atual do array, a fim de descartar o item atual que não participa da contagem como a questão elabora.</p> 
          <p>Verifica-se se direita e esquerda são iguais, se sim este é o <span className={styles.code}>Pivot Index</span>, do contrário soma-se o valor atual do array para a esquerda e o loop seguirá.</p>
      </div>
    </div>
  )
}