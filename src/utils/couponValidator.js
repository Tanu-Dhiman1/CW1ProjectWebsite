const coupon = {
    RAMAN5: 5,
    RAMAN10: 10,
    RAMAN15: 15,
    RAMAN20: 20,
    RAMAN25: 25,
    RAMAN30: 30,
};


export const couponValidator = (couponCode) => {
    return coupon[couponCode] ? coupon[couponCode] : false;
};
