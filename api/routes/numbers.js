const express = require("express");

const numbersController = require("../controllers/numbers");

const router = express.Router();

/** GET Methods */
    /**
     * @openapi
     * '/api/data':
     *  get:
     *     tags:
     *     - Numbers Contoller
     *     summary: Get the number array
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.route("/data").get(numbersController.getData);

/** POST Methods */
    /**
     * @openapi
     * '/api/data':
     *  post:
     *     tags:
     *     - Numbers Contoller
     *     summary: Upload the number array
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - numbers
     *            properties:
     *              numbers:
     *                type: number
     *                default: [71,92,26,2,85,16,13,24,15,46,19,25,61,12,78,61,92,42,83,73,62,68,93,87,84,54,98,57,59,96,75,51,77,14,82,61,10,7,32,95,84,82,83,5,12,95,52,95,42,14,83,90,47,13,54,27,96,22,8,64,92,53,23,36,51,56,72,32,38,62,20,86,75,61,32,65,48,81,59,74,10,49,10,45,82,29,13,96,72,65,37,92,20,74,80,32,65,49,73,20,56,95,71,50,32,59,39,90,99,78,46,23,37,80,4,11,1,100,4,100,95,18,35,56,47,60,21,86,73,2,50,91,14,97,100,50,57,45,58,44,42,73,28,98,2,59,93,70,53,56,40,43,94,31,0,26,18,80,55,56,41,20,17,88,96,57,13,83,9,66,56,95,89,56,31,54,0,41,0,64,43,29,65,10,40,78,89,3,91,96,74,27,45,11,19,14,21,35,85,27,41,16,96,86,79,23,25,90,54,25,14,74,4,53,22,6,91,50,72,87,62,29,85,23,26,29,6,24,71,25,12,17,24,91,86,49,11,58,71,65,87,73,87,88,22,94,56,68,18,44,16,2,14,85,60,88,15,69,21,96,90,14,21,64,16,76,43,70,69,18,75,96,62,56,1,3,80,11,35,60,90,16,66,54,60,44,19,89,10,50,17,49,77,62,80,40,82,13,45,67,49,29,49,85,70,13,24,43,87,85,4,99,54,44,44,92,79,7,53,13,56,64,98,32,6,56,85,78,28,19,65,53,99,69,39,93,39,10,62,77,35,83,83,66,16,63,80,26,98,12,63,42,7,42,87,16,12,61,84,57,68,5,4,62,54,15,69,95,15,79,69,99,99,25,76,13,68,27,79,54,75,50,7,73,56,24,30,37,98,69,10,10,59,48,77,24,92,100,20,94,89,34,87,88,19,85,33,96,64,31,66,73,14,76,75,80,98,29,94,14,71,52,44,18,10,28,30,38,55,11,19,76,95,58,75,100,48,55,71,32,11,99,95,82,86,62,60,58,73,69,37,31,96,67,43,94,18,55,22,69,40,30,60,7,91,70,34,70,95,74,26,71,94,40,74,77,5,18,46,19,67,71,65,43,85,5,10,85,34,3,8,88,3,30,80,30,67,60,70,96]
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.route("/data").post(numbersController.postData);

/** PATCH Methods */
    /**
     * @openapi
     * '/api/data':
     *  patch:
     *     tags:
     *     - Numbers Contoller
     *     summary: Modify a number in the array by index
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - value
     *              - index
     *            properties:
     *              value:
     *                type: number
     *                default: 20
     *              index:
     *                type: number
     *                default: 0
     *     responses:
     *      200:
     *        description: Modified
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.route("/data").patch(numbersController.patchData);

module.exports = router;