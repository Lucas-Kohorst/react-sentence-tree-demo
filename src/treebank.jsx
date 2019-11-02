import React from "react";

export const TreeBank = 
        <div>
        <h3>Part-of-speech tags</h3>
        <p>Part-of-speech tags are assigned to a single word according to its role in the sentence. Traditional grammar classifies words based on eight parts of speech: the verb (<span class="postag">VB</span>), the noun (<span class="postag">NN</span>), the pronoun
        (
        <span class="postag">PR</span>+<span class="postag">DT</span>), the adjective (<span class="postag">JJ</span>), the adverb (<span class="postag">RB</span>), the preposition (<span class="postag">IN</span>), the conjunction (<span class="postag">CC</span>),
        and the interjection (<span class="postag">UH</span>).</p>
        <table class="border">
        <tbody>
        <tr>
        <td><span class="smallcaps">Tag </span></td>
        <td><span class="smallcaps">Description </span></td>
        <td class="smallcaps">Example</td>
        </tr>
        <tr>
        <td><span class="postag">CC </span></td>
        <td>conjunction, coordinating</td>
        <td><em>and, or, but</em></td>
        </tr>
        <tr>
        <td><span class="postag">CD </span></td>
        <td>cardinal number</td>
        <td><em>five, three, 13%</em></td>
        </tr>
        <tr>
        <td><span class="postag">DT </span></td>
        <td>determiner</td>
        <td><em>the, a, these <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">EX </span></td>
        <td>existential there</td>
        <td><em><span>there</span> were six boys <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">FW </span></td>
        <td>foreign word</td>
        <td><em>mais <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">IN </span></td>
        <td>conjunction, subordinating or preposition</td>
        <td><em>of, on, before, unless <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">JJ </span></td>
        <td>adjective</td>
        <td><em>nice, easy </em></td>
        </tr>
        <tr>
        <td><span class="postag">JJR </span></td>
        <td>adjective, comparative</td>
        <td><em>nicer, easier</em></td>
        </tr>
        <tr>
        <td><span class="postag">JJS </span></td>
        <td>adjective, superlative</td>
        <td><em>nicest, easiest <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">LS </span></td>
        <td>list item marker</td>
        <td><em>&nbsp;</em></td>
        </tr>
        <tr>
        <td><span class="postag">MD </span></td>
        <td>verb, modal auxillary</td>
        <td><em>may, should <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">NN </span></td>
        <td>noun, singular or mass</td>
        <td><em>tiger, chair, laughter <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">NNS </span></td>
        <td>noun, plural</td>
        <td><em>tigers, chairs, insects <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">NNP </span></td>
        <td>noun, proper singular</td>
        <td><em>Germany, God, Alice <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">NNPS </span></td>
        <td>noun, proper plural</td>
        <td><em>we met two Christmases ago <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">PDT </span></td>
        <td>predeterminer</td>
        <td><em><span >both</span> his children <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">POS</span></td>
        <td>possessive ending</td>
        <td><em>'s</em></td>
        </tr>
        <tr>
        <td><span class="postag">PRP </span></td>
        <td>pronoun, personal</td>
        <td><em>me, you, it <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">PRP$ </span></td>
        <td>pronoun, possessive</td>
        <td><em>my, your, our <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">RB </span></td>
        <td>adverb</td>
        <td><em>extremely, loudly, hard&nbsp; <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">RBR </span></td>
        <td>adverb, comparative</td>
        <td><em>better <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">RBS </span></td>
        <td>adverb, superlative</td>
        <td><em>best <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">RP </span></td>
        <td>adverb, particle</td>
        <td><em>about, off, up <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">SYM </span></td>
        <td>symbol</td>
        <td><em>% <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">TO </span></td>
        <td>infinitival to</td>
        <td><em>what <span >to</span> do? <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">UH </span></td>
        <td>interjection</td>
        <td><em>oh, oops, gosh <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">VB </span></td>
        <td>verb, base form</td>
        <td><em>think <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">VBZ </span></td>
        <td>verb, 3rd person singular present</td>
        <td><em>she <span >thinks </span><br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">VBP </span></td>
        <td>verb, non-3rd person singular present</td>
        <td><em>I <span >think </span><br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">VBD </span></td>
        <td>verb, past tense</td>
        <td><em>they <span >thought </span><br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">VBN </span></td>
        <td>verb, past participle</td>
        <td><em>a <span >sunken</span> ship <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">VBG </span></td>
        <td>verb, gerund or present participle</td>
        <td><em><span >thinking</span> is fun <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">WDT </span></td>
        <td><em>wh</em>-determiner</td>
        <td><em>which, whatever, whichever <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">WP </span></td>
        <td><em>wh</em>-pronoun, personal</td>
        <td><em>what, who, whom <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">WP$</span></td>
        <td><em>wh</em>-pronoun, possessive</td>
        <td><em>whose, whosever <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">WRB</span></td>
        <td><em>wh</em>-adverb</td>
        <td><em>where, when <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">. </span></td>
        <td>punctuation mark, sentence closer</td>
        <td><em>.;?* <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">, </span></td>
        <td>punctuation mark, comma</td>
        <td><em>, <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">: </span></td>
        <td>punctuation mark, colon</td>
        <td><em>: <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">( </span></td>
        <td>contextual separator, left paren</td>
        <td><em>( <br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">) </span></td>
        <td>contextual separator, right paren</td>
        <td><em>) <br /></em></td>
        </tr>
        </tbody>
        </table>
        <h3>Chunk tags</h3>
        <p>Chunk tags are assigned to groups of words that belong together (i.e. phrases). The most common phrases are the noun phrase (<span class="postag">NP</span>, for example <em>the black cat</em>) and the verb phrase (<span class="postag">VP</span>, for example
        <em>is purring</em>).</p>
        <table class="border">
        <tbody>
        <tr>
        <td><span class="smallcaps">Tag </span></td>
        <td><span class="smallcaps">Description </span></td>
        <td><span class="smallcaps">Words </span></td>
        <td><span class="smallcaps">Example </span></td>
        <td align="right">%</td>
        </tr>
        <tr>
        <td><span class="postag">NP </span></td>
        <td>noun phrase<span class="postag">&nbsp;</span></td>
        <td><span class="postag">DT</span>+<span class="postag">RB</span>+<span class="postag">JJ</span>+<span class="postag">NN</span> + <span class="postag">PR</span></td>
        <td><em>the strange bird</em></td>
        <td align="right">&nbsp;51</td>
        </tr>
        <tr>
        <td><span class="postag">PP </span></td>
        <td>prepositional phrase</td>
        <td><span class="postag">TO</span>+<span class="postag">IN </span></td>
        <td><em>in between</em></td>
        <td align="right">&nbsp;19</td>
        </tr>
        <tr>
        <td><span class="postag">VP&nbsp; </span></td>
        <td>verb phrase&nbsp;</td>
        <td><span class="postag">RB</span>+<span class="postag">MD</span>+<span class="postag">VB&nbsp; </span></td>
        <td><em>was looking<br /></em></td>
        <td align="right">9</td>
        </tr>
        <tr>
        <td><span class="postag">ADVP</span></td>
        <td>adverb phrase</td>
        <td><span class="postag">RB</span></td>
        <td><em>also<br /></em></td>
        <td align="right">&nbsp;6</td>
        </tr>
        <tr>
        <td><span class="postag">ADJP</span></td>
        <td>adjective phrase<span class="postag">&nbsp;</span></td>
        <td><span class="postag">CC</span>+<span class="postag">RB</span>+<span class="postag">JJ</span></td>
        <td><em>warm and cosy</em></td>
        <td align="right">&nbsp;3</td>
        </tr>
        <tr>
        <td><span class="postag">SBAR</span></td>
        <td>subordinating conjunction&nbsp;</td>
        <td><span class="postag">IN</span></td>
        <td><em><span >whether</span> or not<br /></em></td>
        <td align="right">3</td>
        </tr>
        <tr>
        <td><span class="postag">PRT </span></td>
        <td>particle</td>
        <td><span class="postag">RP</span></td>
        <td><em><span >up</span> the stairs</em></td>
        <td align="right">&nbsp;1</td>
        </tr>
        <tr>
        <td><span class="postag">INTJ</span></td>
        <td>interjection</td>
        <td><span class="postag">UH</span></td>
        <td><em>hello</em><em><br /></em></td>
        <td align="right">&nbsp;0</td>
        </tr>
        </tbody>
        </table>
        <p>The IOB prefix marks whether a word is inside or outside of a chunk.</p>
        <table class="border">
        <tbody>
        <tr>
        <td><span class="smallcaps">Tag </span></td>
        <td><span class="smallcaps">Description </span></td>
        </tr>
        <tr>
        <td><span class="postag">I-</span></td>
        <td>inside the chunk</td>
        </tr>
        <tr>
        <td><span class="postag">B-</span></td>
        <td>inside the chunk, preceding word is part of a different chunk</td>
        </tr>
        <tr>
        <td><span class="postag">O </span></td>
        <td>not part of a chunk</td>
        </tr>
        </tbody>
        </table>
        <p>A prepositional noun phrase (<span class="postag">PNP</span>) is a group of chunks starting with a preposition (<span class="postag">PP</span>) followed by noun phrases (<span class="postag">NP</span>), for example: <em>under the table</em>.</p>
        <table class="border">
        <tbody>
        <tr>
        <td><span class="smallcaps">Tag </span></td>
        <td><span class="smallcaps">Description </span></td>
        <td class="smallcaps">Chunks</td>
        <td><span class="smallcaps">Example </span></td>
        </tr>
        <tr>
        <td><span class="postag">PNP</span></td>
        <td>prepositional noun phrase</td>
        <td><span class="postag">PP</span>+<span class="postag">NP</span><span class="postag"> </span></td>
        <td><em>as of today</em></td>
        </tr>
        </tbody>
        </table>
        <h3>Relation tags</h3>
        <p>Relations tags describe the relation between different chunks, and clarify the role of a chunk in that relation. The most common roles in a sentence are <span class="postag">SBJ</span> (subject noun phrase) and <span class="postag">OBJ</span> (object
        noun phrase). They link <span class="postag">NP</span> to <span class="postag">VP</span> chunks. The subject of a sentence is the person, thing, place or idea that is <em>doing</em> or <em>being</em> something. The object of a sentence is the person/thing
        affected by the action.</p>
        <table class="border">
        <tbody>
        <tr>
        <td><span class="smallcaps">Tag </span></td>
        <td><span class="smallcaps">Description </span></td>
        <td class="smallcaps">Chunks</td>
        <td><span class="smallcaps">Example </span></td>
        <td align="right"><span class="smallcaps">%</span></td>
        </tr>
        <tr>
        <td><span class="postag">-SBJ</span></td>
        <td>sentence subject</td>
        <td><span class="postag">NP</span><span class="postag"> </span></td>
        <td><em><span >the cat</span> sat on the mat<br /></em></td>
        <td align="right">35</td>
        </tr>
        <tr>
        <td><span class="postag">-OBJ</span></td>
        <td>sentence object</td>
        <td><span class="postag">NP</span>+<span class="postag">SBAR</span></td>
        <td><em>the cat grabs <span >the fish</span><br /></em></td>
        <td align="right">27</td>
        </tr>
        <tr>
        <td><span class="postag">-PRD </span></td>
        <td>predicate</td>
        <td><span class="postag">PP</span>+<span class="postag">NP</span>+<span class="postag">ADJP </span></td>
        <td><em>the cat feels <span >warm and fuzzy</span><br /></em></td>
        <td align="right">7</td>
        </tr>
        <tr>
        <td><span class="postag">-TMP</span></td>
        <td>temporal&nbsp;</td>
        <td><span class="postag">PP</span>+<span class="postag">NP</span>+<span class="postag">ADVP</span></td>
        <td><em>arrive </em><em><span >at noon</span> <br /></em></td>
        <td align="right">7</td>
        </tr>
        <tr>
        <td><span class="postag">-CLR </span></td>
        <td>closely related</td>
        <td><span class="postag">PP</span>+<span class="postag">NP</span>+<span class="postag">ADVP </span></td>
        <td><em>work </em><em><span >as a researcher</span> <br /></em></td>
        <td align="right">6</td>
        </tr>
        <tr>
        <td><span class="postag">-LOC</span></td>
        <td>location&nbsp;</td>
        <td><span class="postag">PP&nbsp; </span></td>
        <td><em>live </em><em><span >in Belgium</span> <br /></em></td>
        <td align="right">4</td>
        </tr>
        <tr>
        <td><span class="postag">-DIR&nbsp; </span></td>
        <td>direction</td>
        <td><span class="postag">PP </span></td>
        <td><em>walk</em><em> <span >towards</span> the door<br /></em></td>
        <td align="right">3</td>
        </tr>
        <tr>
        <td><span class="postag">-EXT</span></td>
        <td>extent</td>
        <td><span class="postag">PP</span>+<span class="postag">NP </span></td>
        <td><em>drop <span >10 %</span><br /></em></td>
        <td align="right">1</td>
        </tr>
        <tr>
        <td><span class="postag">-PRP</span></td>
        <td>purpose</td>
        <td><span class="postag">PP</span>+<span class="postag">SBAR </span></td>
        <td><em>die <span >as a result</span> of <br /></em></td>
        <td align="right">1</td>
        </tr>
        </tbody>
        </table>
        <h3>Anchor tags</h3>
        <p>Anchor tags describe how prepositional noun phrases (<span class="postag">PNP</span>) are attached to other chunks in the sentence. For example, in the sentence, <em>I eat pizza with a fork</em>, the anchor of <em>with a fork</em> is <em>eat</em> because
        it answers the question: "In what way do I eat?"</p>
        <table class="border">
        <tbody>
        <tr>
        <td><span class="smallcaps">Tag </span></td>
        <td><span class="smallcaps">Description </span></td>
        <td><span class="smallcaps">Example </span></td>
        </tr>
        <tr>
        <td><span class="postag">A1</span></td>
        <td>anchor chunks that corresponds to <span class="postag">P1</span></td>
        <td><em><span >eat</span> with a fork<br /></em></td>
        </tr>
        <tr>
        <td><span class="postag">P1 </span></td>
        <td><span class="postag">PNP</span> that corresponds to <span class="postag">A1 </span></td>
        <td><em>eat <span >with a fork</span><br /></em></td>
        </tr>
        </tbody>
        </table>
        </div>