const { QueryTypes} = require('sequelize');
const sequelize = require('../settings/database')
const mailer = require('../settings/mailer');
const ejs = require('ejs');
const path = require('path');

const aniversario_by_month = async (req,res) => {
        // const queryObject = {
        //         option: 3
        // }
        sequelize.query('EXEC sp_busca_aniversario', {
                // replacements: queryObject,
                type: QueryTypes.SELECT
        })
        .then(response => {
                var index = 0;
                response.forEach(element => {
                        index++;
                        element.index = index;

                        var dataRendered = {
                                data: response,
                                index: index
                        }
        
                        var emailTo = element.email;
                        var nombreCompleto = element.nombre_completo;

                        if(emailTo != 'pvillagomez@ecotec.edu.ec' ){
                                emailTo = 'rochoa@ecotec.edu.ec';
                        }
                       
                        paint_view_pair(dataRendered, res, emailTo, nombreCompleto);
                        
                });

                

                

        })
        .catch(error => res.json(error));

}


const paint_view_pair = (dataRendered, res, emailTo, nombreCompleto)=>{
        ejs.renderFile(path.join(__dirname, '../views/aniversario.ejs'), dataRendered)
                .then(resultView => {

                        var rendered = resultView;

                        console.log(emailTo);

                        var mailOptions = {
                                from: '"ECOTEC ORGANIZACIONAL" <birthday@ecotec.edu.ec>',
                                to: `${emailTo}`,
                                bcc: [
                                        // 'administrativos@ecotec.edu.ec',
                                        // 'decanos@ecotec.edu.ec',
                                        // 'docentestcompleto@ecotec.edu.ec',
                                        // 'directivos@ecotec.edu.ec',
                                        // 'smt@ecotec.edu.ec',
                                        // 'dposgrado@ecotec.edu.ec',
                                        // 'docentetiempocompletod@ecotec.edu.ec',
                                        // 'docentesmediotiempo@ecotec.edu.ec'
                                        'roberthochoa2612@gmail.com',
                                        'desarrollosistemas@ecotec.edu.ec',
                                        'pvillagomez@ecotec.edu.ec'
                                ],
                                subject: `FELIZ ANIVERSARIO ${nombreCompleto}`,
                                html: rendered
                        };
        
                        mailer.mailerTransport.sendMail(mailOptions)
                        .then((info)=>{
                                res.status(201)
                                .json({
                                        message: `Email sent: ${info.response}`
                                })
                        })
                        .catch(error => console.log(`Error: ${error}`));
                })
                .catch(error => console.log(error));
}





exports.aniversario_by_month = aniversario_by_month;