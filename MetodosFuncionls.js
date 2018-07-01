/*  metodos funcionales mas famosos filter, reduce y map*/
((c) => {
    c('reduce')
    c( [1,2,3,4,5].reduce((previous, current) => previous + current) )
    c('Map')
    c( [1,2,3,4,5].map( elemento => elemento * elemento))
    c('filter')
    c( [1,2,3,4,5].filter(elemento => elemento % 2 === 0 ))
    c( [1,2,3,4,5].filter(elemento => elemento % 2 === 1 ))
})(console.log);
