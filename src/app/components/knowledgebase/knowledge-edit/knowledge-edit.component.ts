import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { KnowledgebaseService } from '../../../services/knowledgebase.service';

@Component({
    selector: 'app-knowledge-edit',
    templateUrl: './knowledge-edit.component.html',
    styleUrls: ['./knowledge-edit.component.scss']
})
export class KnowledgeEditComponent implements OnInit {
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

    private initForm() {
        let knowledgeTitle = '';
        //let knowledgeOrigin = '';
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
