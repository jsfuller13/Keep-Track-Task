/************ 
 * Ktt Test *
 ************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'KTT';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Practice_IntroRoutineBegin());
flowScheduler.add(Practice_IntroRoutineEachFrame());
flowScheduler.add(Practice_IntroRoutineEnd());
flowScheduler.add(Practice_Intro_2RoutineBegin());
flowScheduler.add(Practice_Intro_2RoutineEachFrame());
flowScheduler.add(Practice_Intro_2RoutineEnd());
const PracticeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PracticeLoopBegin, PracticeLoopScheduler);
flowScheduler.add(PracticeLoopScheduler);
flowScheduler.add(PracticeLoopEnd);
flowScheduler.add(Ans_CueRoutineBegin());
flowScheduler.add(Ans_CueRoutineEachFrame());
flowScheduler.add(Ans_CueRoutineEnd());
flowScheduler.add(Intro_to_Full_TaskRoutineBegin());
flowScheduler.add(Intro_to_Full_TaskRoutineEachFrame());
flowScheduler.add(Intro_to_Full_TaskRoutineEnd());
const TrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TrialsLoopBegin, TrialsLoopScheduler);
flowScheduler.add(TrialsLoopScheduler);
flowScheduler.add(TrialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var Practice_IntroClock;
var key_resp;
var text;
var prac_intro_cont;
var Practice_Intro_2Clock;
var prac_intro_text;
var key_resp_2;
var prac_intr_cont;
var TrialClock;
var Stim_Word;
var Categories;
var Ans_CueClock;
var text_2;
var key_resp_5;
var Intro_to_Full_TaskClock;
var full_intro_txt;
var key_resp_3;
var full_intro_cont;
var Ready_MessageClock;
var Ready_Text;
var key_resp_4;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Practice_Intro"
  Practice_IntroClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'During this task, you will see words drawn from 6 possible categories:\n \nAnimals: Zebra, Whale, Bear\nColors: Blue, Red, Yellow\nCountries: Canada, Germany\nDistances: Miles, Inches\nMetals: Aluminum, Iron\nRelatives: Aunt, Father, Daughter\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  prac_intro_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_intro_cont',
    text: 'Press SPACE for more instructions.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Practice_Intro_2"
  Practice_Intro_2Clock = new util.Clock();
  prac_intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_intro_text',
    text: 'You will see the words presented one at a time in the center of the screen. After all the words have been presented, write down the LAST word from each of the categories.\n \nThe categories will remain at the bottom of the screen to help you remember.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  prac_intr_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'prac_intr_cont',
    text: 'Press SPACE to begin practice.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  Stim_Word = new visual.TextStim({
    win: psychoJS.window,
    name: 'Stim_Word',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Categories = new visual.TextStim({
    win: psychoJS.window,
    name: 'Categories',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Ans_Cue"
  Ans_CueClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Please write down your answers.\n\nWhen you have finished,\n\nPress SPACE for more instructions.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Intro_to_Full_Task"
  Intro_to_Full_TaskClock = new util.Clock();
  full_intro_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'full_intro_txt',
    text: "Did you write down Miles, Iron, and Aunt?\n\nIf so, good work! \nIf not, that's okay, keep trying.\n\nNow we will do a few more.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  full_intro_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'full_intro_cont',
    text: 'Press SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  Stim_Word = new visual.TextStim({
    win: psychoJS.window,
    name: 'Stim_Word',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Categories = new visual.TextStim({
    win: psychoJS.window,
    name: 'Categories',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Ready_Message"
  Ready_MessageClock = new util.Clock();
  Ready_Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Ready_Text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _key_resp_allKeys;
var Practice_IntroComponents;
function Practice_IntroRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Practice_Intro'-------
    t = 0;
    Practice_IntroClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    Practice_IntroComponents = [];
    Practice_IntroComponents.push(key_resp);
    Practice_IntroComponents.push(text);
    Practice_IntroComponents.push(prac_intro_cont);
    
    for (const thisComponent of Practice_IntroComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function Practice_IntroRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Practice_Intro'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Practice_IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *prac_intro_cont* updates
    if (t >= 0.0 && prac_intro_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_intro_cont.tStart = t;  // (not accounting for frame time here)
      prac_intro_cont.frameNStart = frameN;  // exact frame index
      
      prac_intro_cont.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Practice_IntroComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Practice_IntroRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Practice_Intro'-------
    for (const thisComponent of Practice_IntroComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Practice_Intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var Practice_Intro_2Components;
function Practice_Intro_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Practice_Intro_2'-------
    t = 0;
    Practice_Intro_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    Practice_Intro_2Components = [];
    Practice_Intro_2Components.push(prac_intro_text);
    Practice_Intro_2Components.push(key_resp_2);
    Practice_Intro_2Components.push(prac_intr_cont);
    
    for (const thisComponent of Practice_Intro_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Practice_Intro_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Practice_Intro_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Practice_Intro_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *prac_intro_text* updates
    if (t >= 0.0 && prac_intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_intro_text.tStart = t;  // (not accounting for frame time here)
      prac_intro_text.frameNStart = frameN;  // exact frame index
      
      prac_intro_text.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *prac_intr_cont* updates
    if (t >= 0.0 && prac_intr_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prac_intr_cont.tStart = t;  // (not accounting for frame time here)
      prac_intr_cont.frameNStart = frameN;  // exact frame index
      
      prac_intr_cont.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Practice_Intro_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Practice_Intro_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Practice_Intro_2'-------
    for (const thisComponent of Practice_Intro_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Practice_Intro_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Practice;
var currentLoop;
function PracticeLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Trial1.csv',
    seed: undefined, name: 'Practice'
  });
  psychoJS.experiment.addLoop(Practice); // add the loop to the experiment
  currentLoop = Practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice of Practice) {
    const snapshot = Practice.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TrialRoutineBegin(snapshot));
    thisScheduler.add(TrialRoutineEachFrame(snapshot));
    thisScheduler.add(TrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function PracticeLoopEnd() {
  psychoJS.experiment.removeLoop(Practice);

  return Scheduler.Event.NEXT;
}


var Trials;
function TrialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Choose_Trial.csv',
    seed: undefined, name: 'Trials'
  });
  psychoJS.experiment.addLoop(Trials); // add the loop to the experiment
  currentLoop = Trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of Trials) {
    const snapshot = Trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    const wordsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(wordsLoopBegin, wordsLoopScheduler);
    thisScheduler.add(wordsLoopScheduler);
    thisScheduler.add(wordsLoopEnd);
    thisScheduler.add(Ready_MessageRoutineBegin(snapshot));
    thisScheduler.add(Ready_MessageRoutineEachFrame(snapshot));
    thisScheduler.add(Ready_MessageRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var words;
function wordsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  words = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: Trial_File,
    seed: undefined, name: 'words'
  });
  psychoJS.experiment.addLoop(words); // add the loop to the experiment
  currentLoop = words;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisWord of words) {
    const snapshot = words.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(TrialRoutineBegin(snapshot));
    thisScheduler.add(TrialRoutineEachFrame(snapshot));
    thisScheduler.add(TrialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function wordsLoopEnd() {
  psychoJS.experiment.removeLoop(words);

  return Scheduler.Event.NEXT;
}


function TrialsLoopEnd() {
  psychoJS.experiment.removeLoop(Trials);

  return Scheduler.Event.NEXT;
}


var TrialComponents;
function TrialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Trial'-------
    t = 0;
    TrialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    Stim_Word.setText(word);
    Categories.setText(Trial_Cats);
    // keep track of which components have finished
    TrialComponents = [];
    TrialComponents.push(Stim_Word);
    TrialComponents.push(Categories);
    
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function TrialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Stim_Word* updates
    if (t >= 0.0 && Stim_Word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stim_Word.tStart = t;  // (not accounting for frame time here)
      Stim_Word.frameNStart = frameN;  // exact frame index
      
      Stim_Word.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Stim_Word.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Stim_Word.setAutoDraw(false);
    }
    
    // *Categories* updates
    if (t >= 0.0 && Categories.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Categories.tStart = t;  // (not accounting for frame time here)
      Categories.frameNStart = frameN;  // exact frame index
      
      Categories.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Categories.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Categories.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Trial'-------
    for (const thisComponent of TrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var Ans_CueComponents;
function Ans_CueRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Ans_Cue'-------
    t = 0;
    Ans_CueClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    Ans_CueComponents = [];
    Ans_CueComponents.push(text_2);
    Ans_CueComponents.push(key_resp_5);
    
    for (const thisComponent of Ans_CueComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Ans_CueRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Ans_Cue'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Ans_CueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Ans_CueComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ans_CueRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Ans_Cue'-------
    for (const thisComponent of Ans_CueComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Ans_Cue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var Intro_to_Full_TaskComponents;
function Intro_to_Full_TaskRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Intro_to_Full_Task'-------
    t = 0;
    Intro_to_Full_TaskClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    Intro_to_Full_TaskComponents = [];
    Intro_to_Full_TaskComponents.push(full_intro_txt);
    Intro_to_Full_TaskComponents.push(key_resp_3);
    Intro_to_Full_TaskComponents.push(full_intro_cont);
    
    for (const thisComponent of Intro_to_Full_TaskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Intro_to_Full_TaskRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Intro_to_Full_Task'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Intro_to_Full_TaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *full_intro_txt* updates
    if (t >= 0.0 && full_intro_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      full_intro_txt.tStart = t;  // (not accounting for frame time here)
      full_intro_txt.frameNStart = frameN;  // exact frame index
      
      full_intro_txt.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *full_intro_cont* updates
    if (t >= 0.0 && full_intro_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      full_intro_cont.tStart = t;  // (not accounting for frame time here)
      full_intro_cont.frameNStart = frameN;  // exact frame index
      
      full_intro_cont.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intro_to_Full_TaskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intro_to_Full_TaskRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Intro_to_Full_Task'-------
    for (const thisComponent of Intro_to_Full_TaskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Intro_to_Full_Task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var Ready_MessageComponents;
function Ready_MessageRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Ready_Message'-------
    t = 0;
    Ready_MessageClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Ready_Text.setText(Rdy_Txt);
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    Ready_MessageComponents = [];
    Ready_MessageComponents.push(Ready_Text);
    Ready_MessageComponents.push(key_resp_4);
    
    for (const thisComponent of Ready_MessageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function Ready_MessageRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Ready_Message'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Ready_MessageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Ready_Text* updates
    if (t >= 0.0 && Ready_Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ready_Text.tStart = t;  // (not accounting for frame time here)
      Ready_Text.frameNStart = frameN;  // exact frame index
      
      Ready_Text.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_4.clock.reset();
      key_resp_4.start();
      key_resp_4.clearEvents();
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Ready_MessageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ready_MessageRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Ready_Message'-------
    for (const thisComponent of Ready_MessageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Ready_Message" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
