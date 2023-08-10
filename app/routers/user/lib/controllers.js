const {
    PlantType,
    PlantLook,
    PlantHeight,
    PlantFruits,
    PlantColor,
    PlantShape,
    Plant,
} = require('../../../models');

const controllers = {};

// controllers.addType = async (req, res) => {
//     try {
//         console.log(req.body.eType);

//         const addType = new PlantType({
//             eType: req.body.eType,
//         });

//         //log.green(addType);
//         await addType.save();
//         return res.reply(messages.successfully('Tree type added'), addType);
//     } catch (error) {
//         //log.red('error', error);
//     }
// };

// controllers.addLook = async (req, res) => {
//     try {
//         const { eType, eLook } = req.body;
//         //log.green({ eType, eLook });

//         const existingType = await PlantType.findOne({
//             eType,
//         });

//         const addLook = new PlantLook({
//             eLook: req.body.eLook,
//             oReferencePlantType: existingType._id || null,
//         });
//         console.log(addLook);
//         await addLook.save();
//         return res.reply(messages.successfully('Tree look added'), addLook);
//     } catch (error) {
//         console.log('error', error);
//     }
// };

// controllers.fruit = async (req, res) => {
//     try {
//         // console.log(req.body);
//         const { eType, eLook, eHeight, isFruit } = req.body;
//         // //log.green(eType, eLook, eHeight, isFruit);

//         const existingType = await PlantType.findOne({ eType });
//         //log.green(existingType);
//         const existingLook = await PlantLook.findOne({
//             eLook,
//             oReferencePlantType: existingType._id,
//         });
//         //log.yellow(existingLook);

//         const existingHeight = await PlantHeight.findOne({
//             eHeight,
//             oReferencePlantLook: existingLook._id,
//         });
//         //log.cyan(existingHeight);
//         const isfruit = new PlantFruits({
//             oReferencePlantType: existingType._id,
//             oReferencePlantLook: existingLook._id,
//             oReferencePlantHeight: !existingHeight ? null : existingHeight._id,
//             isFruit: isFruit,
//         });
//         //log.magenta(isfruit);
//         await isfruit.save();
//         return res.reply(messages.successfully('added'));
//     } catch (error) {
//         //log.red('error', error);
//     }
// };

// controllers.addHeight = async (req, res) => {
//     try {
//         const { eHeight, eType, eLook, isFruit } = req.body;
//         //log.green({ eHeight, eType, eLook, isFruit });

//         const existingType = await PlantType.findOne({ eType });
//         console.log(existingType);
//         const existingLook = await PlantLook.findOne({
//             eLook,
//             oReferencePlantType: existingType._id,
//         });
//         //log.yellow(existingLook);
//         const existingFruit = await PlantFruits.findOne({ isFruit });

//         const addHeight = new PlantHeight({
//             eHeight: req.body.eHeight,
//             oReferencePlantType: existingType._id || null,
//             oReferencePlantLook: !existingLook ? null : existingLook._id,
//             oReferencePlantfruit: !existingFruit ? null : existingFruit._id,
//         });
//         //log.cyan(addHeight);
//         await addHeight.save();

//         return res.reply(
//             messages.successfully('Height add successfully'),
//             addHeight
//         );
//     } catch (error) {
//         //log.red('error', error);
//     }
// };

// controllers.addShape = async (req, res) => {
//     try {
//         const { eShape, eType, eLook, eHeight, fruit } = req.body;
//         //log.yellow({ eShape, eType, eLook, eHeight, fruit });

//         const existingType = await PlantType.findOne({ eType });
//         const existingLook = await PlantLook.findOne({
//             eLook,
//             oReferencePlantType: existingType._id,
//         });
//         let existingHeight;
//         let existingfruit;
//         if (eType == 'Shrub' && eLook == 'evergreen') {
//             existingHeight = await PlantHeight.findOne({
//                 eHeight,
//                 oReferencePlantLook: existingLook._id,
//             });
//             console.log('in if height', existingHeight);

//             existingfruit = await PlantFruits.findOne({
//                 isFruit: fruit,
//                 oReferencePlantHeight: existingHeight._id,
//             });
//             console.log('in if fruit', existingfruit);
//         } else {
//             existingfruit = await PlantFruits.findOne({
//                 isFruit: fruit,
//                 oReferencePlantLook: existingLook._id,
//             });
//             console.log('in else fruit', existingfruit);

//             existingHeight = await PlantHeight.findOne({
//                 eHeight,
//                 oReferencePlantfruit:
//                     existingfruit == null ? null : existingfruit._id,
//             });
//             console.log('in else height', existingHeight);
//         }

//         const addshape = new PlantShape({
//             eShape: eShape,
//             oReferencePlantType: existingType._id,
//             oReferencePlantLook: existingLook._id,
//             oReferencePlantHeight: existingHeight._id,
//             oReferencePlantfruit: !existingfruit ? null : existingfruit._id,
//         });
//         //log.green(addshape);
//         await addshape.save();
//         return res.reply(messages.successfully('Shape added'), addshape);
//     } catch (error) {
//         console.log('error', error);
//     }
// };

// controllers.addColor = async (req, res) => {
//     try {
//         const { eColor, eType, eLook, eHeight, eShape, aSubColor } = req.body;
//         // //log.yellow({ eColor, eType, eLook, eHeight, eShape });

//         const existingType = await PlantType.findOne({ eType });

//         let existingHeight;
//         let existingLook;
//         let existingShape;
//         if (eType == 'Perennial') {
//             existingHeight = await PlantHeight.findOne({
//                 eHeight,
//                 oReferencePlantType: existingType,
//             });

//             console.log('in if height', existingHeight);
//         } else {
//             console.log('******');
//             existingLook = await PlantLook.findOne({
//                 eLook,
//                 oReferencePlantType: existingType._id,
//             });
//             console.log('in else look', existingLook);

//             existingHeight = await PlantHeight.findOne({
//                 eHeight,
//                 oReferencePlantLook: existingLook._id,
//             });
//             console.log('in else height', existingHeight);
//             existingShape = await PlantShape.findOne({
//                 eShape,
//                 oReferencePlantHeight: existingHeight._id,
//             });
//             console.log('in else shape', existingShape);
//         }
//         // const existingLook = await PlantLook.findOne({ eLook });
//         // const existingShape = await PlantShape.findOne({ eShape });

//         const color = new PlantColor({
//             eColor: eColor,
//             aSubColor: aSubColor || null,
//             oReferencePlantType: existingType._id,
//             oReferencePlantHeight: existingHeight._id,
//             oReferencePlantLook: !existingLook ? null : existingLook._id,
//             oReferencePlantShape: !existingShape ? null : existingShape._id,
//         });
//         //log.green(color);
//         await color.save();
//         return res.reply(messages.successfully('color added'), color);
//     } catch (error) {
//         //log.red('error', error);
//     }
// };

controllers.listQuery1 = async (req, res) => {
    try {
        const { eType } = req.body;

        const existingTree = await PlantType.findOne({
            eType,
        });
        // //log.yellow(existingTree);
        const treeID = existingTree._id;
        if (eType == 'Tree') {
            //log.yellow(treeID);
            const data1 = await PlantLook.find({
                oReferencePlantType: treeID,
            });
            // console.log(data1);
            return res.reply(messages.success(), data1);
        }
        if (eType == 'Shrub') {
            const dataShrub = await PlantLook.find({
                oReferencePlantType: treeID,
            });
            // console.log(dataShrub);
            return res.reply(messages.success(), dataShrub);
        }
        if (eType == 'Perennial') {
            //log.cyan(treeID);
            const dataperennial = await PlantHeight.find({
                oReferencePlantType: treeID,
            });
            // console.log(dataperennial);
            return res.reply(messages.success(), dataperennial);
        }
    } catch (error) {
        // console.log('Error', error);
        //log.red('error', error);
        return _.catchServerError('error', error, res);
    }
};

controllers.listQuery2 = async (req, res) => {
    try {
        const { eLook, eHeight, eType } = req.body;
        //log.green(eLook);
        const existingType = await PlantType.findOne({ eType });
        // const typeId = existingType._id;
        const existingLook = await PlantLook.findOne({
            eLook,
            oReferencePlantType: existingType._id,
        });
        // console.log(existingLook);
        // const lookId = existingLook._id;
        if (eType == 'Tree' && eLook == 'evergreen') {
            const heightdata = await PlantHeight.find({
                oReferencePlantLook: existingLook._id,
            });
            //log.cyan(heightdata);
            return res.reply(messages.success(), heightdata);
        } else if (eType == 'Tree' && eLook == 'deciduous') {
            const isFruitdata = await PlantFruits.find({
                oReferencePlantLook: existingLook._id,
            });
            //log.cyan(isFruitdata);
            return res.reply(messages.success(), isFruitdata);
        }
        if (eType == 'Shrub') {
            const heightShrubdata = await PlantHeight.find({
                oReferencePlantLook: existingLook._id,
            });
            //log.cyan(heightShrubdata);
            return res.reply(messages.success(), heightShrubdata);
        }

        if (eType == 'Perennial') {
            // console.log('in perennial');
            const heightPerennialdata = await PlantHeight.findOne({
                eHeight,
                oReferencePlantType: existingType._id,
            });
            // console.log('height', heightPerennialdata);
            // console.log(existingType._id);
            // console.log(heightPerennialdata._id);
            const colorPerennialData = await PlantColor.find({
                // oReferencePlantType: existingType._id,
                oReferencePlantHeight: heightPerennialdata._id,
            });
            //log.cyan(colorPerennialData);
            return res.reply(messages.success(), colorPerennialData);
        }
    } catch (error) {
        //log.red('error', error);
        return _.catchServerError('error', error, res);
    }
};

controllers.listQuery3 = async (req, res) => {
    try {
        const { eType, eLook, eHeight, isFruit, eColor, eShape } = req.body;

        const existingType = await PlantType.findOne({ eType });
        const existingLook = await PlantLook.findOne({
            eLook,
            oReferencePlantType: existingType._id,
        });
        if (eType == 'Tree') {
            const heightdata = await PlantHeight.findOne({
                eHeight,
                oReferencePlantType: existingType._id,
            });
            if (eLook == 'evergreen') {
                // console.log('height', heightdata);
                const shapeTreeData = await PlantShape.find({
                    oReferencePlantHeight: heightdata._id,
                });
                // //log.green(shapeTreeData);
                return res.reply(messages.success(), shapeTreeData);
            } else {
                // console.log('*******');
                const fruitTree = await PlantFruits.findOne({
                    isFruit,
                    oReferencePlantType: existingType._id,
                });
                // console.log('Fruit tree', fruitTree._id);

                const heighttree = await PlantHeight.find({
                    oReferencePlantType: existingType._id,
                    oReferencePlantLook: existingLook._id,
                    oReferencePlantfruit: fruitTree._id,
                });
                //log.green(heighttree);
                return res.reply(messages.success(), heighttree);
            }
        }

        if (eType == 'Shrub') {
            const shrubHeight = await PlantHeight.findOne({
                eHeight,
                oReferencePlantType: existingType._id,
                oReferencePlantLook: existingLook._id,
            });
            if (eLook == 'deciduous') {
                // console.log(shrubHeight);
                const shrubShape = await PlantShape.find({
                    oReferencePlantHeight: shrubHeight._id,
                });
                //log.green(shrubShape);
                return res.reply(messages.success(), shrubShape);
            } else {
                // console.log(shrubHeight);

                const fruitShrub = await PlantFruits.find({
                    oReferencePlantType: existingType._id,
                    oReferencePlantHeight: shrubHeight._id,
                });
                //log.green(fruitShrub);
                return res.reply(messages.success(), fruitShrub);
            }
        }

        if (eType == 'Perennial') {
            const perennialHeight = await PlantHeight.findOne({
                eHeight,
                oReferencePlantType: existingType._id,
            });
            if (eColor == 'Red') {
                const colorperennial = await PlantColor.find({
                    eColor,
                    oReferencePlantType: existingType._id,
                    oReferencePlantHeight: perennialHeight._id,
                });
                //log.green(colorperennial);
                return res.reply(messages.success(), colorperennial);
            } else {
                const addData = new Plant({
                    eType: eType,
                    eLook: eLook || null,
                    eHeight: eHeight,
                    isFruit: isFruit || null,
                    eShape: eShape || null,
                    eColor: eColor,
                });
                //log.cyan(addData);
                await addData.save();
                return res.reply(messages.success(), addData);
            }
        }
    } catch (error) {
        //log.red('error', error);
        return _.catchServerError('error', error, res);
    }
};

controllers.listQuery4 = async (req, res) => {
    try {
        const { eType, eLook, eHeight, eShape, isFruit, eColor, aSubColor } =
            req.body;
        const existingType = await PlantType.findOne({ eType });
        const existingLook = await PlantLook.findOne({
            eLook,
            oReferencePlantType: existingType._id,
        });

        if (eType == 'Tree') {
            if (eLook == 'evergreen') {
                const addData = new Plant({
                    eType: eType,
                    eLook: eLook,
                    eHeight: eHeight,
                    eShape: eShape,
                    eColor: eColor || null,
                    isFruit: isFruit || null,
                });
                //log.cyan(addData);
                await addData.save();
                return res.reply(messages.success(), addData);
            }
            const fruitTree = await PlantFruits.findOne({
                isFruit,
                oReferencePlantType: existingType._id,
            });
            // //log.green(fruitTree);
            const treeheight = await PlantHeight.findOne({
                eHeight,
                oReferencePlantLook: existingLook._id,
                oReferencePlantfruit: fruitTree._id,
            });
            // console.log(treeheight);
            const shapetree = await PlantShape.find({
                oReferencePlantHeight: treeheight._id,
            });
            // //log.green(shapetree);
            return res.reply(messages.success(), shapetree);
        }
        if (eType == 'Shrub') {
            const shrubheight = await PlantHeight.findOne({
                eHeight,
                oReferencePlantLook: existingLook._id,
            });
            // console.log(shrubheight);
            if (eLook == 'deciduous') {
                const shrubshape = await PlantShape.findOne({
                    eShape,
                    oReferencePlantHeight: shrubheight._id,
                });
                //log.green(shrubshape);
                const shrubcolor = await PlantColor.find({
                    oReferencePlantShape: shrubshape._id,
                });
                //log.cyan(shrubcolor);
                return res.reply(messages.success(), shrubcolor);
            } else {
                const fruitshrub = await PlantFruits.findOne({
                    isFruit,
                    oReferencePlantHeight: shrubheight._id,
                });
                // console.log(fruitshrub);
                // eslint-disable-next-line camelcase
                const shape_shrub = await PlantShape.find({
                    oReferencePlantfruit: fruitshrub._id,
                });
                //log.cyan(shape_shrub);
                return res.reply(messages.success(), shape_shrub);
            }
        }

        if (eType == 'Perennial') {
            const perennialHeight = await PlantHeight.findOne({
                eHeight,
                oReferencePlantType: existingType._id,
            });
            const colorperennial = await PlantColor.find({
                eColor,
                oReferencePlantType: existingType._id,
                oReferencePlantHeight: perennialHeight._id,
            });
            //log.green(colorperennial);

            const addData = new Plant({
                eType: eType,
                eLook: eLook || null,
                eHeight: eHeight,
                isFruit: isFruit || null,
                eShape: eShape || null,
                eColor: eColor,
                aSubcolor: aSubColor,
            });
            //log.cyan(addData);
            await addData.save();
            return res.reply(messages.success(), addData);
        }
    } catch (error) {
        //log.red('error', error);
        return _.catchServerError('error', error, res);
    }
};

controllers.listQuery5 = async (req, res) => {
    try {
        const { eColor, eType, eLook, eHeight, eShape, isFruit } = req.body;
        const existingType = await PlantType.findOne({ eType });
        const existingLook = await PlantLook.findOne({
            eLook,
            oReferencePlantType: existingType._id,
        });

        if (eType == 'Tree') {
            const addData = new Plant({
                eType: eType,
                eLook: eLook,
                eHeight: eHeight,
                isFruit: isFruit,
                eShape: eShape,
                eColor: eColor || null,
            });
            //log.cyan(addData);
            await addData.save();
            return res.reply(messages.success(), addData);
        }
        if (eType == 'Shrub') {
            if (eLook == 'deciduous') {
                if (eColor == 'Red') {
                    const heightshrub = await PlantHeight.findOne({
                        eHeight,
                        oReferencePlantLook: existingLook._id,
                    });
                    //log.yellow(heightshrub);
                    const shrubShape = await PlantShape.findOne({
                        eShape,
                        oReferencePlantHeight: heightshrub._id,
                    });
                    //log.green(shrubShape);
                    const subColor = await PlantColor.find({
                        eColor,
                        oReferencePlantShape: shrubShape._id,
                        oReferencePlantHeight: heightshrub._id,
                    });

                    //log.cyan(subColor);
                    return res.reply(messages.success(), subColor);
                } else {
                    const addData = new Plant({
                        eType: eType,
                        eLook: eLook,
                        eHeight: eHeight,
                        isFruit: isFruit,
                        eShape: eShape,
                        eColor: eColor,
                    });
                    //log.green(addData);
                    await addData.save();
                    return res.reply(messages.success(), addData);
                }
            } else {
                const addData = new Plant({
                    eType: eType,
                    eLook: eLook,
                    eHeight: eHeight,
                    isFruit: isFruit,
                    eShape: eShape,
                    eColor: eColor || null,
                });
                //log.green(addData);
                await addData.save();
                return res.reply(messages.success(), addData);
            }
        }
    } catch (error) {
        //log.red('error', error);
        return _.catchServerError('error', error, res);
    }
};

controllers.listQuery6 = async (req, res) => {
    try {
        const { eColor, eHeight, eType, eLook, isFruit, aSubcolor, eShape } =
            req.body;
        const existingType = await PlantType.findOne({ eType });
        const perennialHeight = await PlantHeight.findOne({
            eHeight,
            oReferencePlantType: existingType._id,
        });
        const colorperennial = await PlantColor.find({
            eColor,
            oReferencePlantType: existingType._id,
            oReferencePlantHeight: perennialHeight._id,
        });
        //log.green(colorperennial);

        const addData = new Plant({
            eType: eType,
            eLook: eLook || null,
            eHeight: eHeight,
            isFruit: isFruit || null,
            eShape: eShape || null,
            eColor: eColor,
            aSubcolor: aSubcolor,
        });
        //log.cyan(addData);
        await addData.save();
        return res.reply(messages.success(), addData);
    } catch (error) {
        log.red('error', error);
        return _.catchServerError('error', error, res);
    }
};
module.exports = controllers;
