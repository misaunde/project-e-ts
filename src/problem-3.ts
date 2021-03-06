import { performance } from 'perf_hooks';
import { round } from './round';
import { last } from 'lodash/fp';
import { primes } from './primes';

export const doProblem = () => {
  const getLargestPrimeFactor = (n) => {
    const primeFactors = primes.takeWhile(x => x <= Math.sqrt(n));
    return last(primeFactors.filter(x => n % x === 0));
  }

  const t0 = performance.now();
  const x = getLargestPrimeFactor(600851475143);
  const t1 = performance.now();

  console.log(`3. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);
}