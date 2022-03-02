import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { IQuestionnaire } from 'src/app/shared/models/Questionnaire';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit, OnChanges {

  @Input() questionnaires: Array<IQuestionnaire | any>;
  dataSource = new MatTreeNestedDataSource<IQuestionnaire>();
  treeControl = new NestedTreeControl<IQuestionnaire>(node => node.children);

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // To check here why it is not getting data from the parent component
    this.dataSource.data = this.questionnaires;
  }

  hasChild = (_: number, node: IQuestionnaire) => !!node.children && node.children.length > 0;

  deleteQuestion(ques: string): void {
    console.log(ques);
  }
}
