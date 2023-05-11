import { Router, Request, Response } from 'express';
import { Colaborator } from '../models/product.model';

const router = Router();

const colaborators: Array<Colaborator> = [
    {
        id: 1,
        name: 'Nathan',
        wage: 7500,
        ocupation: 'Desenvolvedor',
        openToWork: false,
    },
    {
      id: 2,
      name: 'Alan',
      wage: 7500,
      ocupation: 'Desenvolvedor',
      openToWork: false,
    },
    {
      id: 3,
      name: 'Pedro',
      wage: 3500,
      ocupation: 'Desenvolvedor Junior',
      openToWork: true,
    },
    {
      id: 4,
      name: 'Victoria',
      wage: 7500,
      ocupation: 'Médica',
      openToWork: true,
    },
    {
      id: 5,
      name: 'Isadora',
      wage: 3500,
      ocupation: 'Designer',
      openToWork: true,
    }
];

router.get('/all', (req: Request, res: Response) => {
    res.send(colaborators);
});

router.get('/:id', (req: Request, res: Response) => {
    res.send(colaborators.find((colaborator) => colaborator.id === parseInt(req.params.id)));
});

router.post('/create', (req: Request, res: Response) => {
    const colaborator = req.body;
    colaborator.id = (colaborators[(colaborators.length - 1)].id + 1);
    colaborators.push(colaborator);
    res.status(201).send({ message: 'Colaborador criado com sucesso!' });

});

router.put('/update/:id', (req: Request, res: Response) => {
    const colaborator = req.body;
    const id = parseInt(req.params.id);
    const colaboratorIndex = colaborators.findIndex((p) => p.id === id);
    if(colaboratorIndex === -1) res.status(404).send({ message: 'Colaborador não encontrado para fazer atualização!' });
    colaborators[colaboratorIndex] = colaborator;
    res.status(200).send({ message: 'Colaborador atualizado com sucesso!' });
});

router.delete('/remove/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const colaboratorIndex = colaborators.findIndex((colaborator) => colaborator.id === id);
    if(colaboratorIndex === -1) res.status(404).send({ message: 'Colaborador não encontrado para fazer a remoção!' });
    colaborators.splice(colaboratorIndex, 1);
    res.status(200).send({ message: 'Colaborador excluído com sucesso!' });
});

export default router;
