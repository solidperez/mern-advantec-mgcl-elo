import express from 'express';
import * as docCtrl from '../controllers/doc.controller';
// import validate from '../config/joi.validate';
// import schema from '../utils/validator';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: doc
 *     description: doc operations
 */

/**
 * @swagger
 * definitions:
 *   doc:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         description: Unique identifier representing a specific doc
 *         example: 2
 *       ID:
 *         type: string
 *         description: ID of the doc
 *         example: Krishna
 *       FileName:
 *         type: string
 *         description: FileName of the doc
 *         example: Timilsina
 *       DocType:
 *         type: string
 *         description: DocType of the doc
 *       RunDate:
 *         type: string
 *         description: RunDate of the doc
 *       Logger:
 *         type: string
 *         description: Logger of the doc
 *       Well_ID:
 *         type: string
 *         description: Well_ID of the doc
 *       AddedDate:
 *         type: string
 *         description: AddedDate of the doc
 *       created_at:
 *         type: string
 *         format: date-time
 *         description: doc creation datetime
 *       updated_at:
 *         type: string
 *         format: date-time
 *         description: doc update datetime
 *   Error:
 *     type: object
 *     properties:
 *        message:
 *           type: string
 *        error:
 *           type: boolean
 *           default: true
 */

router.route('/')

/**
 * @swagger
 * /docs:
 *   get:
 *     tags:
 *       - doc
 *     summary: "List all docs"
 *     operationId: findAll
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: "wells"
 *         in: "query"
 *         description: "Query for Products with same wells"
 *         type: "array"
 *         default: []
 *       - name: "state"
 *         in: "query"
 *         description: "Query for Products with same state"
 *         type: "string"
 *         default: ""
 *       - name: "county"
 *         in: "query"
 *         description: "Query for Products with same county"
 *         type: "string"
 *         default: ""
 *       - name: "meridian"
 *         in: "query"
 *         description: "Query for Products with same meridian"
 *         type: "string"
 *         default: ""
 *       - name: "section"
 *         in: "query"
 *         description: "Query for Products with same section"
 *         type: "string"
 *         default: ""
 *       - name: "township"
 *         in: "query"
 *         description: "Query for Products with same township"
 *         type: "string"
 *         default: ""
 *       - name: "range"
 *         in: "query"
 *         description: "Query for Products with same range"
 *         type: "string"
 *         default: ""
 *       - name: "keyword"
 *         in: "query"
 *         description: "Query for Products with same keyword"
 *         type: "string"
 *         default: ""
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *            type: object
 */

.get( (req, res) => {
    docCtrl.findAll(req, res);
});

export default router;