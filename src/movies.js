// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(list){
    let directorsArr = list.map((film =>{
        return film.director
    }))  

    return directorsArr
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(list){
    movieSum = list.filter((film =>{
        if(film.director == 'Steven Spielberg' && film.genre.includes('Drama')){
            return true
        }
    }))
return movieSum.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = function(list){
    if(list.length == 0){
    return 0
    }
    let totalRates = list.reduce(function(sum, film){
    return sum + film.rate
    }
    if(film.rate){
    return sum + film.rate
    }
    else {
        return sum;
    }
        },0)
    let average = totalRates/list.length
    return Number(average.toFixed(2))
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
/* function dramaMoviesRate(movies) {
    
    let dramaMovies = movies.filter(function(singleMovie){
        if(['Crime','Drama'] == 'Drama'){
            return true
        }
    })
    let ratesAvergae(dramaMovies)
    return average
}

 */
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

/* function orderByYear(movies){
    let clonedArray = JSON.parse(JSON.stringify(movies))
    clonedArray.sort(function(first, second){
    if(first.year > second.year){
        return 1
    }
    else if(second.year > first.year){
        return -1
    }
    else {
        if(first.title > second.title){
            return 1
        } else if(second.title > first.title){
            return -1
        }
        return 0
    }
})
return clonedArray
} */

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

/* function orderAlphabetically(movies) {
    let clonedArray = JSON.parse(JSON.stringify(movies))
    clonedArray.sort(function(first, second){
    if(first.title > second.title){
        return 1
    } else if(second.title > first.title){
        return -1
    }
    return 0
}
})
let titles = clonedArray.map((singleMovie)=>{
    return singleMovie.title
})
    return titles.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

funtion turnHoursToMinutes{

} */
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
