/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var AnalyzerXpathDesc = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[5,7,20],$V1=[2,15],$V2=[1,5],$V3=[1,6],$V4=[1,10],$V5=[1,12],$V6=[1,15],$V7=[1,16],$V8=[5,7,9,11,24,51,52,53,54,55,56,57,58,62,63,64,65],$V9=[1,21],$Va=[1,23],$Vb=[5,7,9,11,20,24,51,52,53,54,55,56,57,58,62,63,64,65],$Vc=[2,51],$Vd=[1,28],$Ve=[2,5,7,8,9,11,18,20,24,51,52,53,54,55,56,57,58,62,63,64,65],$Vf=[2,5,7,9,11,18,20,24,51,52,53,54,55,56,57,58,62,63,64,65],$Vg=[1,45],$Vh=[1,44],$Vi=[1,43],$Vj=[1,47],$Vk=[1,48],$Vl=[1,49],$Vm=[1,50],$Vn=[1,51],$Vo=[1,52],$Vp=[1,53],$Vq=[1,54],$Vr=[18,21,24,27,28,29,34,36,37,38,39,41,42,43],$Vs=[9,20,24,51,52,53,54,55,56,57,58,62,63,64,65],$Vt=[1,63],$Vu=[1,65],$Vv=[1,66],$Vw=[1,70],$Vx=[1,71],$Vy=[9,51,52],$Vz=[9,11,51,52,53,54,55,56,57,58],$VA=[9,11,24,51,52,53,54,55,56,57,58,62,63,64,65],$VB=[9,20,24,51,52,62,63,64,65],$VC=[9,11,20,24,51,52,53,54,55,56,57,58,62,63,64,65];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INIT":3,"CONSULTAS_XPATH":4,"eof":5,"CONSULTA_XPATH":6,"operador_o":7,"corchete_abierto":8,"corchete_cerrado":9,"parentesis_abierto":10,"parentesis_cerrado":11,"RELATIVA":12,"EXPRESIONES_RUTA":13,"PUNTOS":14,"EXPRESION_RUTA":15,"DIAGONALES":16,"ACCESORES":17,"identificador":18,"OPCIONAL_PREDICADO":19,"diagonal":20,"punto":21,"ID":22,"ATRIBUTO":23,"multiplicacion":24,"NODE":25,"TEXT":26,"text":27,"node":28,"arroba":29,"EJE":30,"EJES":31,"dos_puntos":32,"ACCESORES_EJE":33,"ancestor":34,"or-self":35,"attribute":36,"child":37,"descendant":38,"following":39,"sibling":40,"parent":41,"preceding":42,"self":43,"PREDICADOS":44,"PREDICADO":45,"FILTRO":46,"FILTRO_P1":47,"FILTRO_P2":48,"EXPR":49,"AUX_EXPR":50,"and":51,"or":52,"igual":53,"diferente":54,"mayor":55,"menor":56,"mayor_igual":57,"menor_igual":58,"EXPR_P1":59,"EXPR_P2":60,"TIPOS":61,"suma":62,"resta":63,"division":64,"mod":65,"string":66,"digito":67,"last":68,"position":69,"$accept":0,"$end":1},
terminals_: {2:"error",5:"eof",7:"operador_o",8:"corchete_abierto",9:"corchete_cerrado",10:"parentesis_abierto",11:"parentesis_cerrado",18:"identificador",20:"diagonal",21:"punto",24:"multiplicacion",27:"text",28:"node",29:"arroba",32:"dos_puntos",34:"ancestor",35:"or-self",36:"attribute",37:"child",38:"descendant",39:"following",40:"sibling",41:"parent",42:"preceding",43:"self",51:"and",52:"or",53:"igual",54:"diferente",55:"mayor",56:"menor",57:"mayor_igual",58:"menor_igual",62:"suma",63:"resta",64:"division",65:"mod",66:"string",67:"digito",68:"last",69:"position"},
productions_: [0,[3,2],[3,2],[4,3],[4,1],[4,3],[4,3],[6,1],[6,1],[6,2],[13,2],[13,1],[13,2],[15,3],[15,2],[12,0],[12,2],[16,2],[16,1],[14,1],[14,2],[17,2],[17,2],[17,2],[17,1],[17,1],[17,1],[26,3],[25,3],[23,2],[23,2],[22,1],[22,1],[30,4],[33,1],[33,1],[33,1],[33,1],[31,1],[31,2],[31,1],[31,1],[31,2],[31,1],[31,1],[31,2],[31,1],[31,1],[31,2],[31,1],[19,1],[19,0],[44,2],[44,1],[44,3],[45,3],[46,2],[47,2],[47,2],[48,2],[48,2],[48,0],[50,2],[50,2],[50,2],[50,2],[50,2],[50,2],[50,0],[49,2],[49,3],[59,3],[59,1],[60,2],[60,2],[60,2],[60,2],[60,2],[60,0],[61,1],[61,1],[61,1],[61,1],[61,1],[61,3],[61,3],[61,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        console.log('\nexito al analizar\n');
        return $$[$0-1];
    
break;
case 2:

        erroresXpath.agregarError("Sintactico","Errores seguidos"+yytext,this._$.first_line,this._$.first_column);
        return [];
    
break;
case 3:
$$[$0].unshift($$[$0-2]); this.$ = $$[$0];
break;
case 4:
this.$ = [$$[$0]]
break;
case 5:

        this.$ = [];
        erroresXpath.agregarError("Sintactico","No puede venir un predicado como un nodo\n"+yytext,this._$.first_line,this._$.first_column);
    
break;
case 6:

        this.$ = [];
        erroresXpath.agregarError("Sintactico","No puede venir una expresion como un nodo\n"+yytext,this._$.first_line,this._$.first_column);
    
break;
case 7:
this.$ = [new ConsultaSimple($$[$0])];
break;
case 8: case 11: case 32: case 34: case 35: case 36: case 37: case 38: case 40: case 41: case 43: case 44: case 46: case 47: case 49:
this.$ = $$[$0];
break;
case 9:

        this.$ = [];
        if ($$[$0-1] === "punto") {
            $$[$0].forEach(e => this.$.unshift(e));
        }
        $$[$0].forEach(e => this.$.push(e));
    
break;
case 10:
$$[$0-1].reverse().forEach(e => $$[$0].unshift(e)); this.$ = $$[$0];
break;
case 12:

        this.$ = [];
        erroresXpath.agregarError("Sintactico","Consulta no aceptada:\n"+yytext,this._$.first_line,this._$.first_column);
    
break;
case 13:

        this.$ = [];
        if (!($$[$0-2] === "")) {
            this.$.push(new ConsultaSimple($$[$0-2]));
        }
        this.$.push(FabricaConsulta.fabricar($$[$0-1], $$[$0].id, $$[$0].eje));
    
break;
case 14:

        erroresXpath.agregarError("Sintactico",yytext,this._$.first_line,this._$.first_column);
        this.$ = [];
    
break;
case 15:
this.$ = "";
break;
case 16: case 21:
this.$ = $$[$0-1];
break;
case 17:
this.$ = "doble";
break;
case 18:
this.$ = "simple";
break;
case 19:
this.$ = "punto";
break;
case 20:
this.$ = "puntos";
break;
case 22: case 23:
this.$ = {id: $$[$0-1], eje: ""};
break;
case 24: case 25: case 26: case 31:
this.$ = {id: $$[$0], eje: ""};
break;
case 27: case 28:
this.$ = $$[$0-2] + "()";
break;
case 29: case 30:
this.$ = $$[$0-1] + $$[$0];
break;
case 33:
this.$ = {id: $$[$0], eje: $$[$0-3]}
break;
case 39: case 42: case 45: case 48:
this.$ = $$[$0-1]+$$[$0];
break;
case 54:

        erroresXpath.agregarError("Sintactico","Error en predicado\n"+yytext,this._$.first_line,this._$.first_column);
    
break;
case 70:

        erroresXpath.agregarError("Sintactico","Error dentro expresion\n"+yytext,this._$.first_line,this._$.first_column);
    
break;
}
},
table: [o($V0,$V1,{3:1,4:2,6:4,12:7,13:8,14:9,15:11,2:[1,3],8:$V2,10:$V3,18:$V4,21:$V5}),{1:[3]},{5:[1,13]},{5:[1,14],7:$V6,18:$V7},{5:[2,4],7:[1,17]},{2:[1,18]},{2:[1,19]},o($V8,[2,7],{16:20,20:$V9}),o($V8,[2,8]),{2:$Va,12:24,13:22,15:11,18:$V4,20:$V1},o($Vb,$Vc,{19:25,44:26,45:27,8:$Vd}),o($V8,[2,11],{15:11,12:24,13:29,2:$Va,18:$V4,20:$V1}),o($Ve,[2,19],{21:[1,30]}),{1:[2,1]},{1:[2,2]},o($V8,[2,12]),o($Vf,[2,14]),o($V0,$V1,{6:4,12:7,13:8,14:9,15:11,4:31,2:$Va,8:$V2,10:$V3,18:$V4,21:$V5}),{9:[1,32]},{11:[1,33]},{14:37,17:34,18:[1,41],21:$V5,22:35,23:36,24:[1,38],25:39,26:40,27:$Vg,28:$Vh,29:$Vi,30:42,31:46,34:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,41:$Vo,42:$Vp,43:$Vq},o($Vr,[2,18],{20:[1,55]}),o($V8,[2,9]),{7:$V6,18:$V7},{16:20,20:$V9},o($Vb,[2,16]),o($Vf,[2,50]),o($Vf,[2,53],{45:27,44:56,8:$Vd}),o($Vs,$V1,{12:7,13:8,15:11,31:46,46:58,47:59,49:60,30:61,59:62,61:64,23:67,14:68,6:69,26:72,2:[1,57],10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,34:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,41:$Vo,42:$Vp,43:$Vq,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($V8,[2,10]),o($Ve,[2,20]),{5:[2,3]},{5:[2,5]},{5:[2,6]},o($Vf,[2,13]),o($Vf,$Vc,{44:26,45:27,19:73,8:$Vd}),o($Vf,$Vc,{44:26,45:27,19:74,8:$Vd}),o($Vf,$Vc,{44:26,45:27,19:75,8:$Vd}),o($Vf,[2,24]),o($Vf,[2,25]),o($Vf,[2,26]),o($Ve,[2,31]),o($Ve,[2,32]),{18:[1,76],24:[1,77]},{10:[1,78]},{10:[1,79]},{32:[1,80]},{32:[2,38],35:[1,81]},{32:[2,40]},{32:[2,41]},{32:[2,43],35:[1,82]},{32:[2,44],40:[1,83]},{32:[2,46]},{32:[2,47],40:[1,84]},{32:[2,49]},o($Vr,[2,17]),o($Vf,[2,52]),{7:$V6,9:[1,85],18:$V7},{9:[1,86]},{9:[2,61],48:87,51:[1,88],52:[1,89]},o($Vy,[2,68],{50:90,53:[1,91],54:[1,92],55:[1,93],56:[1,94],57:[1,95],58:[1,96]}),o($Vy,$Vc,{44:26,45:27,19:97,8:$Vd}),o($Vz,[2,78],{60:98,24:[1,101],62:[1,99],63:[1,100],64:[1,102],65:[1,103]}),o([11,20,24,62,63,64,65],$V1,{12:7,13:8,15:11,59:62,61:64,23:67,14:68,6:69,26:72,49:105,2:[1,104],10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($VA,[2,72]),o($VA,[2,79]),o($VA,[2,80]),o($VA,[2,81]),o($VA,[2,82],{15:11,13:22,12:24,2:$Va,18:$V4,20:$V1}),o($VA,[2,83]),{10:[1,106]},{10:[1,107]},o($VA,[2,86]),o($Vf,[2,21]),o($Vf,[2,22]),o($Vf,[2,23]),o($Ve,[2,29]),o($Ve,[2,30]),{11:[1,108]},{11:[1,109]},{32:[1,110]},{32:[2,39]},{32:[2,42]},{32:[2,45]},{32:[2,48]},o($Vf,[2,54]),o($Ve,[2,55]),{9:[2,56]},o($Vs,$V1,{12:7,13:8,15:11,31:46,47:59,49:60,30:61,59:62,61:64,23:67,14:68,6:69,26:72,46:111,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,34:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,41:$Vo,42:$Vp,43:$Vq,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($Vs,$V1,{12:7,13:8,15:11,31:46,47:59,49:60,30:61,59:62,61:64,23:67,14:68,6:69,26:72,46:112,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,34:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,41:$Vo,42:$Vp,43:$Vq,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($Vy,[2,57]),o($VB,$V1,{12:7,13:8,15:11,59:62,61:64,23:67,14:68,6:69,26:72,49:113,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($VB,$V1,{12:7,13:8,15:11,59:62,61:64,23:67,14:68,6:69,26:72,49:114,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($VB,$V1,{12:7,13:8,15:11,59:62,61:64,23:67,14:68,6:69,26:72,49:115,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($VB,$V1,{12:7,13:8,15:11,59:62,61:64,23:67,14:68,6:69,26:72,49:116,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($VB,$V1,{12:7,13:8,15:11,59:62,61:64,23:67,14:68,6:69,26:72,49:117,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($VB,$V1,{12:7,13:8,15:11,59:62,61:64,23:67,14:68,6:69,26:72,49:118,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($Vy,[2,58]),o($Vz,[2,69]),o($VC,$V1,{12:7,13:8,15:11,59:62,61:64,23:67,14:68,6:69,26:72,49:119,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($VC,$V1,{12:7,13:8,15:11,59:62,61:64,23:67,14:68,6:69,26:72,49:120,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($VC,$V1,{12:7,13:8,15:11,59:62,61:64,23:67,14:68,6:69,26:72,49:121,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($VC,$V1,{12:7,13:8,15:11,59:62,61:64,23:67,14:68,6:69,26:72,49:122,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),o($VC,$V1,{12:7,13:8,15:11,59:62,61:64,23:67,14:68,6:69,26:72,49:123,2:$Va,10:$Vt,18:$V4,21:$V5,27:$Vg,29:$Vi,66:$Vu,67:$Vv,68:$Vw,69:$Vx}),{7:$V6,11:[1,124],18:$V7},{11:[1,125]},{11:[1,126]},{11:[1,127]},o($Ve,[2,28]),o($Ve,[2,27]),{18:[1,129],24:[1,132],25:130,26:131,27:$Vg,28:$Vh,33:128},{9:[2,59]},{9:[2,60]},o($Vy,[2,62]),o($Vy,[2,63]),o($Vy,[2,64]),o($Vy,[2,65]),o($Vy,[2,66]),o($Vy,[2,67]),o($Vz,[2,73]),o($Vz,[2,74]),o($Vz,[2,75]),o($Vz,[2,76]),o($Vz,[2,77]),o($Vz,[2,70]),o($VA,[2,71]),o($VA,[2,84]),o($VA,[2,85]),o($Ve,[2,33]),o($Ve,[2,34]),o($Ve,[2,35]),o($Ve,[2,36]),o($Ve,[2,37])],
defaultActions: {13:[2,1],14:[2,2],31:[2,3],32:[2,5],33:[2,6],48:[2,40],49:[2,41],52:[2,46],54:[2,49],81:[2,39],82:[2,42],83:[2,45],84:[2,48],87:[2,56],111:[2,59],112:[2,60]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/*espacio en blanco*/
break;
case 1:return 20;
break;
case 2:return 21;
break;
case 3:return 29;
break;
case 4:return 28;
break;
case 5:return 27;
break;
case 6:return 68;
break;
case 7:return 69;
break;
case 8:return 34;
break;
case 9:return 36;
break;
case 10:return 37;
break;
case 11:return 38;
break;
case 12:return 35;
break;
case 13:return 39;
break;
case 14:return 40;
break;
case 15:return 41;
break;
case 16:return 42;
break;
case 17:return 43;
break;
case 18:return 7;
break;
case 19:return 62;
break;
case 20:return 63;
break;
case 21:return 24;
break;
case 22:return 64;
break;
case 23:return 53;
break;
case 24:return 54;
break;
case 25:return 56;
break;
case 26:return 58;
break;
case 27:return 55;
break;
case 28:return 57;
break;
case 29:return 52;
break;
case 30:return 51;
break;
case 31:return 65;
break;
case 32:return 10;
break;
case 33:return 11;
break;
case 34:return 8;
break;
case 35:return 9;
break;
case 36:return 32;
break;
case 37:return 67;
break;
case 38:return 18;
break;
case 39:
break;
case 40:return 66;
break;
case 41:return 5;
break;
case 42:
    agregarErrorLexico("Lexico",yy_.yytext,yy_.yylloc.first_line,yy_.yylloc.first_column+1);
    
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/)/,/^(?:\.)/,/^(?:@)/,/^(?:node\b)/,/^(?:text\b)/,/^(?:last\b)/,/^(?:position\b)/,/^(?:ancestor\b)/,/^(?:attribute\b)/,/^(?:child\b)/,/^(?:descendant\b)/,/^(?:-or-self\b)/,/^(?:following\b)/,/^(?:-sibling\b)/,/^(?:parent\b)/,/^(?:preceding\b)/,/^(?:self\b)/,/^(?:\|)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:div\b)/,/^(?:=)/,/^(?:!=)/,/^(?:<)/,/^(?:<=)/,/^(?:>)/,/^(?:>)/,/^(?:or\b)/,/^(?:and\b)/,/^(?:mod\b)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?::)/,/^(?:(0|[1-9][0-9]*)(\.(0|[0-9]*[1-9](0)?))?)/,/^(?:\w+)/,/^(?:&&[^\n]*)/,/^(?:"[^"\""]*")/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = AnalyzerXpathDesc;
exports.Parser = AnalyzerXpathDesc.Parser;
exports.parse = function () { return AnalyzerXpathDesc.parse.apply(AnalyzerXpathDesc, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}