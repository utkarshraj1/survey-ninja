import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { IQuestionnaire } from 'src/app/shared/models/Questionnaire';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit, OnChanges {

  @Input() questionnaires: Array<IQuestionnaire>;
  dataSource = new MatTreeNestedDataSource<IQuestionnaire>();
  treeControl = new NestedTreeControl<IQuestionnaire>(node => node.children);

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.shared.questionnaireData.subscribe(ques => {
      this.questionnaires.push(ques);
      this.dataSource.data = this.questionnaires;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // setTimeout(() => {

    // }, 1000);
  }

  hasChild = (_: number, node: IQuestionnaire) => !!node.children && node.children.length > 0;

  deleteQuestion(ques: string): void {
    console.log(ques);
  }
}
