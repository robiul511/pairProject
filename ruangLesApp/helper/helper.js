

function isEnrolled(status) {
  if (status = 'false') {
    return `Enrolled`
  }
  return `Graduated`
}

module.exports = isEnrolled