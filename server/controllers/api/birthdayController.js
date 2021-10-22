const { QueryTypes} = require('sequelize');
const sequelize = require('../../settings/database');


const birthday_by_month = (req, res) => {
        var currentDatetime = new Date();
        const queryObject = {
                option: 3
        }
        sequelize.query('EXEC sp_busca_cumpleañeros :option', {
                replacements: queryObject,
                type: QueryTypes.SELECT
        })
        .then(response => {
                var index = 0;
                response.forEach(element => {
                        index++;
                        element.index = index;
                });
                res.json({response});
               
               
        })
        .catch(error => res.json(error));

}

exports.birthday_by_month = birthday_by_month;