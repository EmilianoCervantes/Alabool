import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { KnowledgebaseService } from '../../../services/knowledgebase.service';

@Component({
  selector: 'app-knowledge-create',
  templateUrl: './knowledge-create.component.html',
  styleUrls: ['./knowledge-create.component.scss']
})
export class KnowledgeCreateComponent implements OnInit {
    id: string;
    editMode = false;
    knowledgebaseForm: FormGroup;

    constructor(private route: ActivatedRoute, private knowledgebaseService: KnowledgebaseService,
                 private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe( (params: Params) => {
            this.id = ""+params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
        });
    }

    onSubmit() {
        this.knowledgebaseService.addKnowledge(this.knowledgebaseForm.value);
        this.knowledgebaseForm.reset();
        //this.onSave(); // Hace una petición POST para ser almacenado.
    }
    
    /*onSave() {
        this.knowledgebaseService.storageTickets()
            .subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }*/

    private initForm() {
        let knowledgeTitle = '';
        let knowledgeOrigin = '';
        let knowledgeDescription = '';
        let knowledgeSolution = '';

        if (this.editMode) {
            const knowledge = this.knowledgebaseService.getKnowledge(this.id);
            knowledgeTitle = knowledge.title;
            //knowledgeOrigin = knowledge.origin;
            knowledgeDescription = knowledge.description;
            knowledgeSolution = knowledge.solution;
        }

        this.knowledgebaseForm = new FormGroup({
            'title': new FormControl(knowledgeTitle, Validators.required),
            //'origin': new FormControl(knowledgeOrigin, Validators.required),
            'description': new FormControl(knowledgeDescription, Validators.required),
            'solution': new FormControl(knowledgeSolution, Validators.required)
        });
    }

}
