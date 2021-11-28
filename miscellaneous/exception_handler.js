function getHttpErrorCode(exception) {
    let error = 500;
    if (typeof exception.code === 'string') {
        const ec = exception.code;
        if (ec === 'P2000' || ec === 'P2007') error = 400;
        else if (ec === 'P2001' || ec === 'P404') error = 404;
        else if (ec === 'P2002' || ec === 'P2003' || ec === 'P2004') error = 409;
        else if (ec === 'A401') error = 401;
    }
    return error;
}

module.exports = getHttpErrorCode;