/**
 * In the below program we have declared gradeCalc, percent,and result as constant
 * because we are not reassigning any value to them.
 * 
 * We have declared grade as let because we have to reassign vale to grade based on percent.
 *
 */

const gradeCalc = function(score, totalScore) {

    const percent = (score / totalScore) * 100
    let grade = ''

    if(percent >= 90) grade = 'A'
    else if(percent >= 80) grade = 'B'
    else if(percent >= 70) grade = 'C'
    else if(percent >= 60) grade = 'D'
    else grade = 'F'

    return `You got a ${grade} (${percent}%)`
}

const result = gradeCalc(15, 20)

console.log(result)